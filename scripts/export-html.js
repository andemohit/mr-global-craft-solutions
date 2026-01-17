#!/usr/bin/env node
const fs = require('fs').promises
const path = require('path')

const OUT_DIR = path.resolve(process.cwd(), 'out')

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) {
      files.push(...(await walk(full)))
    } else {
      files.push(full)
    }
  }
  return files
}

function hasExtension(p) {
  const last = p.split('/').pop()
  return last && last.includes('.')
}

function shouldSkipRootRelative(href) {
  if (!href.startsWith('/')) return true // not root-relative
  if (href.startsWith('/_next')) return true
  if (href.startsWith('/static')) return true
  if (href.startsWith('/images')) return true
  if (href.startsWith('/favicon')) return true
  if (href.startsWith('/api/')) return true
  if (href.includes('://')) return true
  if (href.startsWith('/mailto:') || href.startsWith('/tel:')) return true
  return false
}

function rewriteHref(href) {
  // Preserve query and hash
  const hashIndex = href.indexOf('#')
  const qIndex = href.indexOf('?')
  const firstIndex = hashIndex === -1 ? qIndex : qIndex === -1 ? hashIndex : Math.min(qIndex, hashIndex)

  const before = firstIndex === -1 ? href : href.slice(0, firstIndex)
  const after = firstIndex === -1 ? '' : href.slice(firstIndex)

  let base = before

  // root (/ or empty) -> /index.html
  if (base === '/' || base === '') return '/index.html' + after

  // strip trailing slash
  if (base.endsWith('/')) base = base.slice(0, -1)

  // if has extension already, leave
  const last = base.split('/').pop()
  if (last && last.includes('.')) return href

  return base + '.html' + after
}

async function main() {
  try {
    const all = await walk(OUT_DIR)

    // 1) Copy every non-root index.html to a sibling .html (e.g. out/about/index.html -> out/about.html)
    const indexFiles = all.filter((f) => f.endsWith('index.html'))
    for (const idx of indexFiles) {
      const rel = path.relative(OUT_DIR, idx).replace(/\\/g, '/')
      if (rel === 'index.html') continue // skip root index
      const dir = path.dirname(rel) // e.g. 'about' or 'services/frame'
      const target = path.join(OUT_DIR, dir + '.html')
      await fs.copyFile(idx, target)
      console.log(`created ${path.relative(process.cwd(), target)}`)
    }

    // 2) Rewrite root-relative links in all html files to include .html where appropriate
    const htmlFiles = all.filter((f) => f.endsWith('.html'))
    for (const file of htmlFiles) {
      let content = await fs.readFile(file, 'utf8')
      let updated = content

      // replace href="/something..."
      updated = updated.replace(/href=("|')([^"']+)("|')/g, (m, q1, href, q2) => {
        try {
          if (!href.startsWith('/')) return m
          if (href.endsWith('.html')) return m
          if (shouldSkipRootRelative(href)) return m
          // skip assets/extensions
          const last = href.split('/').pop()
          if (last && last.includes('.')) return m

          const newHref = rewriteHref(href)
          return `href=${q1}${newHref}${q2}`
        } catch (e) {
          return m
        }
      })

      // also handle <a ...> without quotes (rare) and src="/..." for <link> rel canonical
      updated = updated.replace(/href=([^"'\s>]+)/g, (m, href) => {
        if (href.startsWith('"') || href.startsWith("'")) return m
        if (!href.startsWith('/')) return m
        if (href.endsWith('.html')) return m
        if (shouldSkipRootRelative(href)) return m
        const newHref = rewriteHref(href)
        return `href="${newHref}"`
      })

      // rewrite canonical/link rel=alternate hrefs and meta tags if any
      if (updated !== content) {
        await fs.writeFile(file, updated, 'utf8')
        console.log(`rewrote links in ${path.relative(process.cwd(), file)}`)
      }
    }

    console.log('post-export html processing complete')
  } catch (err) {
    console.error('error in export-html:', err)
    process.exit(1)
  }
}

main()

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="p-8 rounded-xl bg-card border border-border text-center">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-foreground">Thank You for Your Inquiry!</h3>
        <p className="mt-2 text-muted-foreground">
          We have received your message and will get back to you within 24-48 business hours.
        </p>
        <Button className="mt-6 bg-primary hover:bg-navy-light" onClick={() => setSubmitted(false)}>
          Submit Another Inquiry
        </Button>
      </div>
    )
  }

  return (
    <div className="p-8 rounded-xl bg-card border border-border">
      <h2 className="text-2xl font-bold text-foreground">Submit Your Requirement</h2>
      <p className="mt-2 text-muted-foreground">Fill out the form below and our team will contact you shortly.</p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input id="company" name="company" placeholder="Your company name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Contact Person *</Label>
            <Input id="contact" name="contact" placeholder="Your full name" required />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+1 234 567 890" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="country">Country *</Label>
            <Input id="country" name="country" placeholder="Your country" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="workers">Number of Workers</Label>
            <Input id="workers" name="workers" type="number" placeholder="e.g., 50" min="1" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="requirement">Workforce Requirement *</Label>
          <Input id="requirement" name="requirement" placeholder="e.g., Welders, Fitters, NDT Technicians" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Additional Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Provide any additional details about your project or requirements..."
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full bg-primary hover:bg-navy-light" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </Button>
      </form>
    </div>
  )
}

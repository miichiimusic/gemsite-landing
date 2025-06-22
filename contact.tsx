import SiteLayout from "@/components/site-layout"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MessageCircle, Send } from "lucide-react"

export default function Contact() {
  return (
    <SiteLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                  Get In Touch
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">Contact Us</h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  Ready to launch your luxury jewelry brand? Have questions about our partnership program? We're here to
                  help you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                    Send a Message
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                    Tell us about your vision
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Whether you're ready to start your jewelry brand or just exploring the possibilities, we'd love to
                    hear from you. Share your vision and we'll help make it a reality.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Quick Response</div>
                      <div className="text-slate-600">
                        We typically respond to all inquiries within 2-4 hours during business hours.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Free Consultation</div>
                      <div className="text-slate-600">
                        Schedule a complimentary 30-minute consultation to discuss your brand goals and partnership
                        options.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Detailed Follow-up</div>
                      <div className="text-slate-600">
                        After our initial conversation, we'll send you a detailed partnership proposal tailored to your
                        needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <form action="https://formspree.io/f/xldnlavz" method="POST" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Enter your first name"
                          className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                          className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        className="w-full px-3 py-2 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="general">General Question</option>
                        <option value="support">Customer Support</option>
                        <option value="media">Media & Press</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your vision, goals, or questions..."
                        rows={5}
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                        required
                      />
                    </div>

                    <div className="space-y-4">
                      <Button type="submit" size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                Contact Information
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Multiple ways to reach us
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Choose the method that works best for you. We're committed to responding quickly and thoroughly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Email Us</h3>
                  <div className="space-y-2">
                    <p className="text-slate-600">General inquiries</p>
                    <p className="text-indigo-600 font-medium">leo@gemsite.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                    <Phone className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Call Us</h3>
                  <div className="space-y-2">
                    <p className="text-slate-600">Main line</p>
                    <p className="text-indigo-600 font-medium">(954) 600-2311</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-12">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                Quick Answers
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Frequently asked questions
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Find quick answers to common questions. Can't find what you're looking for? Contact us directly.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "How quickly can I get started with Gemsite?",
                  answer:
                    "Most creators can have their jewelry brand live within 3-5 business days after approval. This includes custom website design, branding setup, and all backend systems configuration.",
                },
                {
                  question: "What's the best way to reach you for partnership inquiries?",
                  answer:
                    "For partnership inquiries, email leo@gemsite.com or call our partnership hotline at (954) 600-2311. We also offer free 30-minute consultation calls to discuss your specific goals.",
                },
                {
                  question: "Do you offer in-person meetings?",
                  answer:
                    "Yes! We offer in-person meetings at our Miami headquarters by appointment. We also conduct virtual meetings for creators outside the South Florida area.",
                },
                {
                  question: "How long does it take to hear back from you?",
                  answer:
                    "We typically respond to all inquiries within 2-4 hours during business hours (Monday-Friday, 9 AM-6 PM EST). For urgent matters, call us directly.",
                },
                {
                  question: "Can I schedule a call to discuss my specific situation?",
                  answer:
                    "We offer complimentary 30-minute consultation calls where we can discuss your brand vision, audience, and how Gemsite can help you succeed. Use the contact form above or call us directly to schedule.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0 ml-4">
                          <div className="h-5 w-5 text-indigo-600 transition-transform group-open:rotate-90">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </summary>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </details>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Ready to start the conversation?
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  Don't wait to turn your vision into reality. Reach out today and let's discuss how Gemsite can help
                  you build your luxury jewelry brand.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center items-start md:items-center">
                <Link href="tel:+19546002311">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 px-8">
                    Schedule a Call
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-indigo-200">
                Available Monday-Friday, 9 AM-6 PM EST • Response within 2-4 hours
              </p>
            </div>
          </div>
        </section>
      </main>
 </SiteLayout>
  )
}
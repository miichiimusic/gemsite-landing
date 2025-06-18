import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import Link from "next/link"

export default function GetStarted() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="flex-1">
        {/* Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <div className="text-left md:text-center space-y-6 mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
                      Ready to get started?
                    </h2>
                    <p className="text-lg text-slate-600">
                      Enter your details below and we'll reach out within 24 hours to begin setting up your luxury
                      jewelry brand.
                    </p>
                  </div>

                  <form action="https://formspree.io/f/xkgbzkag" method="POST" className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-medium text-slate-700">
                        Full Name *
                      </label>
                      <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        className="border-slate-200 focus:border-indigo-500 focus:ring-indigo-500"
                        required
                      />
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

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          id="terms"
                          name="terms"
                          className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-slate-300 rounded"
                          required
                        />
                        <label htmlFor="terms" className="text-sm text-slate-600">
                          I agree to the{" "}
                          <Link href="#" className="text-indigo-600 hover:underline">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="#" className="text-indigo-600 hover:underline">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <Button type="submit" size="lg" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white">
                        Submit Application
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>

                  <div className="mt-8 pt-6 border-t border-slate-200 text-left md:text-center">
                    <p className="text-sm text-slate-600 mb-4">What happens next?</p>
                    <div className="space-y-3 text-sm text-slate-600">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xs font-semibold flex-shrink-0 mt-0.5">
                          1
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">We'll contact you within 24 hours</div>
                          <div>Our team will reach out to discuss your brand vision and goals</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xs font-semibold flex-shrink-0 mt-0.5">
                          2
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">Quick approval process</div>
                          <div>Most applications are approved within 48 hours</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xs font-semibold flex-shrink-0 mt-0.5">
                          3
                        </div>
                        <div className="text-left">
                          <div className="font-semibold text-slate-900">Your brand goes live</div>
                          <div>Custom website and brand setup completed in 3-5 business days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Why creators choose Gemsite
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Join the exclusive circle of creators earning with luxury jewelry brands.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-left md:text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center md:mx-auto">
                  <div className="text-2xl font-bold text-indigo-600">$0</div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Zero Upfront Costs</h3>
                <p className="text-slate-600">
                  No setup fees, no monthly charges, no inventory investment. Start earning immediately.
                </p>
              </div>

              <div className="text-left md:text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center md:mx-auto">
                  <div className="text-2xl font-bold text-indigo-600">50%</div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Revenue Share</h3>
                <p className="text-slate-600">Earn 50% of every order with transparent pricing and monthly payouts.</p>
              </div>

              <div className="text-left md:text-center space-y-4">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center md:mx-auto">
                  <div className="text-2xl font-bold text-indigo-600">24h</div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Quick Setup</h3>
                <p className="text-slate-600">
                  From application to live website in just a few days. Start earning quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Gemsite. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-slate-500">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}

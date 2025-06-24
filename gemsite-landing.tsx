import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"
import SiteLayout from "@/components/site-layout"
import Image from "next/image"

export default function Component() {
  return (
    
<SiteLayout>
      <main className="flex-1">
        {/* Hero Section */}
<section className="w-full pb-8 md:pb-12 lg:pb-16 pt-12 md:pt-24 lg:pt-32">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="text-left md:text-center space-y-8 max-w-4xl mx-auto">
      <div className="space-y-4">
        <Badge variant="outline" className="text-indigo-600 border-indigo-200">
          Built for You
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-tight">
          We create luxury jewelry brands for influencers
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
          You can now offer a jewelry design service to your audience. 
          We handle communication, production and delivery. We split the profits.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center items-start md:items-center">
        <Link href="/get-started">
          <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  </div>
</section>

{/* Image + Pull-Up Card Section */}
<section
  className="
    w-full
    pt-12 pb-16
    md:pt-16 md:pb-20
    lg:pt-20 lg:pb-24
  "
>
  <div className="container px-4 md:px-6 mx-auto">
    <div className="relative w-full aspect-video overflow-hidden rounded-xl shadow-2xl">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-3xl blur-3xl opacity-20" />

      {/* Photo */}
      <Image
        src="/images/yorkparis-hero.jpg"
        alt="York Paris luxury jewelry showcase"
        fill
        quality={100}
        priority
        sizes="100vw"
        className="object-cover object-top"
      />

      {/* Depth Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      <div className="absolute inset-0 shadow-inner" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
    </div>

    {/* Pulled-up Card */}
    <div className="-mt-16 md:-mt-20 lg:-mt-24 px-4 md:px-6">
      <div className="max-w-xl mx-auto backdrop-blur-sm bg-white/50 rounded-2xl p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Your Brand</h3>
            <p className="text-gray-600 text-sm">Made-to-Order Jewelry Service</p>
          </div>
          <Link
            href="https://live-demo-seven.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full">
              Live Demo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                    Custom Design Service
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                    Promote your jewelry brand without changing your content
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    We provide a made-to-order jewelry design website, just add the link to your bio and effortlessly convert your audience into high-end jewelry customers.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Your Brand</div>
                      <div className="text-slate-600">
                        A modern-designed website with your name, your messaging, and your aesthetic. 100%
                        white-labeled.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Luxury Craftsmanship, On Demand</div>
                      <div className="text-slate-600">
                        Orders are crafted by expert jewelers using gold, platinum, and ethically sourced diamonds and
                        gemstones.
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900">Zero Inventory, Zero Hassle</div>
                      <div className="text-slate-600">
                        You don't buy or hold stock. We handle all production and fulfillment. You earn with every sale.
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/partnership">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 mt-6"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <Card className="bg-white border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Your Brand */}
                      <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">YB</span>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Your Brand</div>
                          <div className="text-sm text-slate-600">100% White-labeled</div>
                        </div>
                      </div>

                      {/* Luxury Craftsmanship */}
                      <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Premium Materials</div>
                          <div className="text-sm text-slate-600">Gold, Platinum, Diamonds</div>
                        </div>
                      </div>

                      {/* Zero Inventory */}
                      <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                        <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">Zero Inventory</div>
                          <div className="text-sm text-slate-600">We handle everything</div>
                        </div>
                      </div>

                      {/* Revenue Display */}
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg p-4 text-white">
                        <div className="text-center">
                          <div className="text-3xl font-bold">50%</div>
                          <div className="text-sm opacity-100">Revenue Share</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-12">
                  <div className="text-center space-y-8">
                    {/* Large striking number */}
                    <div className="relative">
                      <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                        14
                      </div>
                      <div className="absolute -top-2 -right-2 text-2xl font-bold text-indigo-600">DAYS</div>
                    </div>

                    {/* Simple arrow flow */}
                    <div className="flex items-center justify-center space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>

                      <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21h6"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Simple tagline */}
                    <div className="text-lg font-semibold text-slate-700">Concept to Doorstep</div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 order-1 lg:order-2">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                    Our Process
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                    From concept to delivery in 2 weeks
                  </h2>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    From concept to delivery, our streamlined process takes care of it all, so your customers enjoy a
                    seamless made-to-order experience, without any hassle on your end.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-sm flex-shrink-0">
                      1
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Your Customer Shares Their Vision</div>
                      <div className="text-slate-600">
                        They submit their idea, inspiration, or style preference through your branded website.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-sm flex-shrink-0">
                      2
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">We Design the Piece</div>
                      <div className="text-slate-600">
                        Our team translates their vision into a polished, custom jewelry design for approval.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-sm flex-shrink-0">
                      3
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Clear Communication & Approval</div>
                      <div className="text-slate-600">
                        We share the design, get approval, and keep the customer updated throughout the process.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                      4
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">We Handcraft & Deliver</div>
                      <div className="text-slate-600">
                        Once approved, our jewelers craft the piece using premium materials, then package and ship it
                        within two weeks. No hassle required on your end.
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/get-started">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white my-6">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge variant="outline" className="text-indigo-600 border-indigo-200 uppercase tracking-wide">
                    Gemsite Partnership
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                    Partner with the best in luxury jewelry design
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">
                        Designed with Precision, Crafted by Experts
                      </div>
                      <div className="text-slate-600">
                        Our team blends the artistry of master jewelers with modern computer design tools to bring each
                        piece to life with beauty, balance, and lasting quality.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Unmatched Customer Support</div>
                      <div className="text-slate-600">
                        We personally handle all communication with your customers—from design consultations to
                        post-delivery care—so every buyer feels valued and supported.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Premium Materials, Always</div>
                      <div className="text-slate-600">
                        We work exclusively with gold, platinum, and ethically sourced diamonds and gemstones. Never
                        plated, never compromised.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-lg">Built for Creators, Backed by Experts</div>
                      <div className="text-slate-600">
                        From branding to fulfillment, every part of our system is designed to make you look good,
                        without adding any extra work to your plate.
                      </div>
                    </div>
                  </div>
                </div>

                <Link href="/partnership">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 mt-6"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl"></div>
                <div className="relative backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden bg-[rgba(252,254,251,1)]">
                  <img
                    src="/images/partnership-showcase.jpg"
                    alt="Elegant silver ring with blue gemstone"
                    className="w-full h-auto object-contain p-8"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/90 to-white/20 p-6 text-center">
                    <p className="text-sm text-slate-500">Expertly designed and crafted luxury pieces</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200 uppercase tracking-wide">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Everything you need to know
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Get answers to the most common questions about our luxury jewelry partnership program.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Do I need to change the way I make content?",
                  answer:
                    "Not at all! Keep creating content just as you always do. Gemsite is designed to fit seamlessly into your brand. You simply share your link, and we handle the rest.",
                },
                {
                  question: "How do I earn money from my new jewelry brand?",
                  answer:
                    "You earn 50% on every order placed through your website. We handle all production, design, shipping, and customer service while you focus on promoting your usual content to your audience.",
                },
                {
                  question: "Do I have to sell or communicate with the clients?",
                  answer:
                    "Not necessarily! We handle all customer communication, design questions, and order support, so you don't have to manage any part of the sales process.",
                },
                {
                  question: "Do I need a minimum follower count?",
                  answer:
                    "Not at all! While having a larger audience can help, we've seen creators with as few as 1,000 engaged followers build successful jewelry businesses. Quality engagement matters more than follower count.",
                },
                {
                  question: "How long does it take to set up my store?",
                  answer:
                    "Most creators have their store live within 24 hours. We customize your branding and configure your website settings. No technical skills required!",
                },
                {
                  question: "Are there any upfront costs or monthly fees?",
                  answer:
                    "Absolutely not! There are zero upfront costs, no monthly fees, and no hidden charges. You only earn money when someone orders a new design. We succeed when you succeed.",
                },
              ].map((faq, index) => (
                <Card key={index} className="bg-white border border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <details className="group">
                      <summary className="flex items-center justify-between cursor-pointer list-none">
                        <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                        <div className="flex-shrink-0 ml-4">
                          <ArrowRight className="h-5 w-5 text-indigo-600 transition-transform group-open:rotate-90" />
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

            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">Still have questions?</p>
              <Link href="/contact">
                <Button variant="outline" className="border-indigo-200 text-indigo-600 hover:bg-indigo-50">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Ready to own your luxury jewelry brand?
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  Join the exclusive circle of influencers who've transformed their personal brand with custom luxury
                  jewelry. No inventory, no risk, just pure artistry and revenue.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/get-started">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 px-8">
                    Get Started
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-indigo-200">
                Join influencers already earning with custom jewelry collections.{" "}
                <Link href="/terms" className="underline underline-offset-2 text-white">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      </SiteLayout>
   )
 }
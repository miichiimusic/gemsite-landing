import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ArrowRight, DollarSign, Clock, Users, Shield, Star, Zap } from "lucide-react"
import Link from "next/link"
import SiteLayout from "@/components/site-layout"

export default function Partnership() {
  return (
    
<SiteLayout>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-8 max-w-4xl mx-auto">
              <div className="space-y-4">
                <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                  Partnership Program
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                  Everything you need to know about partnering with Gemsite
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                  A complete guide to launching your luxury jewelry brand with zero upfront costs, no inventory, and 50%
                  revenue share on every order.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center items-start md:items-center">
                <Link href="/get-started">
                  <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
                    Start Your Partnership
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                What You Get
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Your complete luxury jewelry business
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything you need to launch and run a successful jewelry brand, handled by our expert team.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Star className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Custom Branded Website</h3>
                  <p className="text-slate-600">
                    Professional, mobile-optimized website with your branding, messaging, and aesthetic. Fully
                    white-labeled with your domain.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Custom design matching your brand</li>
                    <li>• Mobile-responsive layout</li>
                    <li>• SEO optimized</li>
                    <li>• Secure payment processing</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Premium Materials Only</h3>
                  <p className="text-slate-600">
                    All pieces crafted with 14k/18k gold, platinum, sterling silver, and ethically sourced diamonds and
                    gemstones.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Solid gold (never plated)</li>
                    <li>• Conflict-free diamonds</li>
                    <li>• Certified gemstones</li>
                    <li>• Lifetime craftsmanship warranty</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Complete Customer Service</h3>
                  <p className="text-slate-600">
                    We handle all customer communication, design consultations, order updates, and post-delivery
                    support.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Design consultations</li>
                    <li>• Order tracking & updates</li>
                    <li>• Quality assurance</li>
                    <li>• Returns & exchanges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Expert Design Team</h3>
                  <p className="text-slate-600">
                    Professional jewelry designers with decades of experience translate customer visions into stunning
                    pieces.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• CAD design & 3D modeling</li>
                    <li>• Custom piece development</li>
                    <li>• Design revisions included</li>
                    <li>• Technical expertise</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Fast Production & Shipping</h3>
                  <p className="text-slate-600">
                    14-day production timeline from approval to delivery, with tracking and insurance included.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 14-day production guarantee</li>
                    <li>• Insured shipping included</li>
                    <li>• Real-time order tracking</li>
                    <li>• Luxury packaging</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">50% Revenue Share</h3>
                  <p className="text-slate-600">
                    Earn 50% of every order with transparent pricing and monthly payouts. No hidden fees or deductions.
                  </p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• 50% of total order value</li>
                    <li>• Monthly automatic payouts</li>
                    <li>• Transparent pricing</li>
                    <li>• Real-time earnings dashboard</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                How It Works
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Your journey from application to earnings
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A step-by-step breakdown of exactly what happens when you partner with Gemsite.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
              {[
                {
                  step: "01",
                  title: "Application & Approval",
                  description:
                    "Submit your application with basic information about your brand and audience. We review within 24-48 hours.",
                  details: [
                    "Complete online application (5 minutes)",
                    "Provide social media handles and audience insights",
                    "Brief brand questionnaire",
                    "Fast-track approval for established creators",
                  ],
                  timeline: "24-48 hours",
                },
                {
                  step: "02",
                  title: "Brand Setup & Website Creation",
                  description:
                    "Our team creates your custom website and sets up all backend systems with your branding.",
                  details: [
                    "Custom website design and development",
                    "Brand integration (colors, fonts, messaging)",
                    "Payment processing setup",
                    "Domain configuration and SSL certificate",
                  ],
                  timeline: "3-5 business days",
                },
                {
                  step: "03",
                  title: "Launch & Marketing Support",
                  description:
                    "Go live with your jewelry brand and receive marketing materials to promote to your audience.",
                  details: [
                    "Website goes live with your custom domain",
                    "Marketing kit with social media templates",
                    "Launch strategy consultation",
                    "Ongoing promotional support",
                  ],
                  timeline: "1 business day",
                },
                {
                  step: "04",
                  title: "Customer Orders & Design Process",
                  description:
                    "When customers place orders, our team handles everything from design consultation to final approval.",
                  details: [
                    "Customer submits design request through your site",
                    "Our designers create custom piece mockups",
                    "Customer approval process (revisions included)",
                    "Production begins once approved",
                  ],
                  timeline: "2-3 business days",
                },
                {
                  step: "05",
                  title: "Production & Delivery",
                  description:
                    "Expert jewelers craft the piece using premium materials, then package and ship directly to your customer.",
                  details: [
                    "Handcrafted by master jewelers",
                    "Quality control and inspection",
                    "Luxury packaging with your branding",
                    "Insured shipping with tracking",
                  ],
                  timeline: "10-14 business days",
                },
                {
                  step: "06",
                  title: "Payment & Ongoing Support",
                  description:
                    "Receive your 50% revenue share and continue earning with ongoing customer support and repeat orders.",
                  details: [
                    "Automatic 50% payout to your account",
                    "Customer satisfaction follow-up",
                    "Ongoing customer service support",
                    "Repeat order opportunities",
                  ],
                  timeline: "Monthly payouts",
                },
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  {/* Mobile: Step number above heading */}
                  <div className="md:hidden">
                    <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.step}
                    </div>
                  </div>

                  {/* Desktop: Step number beside content */}
                  <div className="hidden md:flex gap-8 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                        <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                          {item.timeline}
                        </Badge>
                      </div>
                      <p className="text-lg text-slate-600">{item.description}</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {item.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-slate-600">
                            <Check className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Mobile: Content without step number */}
                  <div className="md:hidden space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-semibold text-slate-900">{item.title}</h3>
                      <Badge variant="outline" className="text-indigo-600 border-indigo-200 w-fit">
                        {item.timeline}
                      </Badge>
                    </div>
                    <p className="text-lg text-slate-600">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-slate-600">
                          <Check className="h-4 w-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Revenue Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                Pricing & Revenue
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Transparent pricing, guaranteed earnings
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                No hidden fees, no upfront costs. You earn 50% of every order with complete transparency.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-8">
                <Card className="bg-white border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-6">How Revenue Sharing Works</h3>
                    <div className="space-y-6">
                      <div className="text-center p-4 bg-slate-50 rounded-lg">
                        <div className="text-lg font-semibold text-slate-900 mb-2">Customer Order</div>
                        <div className="text-3xl font-bold text-slate-900">$3,000</div>
                        <div className="text-sm text-slate-600">Custom engagement ring</div>
                      </div>

                      <div className="flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </div>

                      <div className="p-4 bg-red-50 rounded-lg">
                        <div className="font-semibold text-red-900 mb-3">Production Costs</div>
                        <div className="space-y-2 text-sm text-red-800">
                          <div className="flex justify-between">
                            <span>Materials (gold, diamonds)</span>
                            <span>$850</span>
                          </div>
                          <div className="flex justify-between">
                            <span>CAD design & craftsmanship</span>
                            <span>$80</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Shipping & packaging</span>
                            <span>$40</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Processing fees</span>
                            <span>$30</span>
                          </div>
                          <div className="border-t border-red-200 pt-2 flex justify-between font-semibold">
                            <span>Total Costs</span>
                            <span>$1,000</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center">
                        <ArrowRight className="h-6 w-6 text-slate-400" />
                      </div>

                      <div className="p-4 bg-emerald-50 rounded-lg">
                        <div className="font-semibold text-emerald-900 mb-2">Profit Split</div>
                        <div className="text-center mb-3">
                          <div className="text-2xl font-bold text-emerald-700">$2000</div>
                          <div className="text-sm text-emerald-600">($3,000 - $1,000 costs)</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-emerald-100 rounded">
                            <div className="font-semibold text-emerald-900">Your Share</div>
                            <div className="text-xl font-bold text-emerald-700">$1,000</div>
                            <div className="text-xs text-emerald-600">50% of profit</div>
                          </div>
                          <div className="text-center p-3 bg-slate-100 rounded">
                            <div className="font-semibold text-slate-700">Gemsite</div>
                            <div className="text-xl font-bold text-slate-600">$1,000</div>
                            <div className="text-xs text-slate-500">50% of profit</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-slate-900">What's Included in Your 50%</h3>
                  <div className="space-y-4">
                    {[
                      "Complete website setup and maintenance",
                      "All customer service and communication",
                      "Professional design consultations",
                      "Quality control and craftsmanship guarantee",
                      "Luxury packaging and shipping",
                      "Payment processing and security",
                      "Marketing materials and support",
                      "Real-time analytics and reporting",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Card className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-0">
                  <CardContent className="p-8 text-left md:text-center">
                    <h3 className="text-2xl font-semibold mb-4">Zero Upfront Costs</h3>
                    <p className="text-indigo-100 mb-6">
                      No setup fees, no monthly charges, no inventory costs. You only earn money when orders are placed.
                    </p>
                    <div className="text-4xl font-bold mb-2">$0</div>
                    <div className="text-indigo-200">To get started</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-16">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                Partnership Requirements
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Who can become a Gemsite partner?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                We welcome creators of all sizes who are passionate about luxury and committed to their audience.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="space-y-8">
                <Card className="bg-emerald-50 border-emerald-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center gap-2">
                      <Check className="h-5 w-5" />
                      Ideal Partners
                    </h3>
                    <ul className="space-y-3 text-emerald-800">
                      <li>• Active social media presence (any platform)</li>
                      <li>• Engaged audience interested in luxury/fashion</li>
                      <li>• Commitment to promoting your brand</li>
                      <li>• Professional communication style</li>
                      <li>• Alignment with luxury brand values</li>
                      <li>• Content creation experience</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">No Minimum Requirements</h3>
                    <ul className="space-y-3 text-blue-800">
                      <li>• No minimum follower count</li>
                      <li>• No previous jewelry experience needed</li>
                      <li>• No technical skills required</li>
                      <li>• No upfront investment</li>
                      <li>• No exclusive contracts</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-8">
                <Card className="bg-amber-50 border-amber-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Application Process</h3>
                    <div className="space-y-4 text-amber-800">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-900 text-sm font-semibold flex-shrink-0">
                          1
                        </div>
                        <div>
                          <div className="font-semibold">Submit Application</div>
                          <div className="text-sm">Basic info and social media links</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-900 text-sm font-semibold flex-shrink-0">
                          2
                        </div>
                        <div>
                          <div className="font-semibold">Review Process</div>
                          <div className="text-sm">We review within 24-48 hours</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-900 text-sm font-semibold flex-shrink-0">
                          3
                        </div>
                        <div>
                          <div className="font-semibold">Onboarding Call</div>
                          <div className="text-sm">Strategy session and setup planning</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-amber-200 rounded-full flex items-center justify-center text-amber-900 text-sm font-semibold flex-shrink-0">
                          4
                        </div>
                        <div>
                          <div className="font-semibold">Launch Preparation</div>
                          <div className="text-sm">Website creation and brand setup</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-50 border-slate-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Success Factors</h3>
                    <p className="text-slate-600 mb-4">
                      While we don't have strict requirements, partners who succeed typically have:
                    </p>
                    <ul className="space-y-2 text-slate-600">
                      <li>• Consistent content creation</li>
                      <li>• Strong audience engagement</li>
                      <li>• Professional brand image</li>
                      <li>• Clear brand messaging</li>
                      <li>• Commitment to quality</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-4 mb-12">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                Frequently Asked Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                Everything you need to know
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Detailed answers to the most common questions about our partnership program.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  question: "How much can I realistically earn with Gemsite?",
                  answer:
                    "Earnings vary based on your audience size and engagement. Partners typically earn $500-$5,000+ per month. Some of our top partners earn $10,000+ monthly. You earn 50% of every order, so a single $1,000 custom piece nets you $500. With average order values of $400-$800, most active partners see significant monthly income within 3-6 months.",
                },
                {
                  question: "What exactly do I need to do as a partner?",
                  answer:
                    "Your main job is promotion and brand building. Share your jewelry brand link with your audience through social media, content creation, and personal recommendations. We handle everything else: customer service, design consultations, production, shipping, and support. You focus on what you do best - creating content and engaging with your audience.",
                },
                {
                  question: "How long does the entire process take from order to delivery?",
                  answer:
                    "The complete timeline is 14-21 days: Customer places order → Design consultation (1-2 days) → Custom design creation (2-3 days) → Customer approval → Production (10-14 days) → Shipping (2-3 days). We keep customers updated throughout and handle all communication.",
                },
                {
                  question: "What if a customer isn't satisfied with their piece?",
                  answer:
                    "We stand behind every piece with our satisfaction guarantee. If there's an issue, we'll remake the piece at no cost or provide a full refund. Our quality control process ensures 99%+ customer satisfaction. Any issues are handled entirely by our team - you're never responsible for customer complaints or returns.",
                },
                {
                  question: "Can I see examples of other partner websites?",
                  answer:
                    "Yes! We can show you examples of successful partner sites during your onboarding call. Each site is uniquely designed to match the partner's brand, but all include professional photography, clear pricing, easy ordering process, and mobile optimization. We'll create something similar but personalized for your brand.",
                },
                {
                  question: "What kind of marketing support do you provide?",
                  answer:
                    "We provide a complete marketing kit including: social media templates, product photography, brand messaging guidelines, launch strategy consultation, ongoing promotional ideas, and seasonal campaign materials. We also offer one-on-one marketing consultations to help optimize your promotional strategy.",
                },
                {
                  question: "Are there any restrictions on what I can and cannot do?",
                  answer:
                    "Very few restrictions. You can't sell competing jewelry products while actively promoting your Gemsite brand, and all marketing must align with luxury brand standards. Otherwise, you have complete freedom in how you promote your brand. No exclusive contracts - you can end the partnership anytime with 30 days notice.",
                },
                {
                  question: "How do payments work and when do I get paid?",
                  answer:
                    "You're paid monthly via direct deposit or PayPal. Payments are processed on the 15th of each month for the previous month's orders. You can track your earnings in real-time through your partner dashboard. There's a 30-day holding period for new orders to account for any potential returns or issues.",
                },
                {
                  question: "What happens if I want to end the partnership?",
                  answer:
                    "You can end the partnership anytime with 30 days written notice. We'll continue to fulfill any pending orders and pay out all earned commissions. Your website will remain active during the notice period, then be taken down. There are no penalties or fees for ending the partnership.",
                },
                {
                  question: "Do you work with international partners?",
                  answer:
                    "Currently, we work with partners based in the United States and Canada. We ship internationally to customers, but our partner program is limited to North America due to payment processing and legal requirements. We're exploring expansion to other markets in 2024.",
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
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-blue-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-left md:text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                  Ready to start your luxury jewelry brand?
                </h2>
                <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                  Join hundreds of creators already earning with Gemsite. No upfront costs, no inventory, just pure
                  revenue potential.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center items-start md:items-center">
                <Link href="/get-started">
                  <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 px-8">
                    Apply for Partnership
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-indigo-200">
                Questions? Email us at partnerships@gemsite.com or call (555) 123-4567
              </p>
            </div>
          </div>
        </section>
      </main>
      </SiteLayout>
   )
 }
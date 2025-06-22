import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Users, Target, Heart, Zap } from "lucide-react"
import SiteLayout from "@/components/site-layout"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-left md:text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="outline" className="text-indigo-600 border-indigo-200">
                About Gemsite
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Empowering creators with luxury jewelry brands
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                We believe every creator deserves to own a luxury brand. Gemsite makes it possible to launch your own
                jewelry line without the complexity, inventory, or upfront costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-left md:text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-indigo-600 border-indigo-200">
              Meet
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              The founder behind Gemsite
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              With a lifelong background in fine jewelry, Leonardo created Gemsite to help modern creators launch
              high-end brands without the hassle.
            </p>
          </div>

          <div className="flex justify-center max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-lg max-w-sm">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-60 h-60 rounded-full mx-auto overflow-hidden">
                  <Image
                    src="/images/headshot.jpg"
                    alt="Leonardo Ortegón - Founder"
                    width={240}
                    height={240}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Leonardo Ortegon</h3>
                <p className="text-indigo-600 font-medium">Founder & CEO</p>
                <p className="text-slate-600 text-sm mt-2">
                  Family legacy in jewelry trade since the 1980s, bringing luxury craftsmanship to modern creators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl space-y-8">
          <Badge variant="outline" className="text-indigo-600 border-indigo-200">
            Our Story
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            Born from a simple belief
          </h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Born in Colombia and raised in South Florida, Leonardo Ortegon comes from a family deeply rooted in the
              jewelry trade since the 1980s. From a young age, he was immersed in the craft—learning everything from
              sales and design to CAD, stone setting, and bench work while working at his family’s store, Precious
              Moments Jewelers.
            </p>
            <p>
              After years of hands-on experience, Leonardo saw a new opportunity: creators and influencers wanted to
              launch their own jewelry lines, but had no access to the production quality or support trusted by
              traditional jewelers. That insight sparked Gemsite—a platform that empowers modern creators to launch
              luxury, made-to-order jewelry brands without managing inventory or logistics.
            </p>
            <p>
              Today, Gemsite blends expert craftsmanship with behind-the-scenes fulfillment, offering creators a true
              white-label solution. Every piece is made-to-order by professional jewelers and shipped directly to the
              customer, under the creator’s name.
            </p>
            <p>
              Still deeply connected to his family’s store, Leonardo continues to work closely with Precious Moments
              Jewelers while building Gemsite into a trusted production backbone for a new generation of jewelry
              businesses. It’s about creating the kind of partnership he always wished existed when he was on the
              retail side of the counter.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-left md:text-center space-y-4 mb-16">
            <Badge variant="outline" className="text-indigo-600 border-indigo-200">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              What drives us every day
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our values shape everything we do, from the partnerships we build to the jewelry we craft.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Creator-First", desc: "Every decision we make puts creators at the center." },
              { icon: Target, title: "Quality Excellence", desc: "We never compromise on materials or craftsmanship." },
              { icon: Zap, title: "Innovation", desc: "We constantly evolve to serve creators better." },
              { icon: Users, title: "Partnership", desc: "We build long-term relationships, not transactions." },
            ].map((item, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl"></div>
            <div className="relative backdrop-blur-sm border-0 shadow-lg rounded-2xl overflow-hidden bg-[rgba(252,254,251,1)]">
              <Image
                src="/images/partnership-showcase.jpg"
                alt="Luxury jewelry craftsmanship"
                width={600}
                height={400}
                className="object-contain p-8"
              />
            </div>
          </div>

          <div className="space-y-8">
            <Badge variant="outline" className="text-indigo-600 border-indigo-200">
              Our Mission
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Democratizing luxury brand ownership
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We believe luxury shouldn't be reserved for the few. Every creator with a vision deserves the
              opportunity to build a lasting, profitable brand that reflects their unique style and values.
            </p>
            {[
              { title: "Accessible Luxury", desc: "Making high-end jewelry brands accessible to creators of all sizes." },
              { title: "Sustainable Growth", desc: "Building long-term value through ethical craftsmanship." },
              { title: "Creative Freedom", desc: "Empowering creators to express their unique vision." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">{item.title}</div>
                  <div className="text-slate-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="container px-4 md:px-6 mx-auto text-left md:text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Ready to build your luxury brand?
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Join hundreds of creators who've already launched their jewelry brands with Gemsite. Your luxury brand awaits.
          </p>
          <Link href="/get-started">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-slate-50 px-8">
              Start Your Brand
            </Button>
          </Link>
          <p className="text-sm text-indigo-200 mt-4">No upfront costs • No inventory required • 50% revenue share</p>
        </div>
      </section>
    </SiteLayout>
  )
}

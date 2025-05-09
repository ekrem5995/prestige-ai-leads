"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Briefcase,
  CalendarCheck,
  GaugeCircle,
  Lock,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10 md:px-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        <img
          src="/logo.png"
          alt="Prestige AI Leads logo"
          className="mx-auto mb-6 w-32 h-auto md:w-40"
        />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get High-Quality Real Estate Leads Without Lifting a Finger
        </h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Prestige AI Leads uses AI-powered automation to deliver pre-qualified,
          high-scoring leads directly to your dashboard.
        </p>
        <a
          href="https://tally.so/r/mBg065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="mt-10 bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8">
            Apply for Beta Access <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </section>

      {/* How It Works */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-center">How It Works</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="h-8 w-8 text-primary" />,
              title: "Submit your info",
              desc: "We collect your market, budget, and property preferences.",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-primary" />,
              title: "We generate ads + leads",
              desc: "Our AI launches targeted ads and scores leads automatically.",
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-primary" />,
              title: "You close clients",
              desc: "You receive only Hot/Warm leads in your dashboard to convert fast.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-card p-6 rounded-xl shadow-md text-card-foreground">
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-center">Features</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {[
            {
              icon: <GaugeCircle className="h-8 w-8 text-primary bg-primary/10 p-2 rounded-full" />,
              title: "AI Scored Leads",
              desc: "Automatically ranked as Hot, Warm, or Cold — so you focus only on the best opportunities.",
            },
            {
              icon: <CalendarCheck className="h-8 w-8 text-primary bg-primary/10 p-2 rounded-full" />,
              title: "24/7 Ad Automation",
              desc: "AI writes, launches, and manages property ads while you focus on closing deals.",
            },
            {
              icon: <Briefcase className="h-8 w-8 text-primary bg-primary/10 p-2 rounded-full" />,
              title: "Smart Lead Dashboard",
              desc: "Track every lead, their score, and contact info in a clean, agent-only interface.",
            },
            {
              icon: <Lock className="h-8 w-8 text-primary bg-primary/10 p-2 rounded-full" />,
              title: "Data Privacy Guaranteed",
              desc: "Your data stays yours. Leads are private to your account, protected with secure login and encrypted access.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-xl p-6 shadow-sm flex items-start gap-4"
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Ready to transform your real estate business?
        </h2>
        <p className="mt-4 text-xl text-muted-foreground">
          Join our exclusive beta program and be among the first to experience the future of lead generation.
        </p>
        <a
          href="https://tally.so/r/mBg065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="secondary"
            className="mt-10 text-white bg-primary hover:bg-primary/90 text-lg h-14 px-8"
          >
            Apply for Beta Access <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </section>
    </div>
  );
}
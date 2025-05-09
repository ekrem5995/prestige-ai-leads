"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-10 md:px-20">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Prestige AI Leads logo"
          className="mx-auto mb-6 w-32 h-auto md:w-40"
        />

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Get High-Quality Real Estate Leads — Without Lifting a Finger
        </h1>
        <p className="mt-4 text-xl text-indigo-100">
          Prestige AI Leads uses GPT-powered automation to deliver pre-qualified, high-scoring leads directly to your dashboard.
        </p>

        {/* CTA Button */}
        <a
          href="https://tally.so/r/mBg065"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button size="lg" className="mt-10 bg-indigo-600 hover:bg-indigo-700 text-lg h-14 px-8">
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
              icon: <Zap className="h-8 w-8 text-indigo-500" />,
              title: "Submit your info",
              desc: "We collect your market, budget, and property preferences.",
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-indigo-500" />,
              title: "We generate ads + leads",
              desc: "Our AI launches targeted ads and scores leads automatically.",
            },
            {
              icon: <CheckCircle className="h-8 w-8 text-indigo-500" />,
              title: "You close clients",
              desc: "You receive only Hot/Warm leads in your dashboard to convert fast.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-900 p-6 rounded-xl shadow-md">
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold tracking-tight text-center">Features Built for Agents</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle>AI Scored Leads</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automatically ranked as Hot, Warm, or Cold — so you focus only on the best opportunities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle>24/7 Ad Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI writes, launches, and manages property ads while you focus on closing deals.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle>Smart Lead Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Track every lead, their score, and contact info in a clean, agent-only interface.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gray-900 text-white">
            <CardHeader>
              <CardTitle>Data Privacy Guaranteed</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Your data stays yours. Leads are private to your account, protected with secure login and encrypted access.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Ready to transform your real estate business?
        </h2>
        <p className="mt-4 text-xl text-indigo-100">
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
            className="mt-10 text-indigo-600 bg-white hover:bg-gray-100 text-lg h-14 px-8"
          >
            Apply for Beta Access <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </section>
    </div>
  );
}

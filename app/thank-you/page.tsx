"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4">
      <img src="/logo.png" alt="Logo" className="w-24 h-auto mb-6" />

      <h1 className="text-4xl font-bold text-center">
        🎉 You're In!
      </h1>
      <p className="mt-4 text-lg text-indigo-100 text-center max-w-md">
        Thanks for applying to join the Prestige AI Leads beta. We’ll review your request and get back to you with access details shortly.
      </p>

      <p className="mt-6 text-sm text-gray-400">
        Need help? Email <a href="mailto:team@prestigeaileads.com" className="underline">team@prestigeaileads.com</a>
      </p>

      <Link href="/">
        <Button className="mt-8">Return to Homepage</Button>
      </Link>
    </div>
  );
}

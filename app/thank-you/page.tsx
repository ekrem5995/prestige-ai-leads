"use client";

import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@uidotdev/usehooks";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ThankYouPage() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowConfetti(false), 6000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {showConfetti && (
        <Confetti
          width={width || 300}
          height={height || 300}
          numberOfPieces={250}
          recycle={false}
        />
      )}

      <img src="/logo.png" alt="Logo" className="w-24 h-auto mb-6 z-10" />

      <h1 className="text-4xl font-bold text-center z-10">🎉 You're In!</h1>
      <p className="mt-4 text-lg text-indigo-100 text-center max-w-md z-10">
        Thanks for applying to join the Prestige AI Leads beta. We’ll review your request and get back to you with access details shortly.
      </p>

      <p className="mt-6 text-sm text-gray-400 z-10">
        Need help? Email{" "}
        <a href="mailto:team@prestigeaileads.com" className="underline">
          team@prestigeaileads.com
        </a>
      </p>

      <Link href="/" className="z-10">
        <Button className="mt-8

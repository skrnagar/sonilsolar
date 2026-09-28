"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function StickyCityBar({ city, slug }: { city: string; slug: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 420);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="sticky top-16 z-30 hidden border-b bg-navy text-white md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm">
        <p>Check rooftop solar price in {city}</p>
        <Button asChild size="sm" className="bg-amber text-navy hover:bg-amber/90">
          <Link href={`/get-quote?city=${slug}`}>Check price in {city}</Link>
        </Button>
      </div>
    </div>
  );
}

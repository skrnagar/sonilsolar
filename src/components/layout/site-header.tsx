"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav } from "@/content/company";
import { waLink } from "@/lib/format";

const cities = [
  { href: "/solar-company-in-indore", label: "Indore" },
  { href: "/solar-company-in-bhopal", label: "Bhopal" },
  { href: "/solar-company-in-pune", label: "Pune" },
  { href: "/solar-company-in-madhya-pradesh", label: "Madhya Pradesh" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted">
              Solutions <ChevronDown className="size-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-xl border bg-popover p-2 opacity-0 shadow-lg ring-1 ring-foreground/5 transition group-hover:visible group-hover:opacity-100">
              {nav.solutions.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {nav.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted">
              Cities <ChevronDown className="size-3.5" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 w-52 translate-y-1 rounded-xl border bg-popover p-2 opacity-0 shadow-lg ring-1 ring-foreground/5 transition group-hover:visible group-hover:opacity-100">
              {cities.map((c) => (
                <Link key={c.href} href={c.href} className="block rounded-lg px-3 py-2 text-sm hover:bg-muted">
                  {c.label}
                </Link>
              ))}
              <Link href="/locations" className="block rounded-lg px-3 py-2 text-sm text-navy hover:bg-muted">
                All locations
              </Link>
            </div>
          </div>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href={waLink()}>WhatsApp</a>
          </Button>
          <Button asChild size="sm" className="hidden sm:inline-flex bg-navy text-white hover:bg-navy/90">
            <Link href="/get-quote">Get solar quote</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 overflow-y-auto px-4 pb-8">
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">Solutions</p>
                {nav.solutions.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm">
                    {item.label}
                  </Link>
                ))}
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Explore</p>
                {nav.primary.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm">
                    {item.label}
                  </Link>
                ))}
                {cities.map((c) => (
                  <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm">
                    {c.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-navy">
                  <Link href="/get-quote" onClick={() => setOpen(false)}>
                    Get solar quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

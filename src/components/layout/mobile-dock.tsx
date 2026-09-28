"use client";

import Link from "next/link";
import { Phone, MessageCircle, FileEdit } from "lucide-react";
import { telLink, waLink } from "@/lib/format";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={telLink()}
          className="flex flex-col items-center justify-center rounded-xl bg-muted py-2 text-[11px] font-medium"
        >
          <Phone className="mb-0.5 size-4" />
          Call
        </a>
        <a
          href={waLink()}
          className="flex flex-col items-center justify-center rounded-xl bg-[#25D366] py-2 text-[11px] font-medium text-white"
        >
          <MessageCircle className="mb-0.5 size-4" />
          WhatsApp
        </a>
        <Link
          href="/get-quote"
          className="flex flex-col items-center justify-center rounded-xl bg-navy py-2 text-[11px] font-medium text-white"
        >
          <FileEdit className="mb-0.5 size-4" />
          Get quote
        </Link>
      </div>
    </div>
  );
}

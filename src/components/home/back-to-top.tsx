"use client";

import { ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function BackToTop({ label }: { label: string }) {
  return (
    <Button
      type="button"
      size="icon-lg"
      aria-label={label}
      className="fixed bottom-5 right-5 z-40 size-12 rounded-full bg-[#6F8598] text-white shadow-lg hover:bg-[#536B80]"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ChevronUp className="size-5" aria-hidden="true" />
    </Button>
  );
}

"use client";

import type { ReactNode } from "react";
import { useEffect, useId, useState } from "react";

import { cn } from "@/lib/utils";

export function PhoneCallLink({
  phone,
  children,
  className,
  confirmTitle = "是否拨打咨询？",
  confirmDescription,
  confirmLabel = "是",
  cancelLabel = "否",
  onDial,
}: {
  phone: string;
  children: ReactNode;
  className?: string;
  confirmTitle?: string;
  confirmDescription?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onDial?: () => void;
}) {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const titleId = useId();
  const descriptionId = useId();
  const href = `tel:${phone}`;

  useEffect(() => {
    if (!isConfirmOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsConfirmOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isConfirmOpen]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      event.preventDefault();
      setIsConfirmOpen(true);
    }
  };

  const handleConfirm = () => {
    setIsConfirmOpen(false);
    onDial?.();
    window.location.href = href;
  };

  return (
    <>
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>

      {isConfirmOpen ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/40 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={confirmDescription ? descriptionId : undefined}
          onClick={() => setIsConfirmOpen(false)}
        >
          <div
            className="w-full max-w-[18rem] rounded-lg bg-white p-5 text-center shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id={titleId} className="text-lg font-bold text-slate-950">
              {confirmTitle}
            </h2>
            {confirmDescription ? (
              <p id={descriptionId} className="mt-2 text-sm leading-6 text-slate-600">
                {confirmDescription}
              </p>
            ) : null}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                onClick={() => setIsConfirmOpen(false)}
              >
                {cancelLabel}
              </button>
              <button
                type="button"
                className={cn(
                  "rounded-lg bg-[#0A5BA8] px-4 py-2.5 text-sm font-semibold text-white transition",
                  "hover:bg-[#08467F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A5BA8]/40",
                )}
                onClick={handleConfirm}
              >
                {confirmLabel}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

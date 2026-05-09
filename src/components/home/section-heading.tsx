import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  subtitle,
  description,
  headingId,
  align = "center",
  tone = "light",
}: {
  title: string;
  subtitle: string;
  description?: string;
  headingId?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div className={cn("space-y-3", align === "center" ? "mx-auto text-center" : "text-left")}>
      <div>
        <h2
          id={headingId}
          className={cn(
            "text-3xl font-bold leading-tight tracking-normal md:text-4xl",
            tone === "dark" ? "text-white" : "text-slate-950",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-1 text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "dark" ? "text-sky-200" : "text-slate-400",
          )}
        >
          {subtitle}
        </p>
      </div>
      {description ? (
        <p
          className={cn(
            "mx-auto max-w-3xl text-base leading-8 md:text-lg",
            tone === "dark" ? "text-slate-200" : "text-slate-600",
            align === "left" && "mx-0",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

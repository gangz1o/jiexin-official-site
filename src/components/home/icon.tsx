import {
  ArrowRight,
  ClipboardCheck,
  Database,
  DraftingCompass,
  Gauge,
  Headset,
  Mail,
  MapPin,
  Phone,
  Settings2,
  ShieldCheck,
  Snowflake,
  Wind,
  Wrench,
  Zap,
} from "lucide-react";

import type { IconName } from "@/types/home";
import { cn } from "@/lib/utils";

const icons = {
  air: Wind,
  arrowRight: ArrowRight,
  commission: ClipboardCheck,
  design: DraftingCompass,
  email: Mail,
  energy: Zap,
  install: Wrench,
  location: MapPin,
  maintenance: Settings2,
  phone: Phone,
  reliable: ShieldCheck,
  service: Headset,
  tank: Database,
  productAir: Wind,
  productCooling: Snowflake,
  productGauge: Gauge,
};

export function HomeIcon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = icons[name];

  return <Icon aria-hidden="true" className={cn("size-5", className)} strokeWidth={strokeWidth} />;
}

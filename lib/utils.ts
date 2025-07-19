import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import GDSCLogo from "@/public/logos/gdsc.png"
import FOSSLogo from "@/public/logos/foss-modified.png"
import IEEELogo from "@/public/logos/ieee.png"
import IEDCLogo from "@/public/logos/iedc.png"
import MULNLogo from "@/public/logos/mulearn.png"
import NSSLogo from "@/public/logos/nss.png"
import HULT from "@/public/logos/hult.png"
import RAS from "@/public/logos/ras.webp"
import ARC from "@/public/logos/arc.webp"
import MEL from "@/public/logos/meluhans.webp"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getLogoFunction = (name: string) => {
  const logoMap: Record<string, any> = {
    "GDSC - ΠΑΚ": GDSCLogo,
    "IEEE SB ΠΑΚ": IEEELogo,
    "Legacy IEDC - ΠΑΚ": IEDCLogo,
    "μlearn - ΠΑΚ": MULNLogo,
    "FOSS - ΠΑΚ": FOSSLogo,
    "NSS - ΠΑΚ": NSSLogo,
    "HULT PRIZE - ΠΑΚ": HULT,
    "Λέσχη Τουρισμού - ΠΑΚ": RAS,
    "IEEE RAS SBC ΠΑΚ, IEEE SB ΠΑΚ": RAS,
    "ARC - ΠΑΚ": ARC,
    "MELUHANS - ΠΑΚ": MEL,
  };

  return logoMap[name] || GDSCLogo;
};
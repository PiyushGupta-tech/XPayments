import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const heightClass = { sm: "h-12", md: "h-16", lg: "h-20" };

  return (
    <Link href="/" className={`flex items-center transition-all duration-200 hover:opacity-95 hover:scale-[1.02] ${className}`}>
      <Image
        src="/logo.png"
        alt="XPayments"
        width={210}
        height={64}
        quality={100}
        className={`${heightClass[size]} w-auto object-contain drop-shadow-sm`}
      />
    </Link>
  );
}

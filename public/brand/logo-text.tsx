import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({ subsets: ["latin"] });

export default function LogoText({ className = "" }: { className?: string }) {
  return (
    <span
      className={`
        ${baloo2.className}
        inline-flex items-center
        text-xl font-medium tracking-tight
        leading-none
        ${className}
      `}
    >
      The Testing Firm
    </span>
  );
}
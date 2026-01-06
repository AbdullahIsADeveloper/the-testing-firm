import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function LogoText({ className = "" }: { className?: string }) {
  return (
    <span
      className={`
        ${nunitoSans.className}
        inline-flex items-center
        text-xl font-bold tracking-tight
        leading-none
        ${className}
      `}
    >
      The Testing Firm
    </span>
  );
}
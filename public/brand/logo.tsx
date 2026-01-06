import Icon from "./icon";
import LogoText from "./logo-text";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Icon />
      <LogoText />
    </div>
  );
}
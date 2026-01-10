import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `
    mx-auto
    grid
    w-full
    max-w-7xl
    gap-3
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-4
    md:auto-rows-[425px]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  icon,
  content,
}: {
  className?: string;
  title?: string | React.ReactNode;
  icon?: React.ReactNode;
  content?: React.ReactNode;
}) => {
  return (
      <div
        className={cn(
          `
        group/bento
        shadow-input
        flex flex-col
        items-start
        rounded-xl
        border border-neutral-200
        bg-white
        p-6
        transition
        duration-200
        dark:border-white/10
        dark:bg-black
        hover:border-black
        dark:hover:border-white/20
        cursor-pointer
        `,
          className
        )}
      >
        <div className="flex items-center gap-2 mb-2 text-semibold font-medium text-neutral-600 dark:text-neutral-200">
          {icon}
          {title}
        </div>

        {content}
      </div>
  );
};

export const BentoContent = ({
  description,
  children,
}: {
  description: string;
  children?: React.ReactNode;
}) => {
  return (
    <>
      {/* Mobile: description only */}
      <p className="block md:hidden text-sm font-normal text-neutral-500 dark:text-neutral-400">
        {description}
      </p>

      {/* md+: full content */}
      <div className="hidden md:block">{children}</div>
    </>
  );
};

import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className=" flex h-14 w-full max-w-7xl items-center px-4 sm:px-6 lg:px-8 mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <span aria-hidden className="size-2 rounded-full bg-brand" />
          Asinko
        </Link>
      </div>
    </header>
  );
}

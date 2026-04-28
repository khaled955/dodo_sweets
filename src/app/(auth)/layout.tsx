import Link from "next/link";
import { Home } from "lucide-react";
import { AuthBanner } from "@/components/auth/auth-banner";
import { Logo } from "@/components/common/logo";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { LocaleSwitcher } from "@/components/common/locale-switcher";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left — decorative banner, hidden on mobile */}
        <div className="hidden p-6 lg:block">
          <AuthBanner />
        </div>

        {/* Right — form panel */}
        <div className="flex flex-col px-6 py-8 sm:px-10 lg:px-14 xl:px-20">

          {/* Top bar */}
          <div className="flex items-center">
            {/* Logo visible only on mobile (banner is hidden) */}
            <Logo className="lg:invisible" />
            <div className="ms-auto flex items-center gap-1">
              <LocaleSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Form — vertically centred */}
          <div className="flex flex-1 flex-col justify-center py-10">
            {children}
          </div>

          {/* Footer links */}
          <footer className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-medium uppercase tracking-wide transition-colors hover:text-foreground"
            >
              <Home className="size-3.5" />
              Home
            </Link>
            <span aria-hidden>•</span>
            <Link href="#" className="uppercase tracking-wide transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <span aria-hidden>•</span>
            <Link href="#" className="uppercase tracking-wide transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </footer>
        </div>

      </div>
    </div>
  );
}

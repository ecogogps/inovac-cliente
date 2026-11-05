"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { Button } from "~/ui/primitives/button";
import Image from "next/image";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/about" },
  { name: "Servicios", href: "/services" },
  { name: "Portafolio", href: "/portafolio" },
  { name: "Blog", href: "/posts" },
  { name: "Contacto", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6 max-sm:hidden p-4">
            <nav className="md:flex">
              <ul className="flex items-center gap-6">
                {navigation.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname?.startsWith(item.href));

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className={cn(
                          "text-sm font-medium transition-colors hover:text-primary",
                          isActive
                            ? "text-primary font-semibold"
                            : "text-muted-foreground",
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="sm:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          <div className="flex items-center justify-items-end">
            <Link href="/" className="flex items-center">
              <Image
                src="/logoInovacColor.svg"
                alt="Inovac Logo"
                width={300}
                height={80}
                className="p-4 h-auto w-[10rem]"
              />
            </Link>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 py-3 border-b">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname?.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block py-2 px-3 text-base font-medium rounded-md",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted/50 hover:text-primary",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}

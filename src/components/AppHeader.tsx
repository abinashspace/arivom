import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/find", label: "Find My Schemes" },
  { to: "/applications", label: "My Applications" },
  { to: "/about", label: "About" },
] as const;

export function AppHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 flex h-32 items-center justify-center bg-primary px-4">
        <div className="flex w-full max-w-3xl items-center justify-between rounded-full bg-card px-4 py-3">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-full p-2 text-foreground transition-colors hover:bg-accent"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="font-display text-2xl text-foreground">
            Arivom
          </Link>

          {/* Spacer to keep the wordmark visually centered now that there's no right-side icon */}
          <div className="h-10 w-10" aria-hidden="true" />
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/40"
          />
          <nav className="absolute inset-y-0 left-0 w-72 max-w-[85%] bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl text-foreground">Arivom</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-accent"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-8 space-y-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    activeProps={{ className: "bg-accent" }}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-8 px-4 font-mono text-xs text-muted-foreground">
              No login. Your answers stay on this device.
            </p>
          </nav>
        </div>
      )}
    </>
  );
}

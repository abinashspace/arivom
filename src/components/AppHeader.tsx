import { Link } from "@tanstack/react-router";
import { Menu, Settings, X } from "lucide-react";
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
      <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="rounded-xl p-2 text-foreground transition-colors hover:bg-secondary"
          >
            <Menu className="h-6 w-6" />
          </button>

          <Link to="/" className="font-display text-2xl font-extrabold tracking-tight text-primary">
            Arivom
          </Link>

          <Link
            to="/settings"
            aria-label="Settings"
            className="rounded-xl p-2 text-foreground transition-colors hover:bg-secondary"
          >
            <Settings className="h-6 w-6" />
          </Link>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-foreground/40"
          />
          <nav className="absolute inset-y-0 left-0 w-72 max-w-[85%] bg-card p-5 shadow-lift">
            <div className="flex items-center justify-between">
              <span className="font-display text-xl font-extrabold text-primary">Arivom</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-xl p-2 hover:bg-secondary"
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
                    activeProps={{ className: "bg-secondary text-primary" }}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/settings"
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "bg-secondary text-primary" }}
                  className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  Settings
                </Link>
              </li>
            </ul>
            <p className="mt-8 px-4 text-xs text-muted-foreground">
              No login. Your answers stay on this device.
            </p>
          </nav>
        </div>
      )}
    </>
  );
}

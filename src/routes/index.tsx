import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroFamily from "@/assets/hero-family.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arivom — Connecting People with Their Rights" },
      {
        name: "description",
        content:
          "Arivom helps Indian citizens discover the government welfare schemes they are eligible for and guides them through applying. No login needed.",
      },
      { property: "og:title", content: "Arivom — Connecting People with Their Rights" },
      {
        property: "og:description",
        content: "Discover the government schemes you qualify for and apply with clear guidance.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-20 pt-12 md:flex-row md:items-center md:pt-20">
        <div className="flex flex-col items-start text-left md:w-1/2">
          <span className="inline-flex rounded-full bg-accent px-4 py-1.5 font-mono text-xs tracking-tight text-accent-foreground">
            GOVERNMENT WELFARE SCHEMES
          </span>

          <h1 className="display-heading mt-6 text-7xl text-foreground md:text-8xl lg:text-[130px]">
            Arivom
          </h1>
          <p className="mt-2 text-lg text-muted-foreground md:text-xl">
            Connecting People with Their Rights
          </p>

          <Link
            to="/find"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Find My Scheme
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="mt-4 font-mono text-xs text-muted-foreground">
            FREE · NO ACCOUNT NEEDED · TAKES ABOUT 2 MINUTES
          </p>
        </div>

        <div className="md:w-1/2">
          <img
            src={heroFamily}
            alt="A mother and her two children reading government scheme details on a phone outside their home"
            width={1200}
            height={1408}
            className="h-80 w-full rounded-[32px] object-cover md:h-[520px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="rounded-[32px] bg-card p-8">
          <p className="text-base leading-relaxed text-slate">
            Millions of eligible citizens never receive welfare benefits — not because they don't
            qualify, but because no one told them the scheme existed. Arivom checks your eligibility
            against real central and state schemes, explains every match in plain language, and walks
            you through the paperwork.
          </p>
          <div className="mt-6">
            <Link to="/about" className="text-sm font-semibold text-foreground underline underline-offset-4">
              Learn how Arivom works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

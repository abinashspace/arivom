import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";

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
      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-20 text-center md:pt-28">
        <h1 className="font-display text-6xl font-extrabold tracking-tight text-primary md:text-8xl">
          Arivom
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Connecting People with Their Rights
        </p>

        <Link
          to="/find"
          className="mt-12 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-xl bg-primary px-8 py-5 font-display text-lg font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Find My Scheme
          <ArrowRight className="h-5 w-5" />
        </Link>

        <p className="mt-4 text-sm text-muted-foreground">
          Free · No account needed · Takes about 2 minutes
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <img
          src={heroFamily}
          alt="A mother and her two children reading government scheme details on a phone outside their home"
          width={1200}
          height={1408}
          className="h-64 w-full rounded-2xl object-cover md:h-96"
        />
        <p className="mt-8 text-center text-base leading-relaxed text-muted-foreground">
          Millions of eligible citizens never receive welfare benefits — not because they don't
          qualify, but because no one told them the scheme existed. Arivom checks your eligibility
          against real central and state schemes, explains every match in plain language, and walks
          you through the paperwork.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/about" className="text-sm font-semibold text-primary underline underline-offset-4">
            Learn how Arivom works
          </Link>
        </div>
      </section>
    </main>
  );
}

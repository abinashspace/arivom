import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  ClipboardCheck,
  FileUp,
  Headphones,
  BellRing,
  Languages,
  ShieldCheck,
  MapPin,
  ArrowRight,
} from "lucide-react";
import heroFamily from "@/assets/hero-family.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arivom — Find the government schemes you deserve" },
      {
        name: "description",
        content:
          "Arivom matches Indian citizens with welfare schemes they qualify for, checks eligibility in minutes and guides them through every application step.",
      },
      { property: "og:title", content: "Arivom — Find the government schemes you deserve" },
      {
        property: "og:description",
        content: "Discover schemes, check eligibility and apply with step-by-step guidance.",
      },
    ],
  }),
  component: Index,
});

const steps = [
  {
    icon: Search,
    title: "Discover",
    body: "Answer a few simple questions and see every central and state scheme meant for you.",
  },
  {
    icon: ClipboardCheck,
    title: "Check eligibility",
    body: "Auto-matching against income, age, occupation and location — no legal jargon.",
  },
  {
    icon: FileUp,
    title: "Apply easily",
    body: "Guided forms, document checklists and upload help until the application is submitted.",
  },
  {
    icon: BellRing,
    title: "Track status",
    body: "Real-time updates and reminders so nothing is lost after you hit submit.",
  },
];

const capabilities = [
  { icon: Languages, title: "Multi-language", body: "Tamil, Hindi, English and more — read or listen." },
  { icon: Headphones, title: "Human support", body: "Talk to a helper when documents get confusing." },
  { icon: MapPin, title: "Nearby centres", body: "Find the closest assistance centre or CSC office." },
  { icon: ShieldCheck, title: "Private by design", body: "Your documents stay encrypted and yours alone." },
];

function Index() {
  return (
    <main>
      <header className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-saffron/25 blur-3xl" />
        <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <span className="font-display text-xl font-extrabold tracking-tight">ARIVOM</span>
          <a
            href="#how"
            className="text-sm font-medium text-primary-foreground/70 transition-colors hover:text-primary-foreground"
          >
            How it works
          </a>
        </nav>

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-24 pt-10 md:grid-cols-2 md:pb-32">
          <div>
            <p className="inline-flex rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
              Public services
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">
              The scheme
              <br />
              <span className="text-saffron">she never knew</span>
              <br />
              existed.
            </h1>
            <p className="mt-6 max-w-md text-lg text-primary-foreground/75">
              Millions qualify for welfare schemes they never hear about. Arivom finds them,
              explains them, and walks you through the paperwork.
            </p>
            <a
              href="#how"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-saffron-gradient px-8 py-4 font-display text-lg font-bold text-saffron-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Find my scheme
              <ArrowRight className="h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-primary-foreground/55">
              Free, no login needed to check eligibility.
            </p>
          </div>

          <div className="relative">
            <img
              src={heroFamily}
              alt="A mother and her two children reading scheme details on a phone outside their home"
              width={1200}
              height={1408}
              className="w-full rounded-[2rem] object-cover shadow-lift md:h-[520px]"
            />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-card px-5 py-4 text-card-foreground shadow-soft">
              <p className="font-display text-2xl font-extrabold">3,200+</p>
              <p className="text-xs text-muted-foreground">central & state schemes tracked</p>
            </div>
          </div>
        </div>
      </header>

      <section id="how" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="max-w-xl text-4xl font-extrabold md:text-5xl">
          Four steps between you and your benefit.
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <article
              key={step.title}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saffron-gradient text-saffron-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Step {i + 1}
              </p>
              <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr]">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Built for the people the system keeps missing.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {capabilities.map((c) => (
              <article key={c.title} className="rounded-3xl bg-card p-6 shadow-soft">
                <c.icon className="h-6 w-6 text-saffron" />
                <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-[2.5rem] bg-hero-gradient px-8 py-16 text-center text-primary-foreground shadow-lift md:px-16">
          <h2 className="mx-auto max-w-2xl text-4xl font-extrabold md:text-5xl">
            Awareness is the first step. Access is empowerment.
          </h2>
          <a
            href="#how"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-saffron-gradient px-8 py-4 font-display text-lg font-bold text-saffron-foreground transition-transform hover:-translate-y-0.5"
          >
            Find my scheme
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display font-bold text-foreground">ARIVOM</span>
          <span>Know your rights. Claim your schemes.</span>
        </div>
      </footer>
    </main>
  );
}

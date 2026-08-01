import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Arivom — why welfare schemes go unclaimed" },
      {
        name: "description",
        content:
          "Arivom exists because millions of eligible Indians miss welfare benefits due to low awareness and confusing criteria. Here is how it helps.",
      },
      { property: "og:title", content: "About Arivom — why welfare schemes go unclaimed" },
      { property: "og:description", content: "A calm public-service utility for discovering and claiming your rights." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <h1 className="text-3xl font-extrabold">About Arivom</h1>

      <section className="mt-8 space-y-4 text-foreground/85">
        <p>
          India runs hundreds of welfare schemes — pensions, scholarships, housing support, health
          cover, income transfers. Yet millions of people who qualify never receive a rupee of it.
          Not because they were rejected, but because they never knew the scheme existed, could not
          decode the eligibility rules, or gave up somewhere in the paperwork.
        </p>
        <p>
          Arivom closes that gap with three simple steps: <strong>discover</strong> what exists,{" "}
          <strong>check eligibility</strong> against your own situation, and <strong>apply</strong>{" "}
          with a clear checklist of documents and steps.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">How matching works</h2>
        <p className="mt-3 text-foreground/85">
          There is no black box and no AI guesswork. Every scheme in Arivom carries structured
          eligibility fields — age range, income ceiling, occupation, state, social category, gender
          and disability status. Your answers are compared to those fields with plain rules, and
          each result tells you exactly why it matched or why it didn't.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">Your privacy</h2>
        <p className="mt-3 text-foreground/85">
          Arivom has no accounts and no login. Your answers and your applied-scheme list are stored
          only in your own browser. Nothing is uploaded, and nothing identifies you.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary">What Arivom is not</h2>
        <ul className="mt-3 space-y-2 text-foreground/85">
          {[
            "It is not a government website — always confirm on the official portal linked in each scheme.",
            "It does not submit applications for you or upload documents.",
            "It does not track real-time application status.",
            "Scheme details are hand-curated and may change; the official portal is the final word.",
          ].map((t) => (
            <li key={t} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {t}
            </li>
          ))}
        </ul>
      </section>

      <Link
        to="/find"
        className="mt-12 block rounded-xl bg-primary px-6 py-4 text-center font-display text-lg font-bold text-primary-foreground hover:bg-primary/90"
      >
        Find My Scheme
      </Link>
    </main>
  );
}

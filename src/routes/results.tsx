import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, ChevronRight, X } from "lucide-react";
import { loadAnswers, matchSchemes, type MatchResult } from "@/lib/matching";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Your scheme matches — Arivom" },
      {
        name: "description",
        content:
          "See which government welfare schemes you qualify for, with plain-language reasons for every match and non-match.",
      },
      { property: "og:title", content: "Your scheme matches — Arivom" },
      { property: "og:description", content: "Transparent, rule-based eligibility results for Indian welfare schemes." },
    ],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const [results, setResults] = useState<MatchResult[] | null>(null);

  useEffect(() => {
    const answers = loadAnswers();
    setResults(answers ? matchSchemes(answers) : []);
  }, []);

  if (results === null) {
    return <main className="mx-auto max-w-2xl px-5 py-16 text-muted-foreground">Checking eligibility…</main>;
  }

  if (results.length === 0) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-16 text-center">
        <h1 className="text-2xl font-extrabold">No answers yet</h1>
        <p className="mt-2 text-muted-foreground">Fill the short questionnaire to see your matches.</p>
        <Link
          to="/find"
          className="mt-8 inline-block rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
        >
          Start now
        </Link>
      </main>
    );
  }

  const matched = results.filter((r) => r.matched);
  const others = results.filter((r) => !r.matched);

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <h1 className="text-3xl font-extrabold">Your results</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {matched.length} scheme{matched.length === 1 ? "" : "s"} match your answers.{" "}
        <Link to="/find" className="font-semibold text-primary underline underline-offset-4">
          Edit answers
        </Link>
      </p>

      <h2 className="mt-10 text-sm font-bold uppercase tracking-widest text-primary">You are eligible</h2>
      <div className="mt-4 space-y-4">
        {matched.length === 0 && (
          <p className="rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground">
            None of the curated schemes match every criterion. Read the reasons below — some may only miss narrowly.
          </p>
        )}
        {matched.map((r) => (
          <Card key={r.scheme.id} result={r} />
        ))}
      </div>

      <h2 className="mt-12 text-sm font-bold uppercase tracking-widest text-muted-foreground">Not eligible right now</h2>
      <div className="mt-4 space-y-4">
        {others.map((r) => (
          <Card key={r.scheme.id} result={r} />
        ))}
      </div>
    </main>
  );
}

function Card({ result }: { result: MatchResult }) {
  const { scheme, matched, reasons, failures } = result;
  return (
    <Link
      to="/scheme/$schemeId"
      params={{ schemeId: scheme.id }}
      className={`block rounded-2xl border bg-card p-5 transition-colors hover:border-primary ${
        matched ? "border-primary/40" : "border-border"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-lg font-bold text-foreground">{scheme.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{scheme.summary}</p>
        </div>
        <ChevronRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground" />
      </div>

      <ul className="mt-4 space-y-1.5">
        {(matched ? reasons : failures).map((text) => (
          <li key={text} className="flex gap-2 text-sm text-foreground/80">
            {matched ? (
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            ) : (
              <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
            )}
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </Link>
  );
}

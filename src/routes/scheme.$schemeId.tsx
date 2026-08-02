import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, ExternalLink, Phone } from "lucide-react";
import { getScheme } from "@/lib/schemes";
import { isApplied, toggleApplied } from "@/lib/applications";

export const Route = createFileRoute("/scheme/$schemeId")({
  head: ({ params }) => {
    const scheme = getScheme(params.schemeId);
    const title = scheme ? `${scheme.name} — Arivom` : "Scheme not found — Arivom";
    const description = scheme
      ? `${scheme.benefit} Documents, step-by-step application guidance and helpline for ${scheme.name}.`
      : "This scheme is not in the Arivom directory.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SchemeDetail,
});

function SchemeDetail() {
  const { schemeId } = Route.useParams();
  const scheme = getScheme(schemeId);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    setApplied(isApplied(schemeId));
  }, [schemeId]);

  if (!scheme) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-16 text-center">
        <h1 className="text-2xl font-extrabold">Scheme not found</h1>
        <Link to="/find" className="mt-6 inline-block font-semibold text-white underline underline-offset-4">
          Back to the questionnaire
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{scheme.ministry}</p>
      <h1 className="mt-2 text-3xl font-extrabold">{scheme.name}</h1>
      <p className="mt-3 text-white/70">{scheme.summary}</p>

      <section className="glass-content mt-8 rounded-[28px] p-6">
        <h2 className="text-lg font-bold text-foreground">What you get</h2>
        <p className="mt-2 text-foreground">{scheme.benefit}</p>
      </section>

      <section className="glass-content mt-6 rounded-[28px] p-6">
        <h2 className="text-lg font-bold text-foreground">Documents required</h2>
        <ul className="mt-3 space-y-2">
          {scheme.documents.map((d) => (
            <li key={d} className="flex gap-2 text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {d}
            </li>
          ))}
        </ul>
      </section>

      <section className="glass-content mt-6 rounded-[28px] p-6">
        <h2 className="text-lg font-bold text-foreground">How to apply</h2>
        <ol className="mt-3 space-y-3">
          {scheme.steps.map((s, i) => (
            <li key={s} className="flex gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <span className="pt-0.5 text-foreground/85">{s}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        <a
          href={scheme.portal}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-content flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-semibold text-foreground transition-colors hover:border-primary/60"
        >
          <ExternalLink className="h-4 w-4" /> Official portal
        </a>
        <a
          href={`tel:${scheme.helpline.split(" ")[0]}`}
          className="glass-content flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-semibold text-foreground transition-colors hover:border-primary/60"
        >
          <Phone className="h-4 w-4" /> {scheme.helpline}
        </a>
      </section>

      <button
        onClick={() => setApplied(toggleApplied(scheme.id))}
        className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-bold transition-colors ${
          applied
            ? "border border-primary bg-secondary text-primary"
            : "bg-primary text-primary-foreground hover:bg-primary/90"
        }`}
      >
        <CheckCircle2 className="h-5 w-5" />
        {applied ? "Marked as applied" : "Mark as applied"}
      </button>
      <p className="mt-3 text-center text-xs text-white/60">
        Saved only on this device so you can track it in My Applications.
      </p>
    </main>
  );
}

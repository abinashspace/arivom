import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, ExternalLink, MapPin, Phone } from "lucide-react";
import { getScheme, schemes } from "@/lib/schemes";
import { isApplied, toggleApplied } from "@/lib/applications";

export const Route = createFileRoute("/scheme/$schemeId")({
  head: ({ params }) => {
    const scheme = getScheme(params.schemeId);
    const title = scheme ? `${scheme.name} — Arivom` : "Scheme not found — Arivom";
    const description = scheme
      ? `${scheme.summary} Documents, step-by-step application guidance and helpline for ${scheme.name}.`
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

function findRelatedScheme(name: string) {
  const needle = name.toLowerCase();
  return schemes.find((s) => s.name.toLowerCase() === needle || needle.includes(s.name.toLowerCase()));
}

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
        <Link to="/find" className="mt-6 inline-block font-semibold text-primary underline underline-offset-4">
          Back to the questionnaire
        </Link>
      </main>
    );
  }

  const mandatoryDocs = scheme.documents.filter((d) => d.mandatory);
  const optionalDocs = scheme.documents.filter((d) => !d.mandatory);
  const portalUrl = scheme.officialResources.applicationPortal ?? scheme.officialResources.officialWebsite;

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full bg-accent px-3 py-1 font-mono text-xs tracking-tight text-accent-foreground">
          {scheme.governmentLevel === "State" && scheme.state ? `${scheme.state} STATE SCHEME` : "CENTRAL SCHEME"}
        </span>
        {scheme.category && (
          <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
            {scheme.category}
          </span>
        )}
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {scheme.ministry}
        {scheme.department ? ` · ${scheme.department}` : ""}
      </p>
      <h1 className="mt-2 text-3xl font-extrabold">{scheme.name}</h1>
      {scheme.shortName && <p className="mt-1 text-sm font-semibold text-primary">{scheme.shortName}</p>}
      <p className="mt-3 text-muted-foreground">{scheme.summary}</p>

      <section className="glass-content mt-8 rounded-[28px] p-6">
        <h2 className="text-lg font-bold text-foreground">What you get</h2>
        <div className="mt-4 space-y-4">
          {scheme.benefits.map((b) => (
            <div key={b.title} className="border-l-2 border-primary/40 pl-4">
              <p className="font-semibold text-foreground">{b.title}</p>
              <p className="mt-1 text-sm text-foreground/80">{b.description}</p>
              <p className="mt-1 text-sm font-semibold text-primary">
                {b.amount}
                {b.frequency && b.frequency !== "N/A" ? ` · ${b.frequency}` : ""}
              </p>
            </div>
          ))}
        </div>
      </section>

      {scheme.eligibilityNotes.length > 0 && (
        <section className="glass-content mt-6 rounded-[28px] p-6">
          <h2 className="text-lg font-bold text-foreground">Eligibility criteria</h2>
          <ul className="mt-3 space-y-2">
            {scheme.eligibilityNotes.map((e) => (
              <li key={e} className="flex gap-2 text-foreground/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                {e}
              </li>
            ))}
          </ul>
          {scheme.notEligible.length > 0 && (
            <>
              <p className="mt-4 text-sm font-semibold text-muted-foreground">Not eligible if:</p>
              <ul className="mt-2 space-y-2">
                {scheme.notEligible.map((n) => (
                  <li key={n} className="flex gap-2 text-sm text-foreground/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive" />
                    {n}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      <section className="glass-content mt-6 rounded-[28px] p-6">
        <h2 className="text-lg font-bold text-foreground">Documents required</h2>
        <ul className="mt-3 space-y-2">
          {mandatoryDocs.map((d) => (
            <li key={d.name} className="flex gap-2 text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {d.name}
            </li>
          ))}
        </ul>
        {optionalDocs.length > 0 && (
          <>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">Optional / if applicable:</p>
            <ul className="mt-2 space-y-2">
              {optionalDocs.map((d) => (
                <li key={d.name} className="flex gap-2 text-sm text-foreground/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                  {d.name}
                </li>
              ))}
            </ul>
          </>
        )}
        {scheme.optionalDocuments.length > 0 && (
          <p className="mt-3 text-sm text-muted-foreground">
            Also useful: {scheme.optionalDocuments.join(", ")}
          </p>
        )}
      </section>

      {scheme.application.steps.length > 0 && (
        <section className="glass-content mt-6 rounded-[28px] p-6">
          <h2 className="text-lg font-bold text-foreground">How to apply</h2>
          <ol className="mt-3 space-y-3">
            {scheme.application.steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-foreground/85">{s}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>Fee: {scheme.application.fee}</span>
            <span>Processing: {scheme.application.processingTime}</span>
            {scheme.application.renewalRequired && (
              <span>Renewal: {scheme.application.renewalFrequency || "Required"}</span>
            )}
          </div>
          {scheme.application.whereToApply.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-muted-foreground">Where to apply:</p>
              <ul className="mt-2 space-y-1.5">
                {scheme.application.whereToApply.map((w) => (
                  <li key={w.name} className="flex items-start gap-2 text-sm text-foreground/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>
                      {w.name}
                      {w.website && (
                        <>
                          {" — "}
                          <a href={w.website} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                            {w.website}
                          </a>
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {scheme.faq.length > 0 && (
        <section className="glass-content mt-6 rounded-[28px] p-6">
          <h2 className="text-lg font-bold text-foreground">Frequently asked questions</h2>
          <div className="mt-3 space-y-2">
            {scheme.faq.map((f) => (
              <details key={f.question} className="rounded-xl border border-border p-4">
                <summary className="cursor-pointer font-semibold text-foreground">{f.question}</summary>
                <p className="mt-2 text-sm text-foreground/80">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {scheme.relatedSchemes.length > 0 && (
        <section className="mt-6">
          <p className="text-sm font-semibold text-muted-foreground">Related schemes</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {scheme.relatedSchemes.map((name) => {
              const related = findRelatedScheme(name);
              return related ? (
                <Link
                  key={name}
                  to="/scheme/$schemeId"
                  params={{ schemeId: related.id }}
                  className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-foreground hover:border-primary/60"
                >
                  {name}
                </Link>
              ) : (
                <span key={name} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {name}
                </span>
              );
            })}
          </div>
        </section>
      )}

      <section className="mt-6 grid gap-3 sm:grid-cols-2">
        {portalUrl && (
          <a
            href={portalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-content flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-semibold text-foreground transition-colors hover:border-primary/60"
          >
            <ExternalLink className="h-4 w-4" /> Official portal
          </a>
        )}
        <a
          href={`tel:${scheme.helpline.phone.split(" ")[0]}`}
          className="glass-content flex items-center justify-center gap-2 rounded-xl px-5 py-4 font-semibold text-foreground transition-colors hover:border-primary/60"
        >
          <Phone className="h-4 w-4" /> {scheme.helpline.phone}
        </a>
      </section>

      <button
        onClick={() => setApplied(toggleApplied(scheme.id))}
        className={`mt-8 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-lg font-bold transition-colors ${
          applied
            ? "border border-primary bg-muted text-primary"
            : "bg-primary text-primary-foreground hover:bg-primary-hover"
        }`}
      >
        <CheckCircle2 className="h-5 w-5" />
        {applied ? "Marked as applied" : "Mark as applied"}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Saved only on this device so you can track it in My Applications.
      </p>
    </main>
  );
}

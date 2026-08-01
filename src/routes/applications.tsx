import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { getApplied, type AppliedRecord } from "@/lib/applications";
import { getScheme } from "@/lib/schemes";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "My applications — Arivom" },
      {
        name: "description",
        content: "Track the government schemes you have marked as applied. Stored privately on your device.",
      },
      { property: "og:title", content: "My applications — Arivom" },
      { property: "og:description", content: "Your personal welfare scheme application tracker." },
    ],
  }),
  component: ApplicationsPage,
});

function ApplicationsPage() {
  const [records, setRecords] = useState<AppliedRecord[] | null>(null);

  useEffect(() => setRecords(getApplied()), []);

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <h1 className="text-3xl font-extrabold">My applications</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Schemes you marked as applied. Kept on this device only — no account, no server.
      </p>

      {records && records.length === 0 && (
        <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">You haven't marked any scheme as applied yet.</p>
          <Link
            to="/find"
            className="mt-6 inline-block rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
          >
            Find my schemes
          </Link>
        </div>
      )}

      <div className="mt-8 space-y-4">
        {records?.map((r) => {
          const scheme = getScheme(r.id);
          if (!scheme) return null;
          return (
            <Link
              key={r.id}
              to="/scheme/$schemeId"
              params={{ schemeId: r.id }}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary"
            >
              <div>
                <h2 className="font-display text-lg font-bold">{scheme.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Marked applied on {new Date(r.appliedAt).toLocaleDateString("en-IN")}
                </p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}

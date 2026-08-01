import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Arivom" },
      { name: "description", content: "Choose your preferred language for Arivom." },
      { property: "og:title", content: "Settings — Arivom" },
      { property: "og:description", content: "Language preference for the Arivom scheme finder." },
    ],
  }),
  component: SettingsPage,
});

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी (Hindi)" },
  { code: "ta", label: "தமிழ் (Tamil)" },
  { code: "te", label: "తెలుగు (Telugu)" },
  { code: "bn", label: "বাংলা (Bengali)" },
  { code: "mr", label: "मराठी (Marathi)" },
];

const KEY = "arivom.language";

function SettingsPage() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    setLang(localStorage.getItem(KEY) ?? "en");
  }, []);

  const choose = (code: string) => {
    setLang(code);
    localStorage.setItem(KEY, code);
  };

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <h1 className="text-3xl font-extrabold">Settings</h1>

      <h2 className="mt-8 text-sm font-bold uppercase tracking-widest text-primary">Language</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
        {LANGUAGES.map((l) => (
          <button
            key={l.code}
            onClick={() => choose(l.code)}
            className="flex w-full items-center justify-between border-b border-border px-5 py-4 text-left text-foreground last:border-b-0 hover:bg-secondary"
          >
            {l.label}
            {lang === l.code && <Check className="h-5 w-5 text-primary" />}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        Your preference is saved on this device. Full translation of scheme content is coming soon —
        for now the interface stays in English.
      </p>
    </main>
  );
}

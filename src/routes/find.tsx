import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, INDIAN_STATES, OCCUPATIONS, type Category, type Gender, type Occupation } from "@/lib/schemes";
import { saveAnswers, type Answers } from "@/lib/matching";

export const Route = createFileRoute("/find")({
  head: () => ({
    meta: [
      { title: "Check your eligibility — Arivom" },
      {
        name: "description",
        content:
          "Answer eight short questions about age, income, occupation and state to see every government scheme you qualify for.",
      },
      { property: "og:title", content: "Check your eligibility — Arivom" },
      { property: "og:description", content: "A two-minute questionnaire that matches you to real welfare schemes." },
    ],
  }),
  component: FindPage,
});

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-card px-4 py-3 text-base text-foreground focus:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const labelClass = "block text-sm font-semibold text-foreground";

function FindPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    age: "30",
    gender: "female" as Gender,
    income: "150000",
    incomeBasis: "household" as "individual" | "household",
    occupation: "farmer" as Occupation,
    state: "Tamil Nadu",
    category: "general" as Category,
    disability: "no",
  });

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const answers: Answers = {
      age: Number(form.age) || 0,
      gender: form.gender,
      income: Number(form.income) || 0,
      incomeBasis: form.incomeBasis,
      occupation: form.occupation,
      state: form.state,
      category: form.category,
      disability: form.disability === "yes",
    };
    saveAnswers(answers);
    navigate({ to: "/results" });
  };

  return (
    <main className="mx-auto max-w-2xl px-5 py-10">
      <h1 className="text-3xl font-extrabold">Find my schemes</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Eight quick questions. Nothing is uploaded — your answers stay on this device.
      </p>

      <form onSubmit={submit} className="glass-content mt-8 space-y-6 rounded-[28px] p-6 sm:p-8">
        <div>
          <label className={labelClass} htmlFor="age">
            Age
          </label>
          <input
            id="age"
            type="number"
            min={0}
            max={120}
            required
            value={form.age}
            onChange={(e) => set("age", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="gender">
            Gender
          </label>
          <select id="gender" value={form.gender} onChange={(e) => set("gender", e.target.value)} className={fieldClass}>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="income">
            Annual income (₹)
          </label>
          <input
            id="income"
            type="number"
            min={0}
            required
            value={form.income}
            onChange={(e) => set("income", e.target.value)}
            className={fieldClass}
          />
          <div className="mt-3 flex gap-2" role="radiogroup" aria-label="Income basis">
            {(["individual", "household"] as const).map((b) => (
              <button
                type="button"
                key={b}
                role="radio"
                aria-checked={form.incomeBasis === b}
                onClick={() => set("incomeBasis", b)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold capitalize transition-colors ${
                  form.incomeBasis === b
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="occupation">
            Occupation
          </label>
          <select
            id="occupation"
            value={form.occupation}
            onChange={(e) => set("occupation", e.target.value)}
            className={fieldClass}
          >
            {OCCUPATIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="state">
            State
          </label>
          <select id="state" value={form.state} onChange={(e) => set("state", e.target.value)} className={fieldClass}>
            {INDIAN_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass} htmlFor="category">
            Social category
          </label>
          <select
            id="category"
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            className={fieldClass}
          >
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <span className={labelClass} id="disability-label">
            Do you have a certified disability (40% or more)?
          </span>
          <div className="mt-3 flex gap-2" role="radiogroup" aria-labelledby="disability-label">
            {(["no", "yes"] as const).map((v) => (
              <button
                type="button"
                key={v}
                role="radio"
                aria-checked={form.disability === v}
                onClick={() => set("disability", v)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold capitalize transition-colors ${
                  form.disability === v
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-primary px-6 py-4 font-sans text-base font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          See my schemes
        </button>
      </form>
    </main>
  );
}

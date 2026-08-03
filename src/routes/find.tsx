import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  CATEGORIES,
  INDIAN_STATES,
  MARITAL_STATUSES,
  OCCUPATIONS,
  type Category,
  type Gender,
  type MaritalStatus,
  type Occupation,
} from "@/lib/schemes";
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
    age: "",
    gender: "" as Gender | "",
    maritalStatus: "any" as MaritalStatus | "any",
    income: "",
    incomeBasis: "" as "individual" | "household" | "",
    occupation: "" as Occupation | "",
    state: "",
    category: "" as Category | "",
    disability: "" as "yes" | "no" | "",
  });
  const [error, setError] = useState<string | null>(null);

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.incomeBasis) {
      setError("Please choose whether that's your individual or household income.");
      return;
    }
    if (!form.disability) {
      setError("Please answer the disability question.");
      return;
    }
    setError(null);
    const answers: Answers = {
      age: Number(form.age) || 0,
      gender: form.gender as Gender,
      maritalStatus: form.maritalStatus,
      income: Number(form.income) || 0,
      incomeBasis: form.incomeBasis,
      occupation: form.occupation as Occupation,
      state: form.state,
      category: form.category as Category,
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
            placeholder="e.g. 30"
            value={form.age}
            onChange={(e) => set("age", e.target.value)}
            className={fieldClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="gender">
            Gender
          </label>
          <select
            id="gender"
            required
            value={form.gender}
            onChange={(e) => set("gender", e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <span className={labelClass} id="marital-status-label">
            Marital status
          </span>
          <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-labelledby="marital-status-label">
            {MARITAL_STATUSES.map((m) => (
              <button
                type="button"
                key={m.value}
                role="radio"
                aria-checked={form.maritalStatus === m.value}
                onClick={() => set("maritalStatus", m.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  form.maritalStatus === m.value
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
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
            placeholder="e.g. 150000"
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
            required
            value={form.occupation}
            onChange={(e) => set("occupation", e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Select occupation
            </option>
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
          <select
            id="state"
            required
            value={form.state}
            onChange={(e) => set("state", e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Select state
            </option>
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
            required
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
            className={fieldClass}
          >
            <option value="" disabled>
              Select social category
            </option>
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

        {error && (
          <p role="alert" className="text-sm font-semibold text-destructive">
            {error}
          </p>
        )}

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

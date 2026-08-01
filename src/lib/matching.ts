import { schemes, type Category, type Gender, type Occupation, type Scheme } from "./schemes";

export interface Answers {
  age: number;
  gender: Gender;
  income: number;
  incomeBasis: "individual" | "household";
  occupation: Occupation;
  state: string;
  category: Category;
  disability: boolean;
}

export interface MatchResult {
  scheme: Scheme;
  matched: boolean;
  reasons: string[];
  failures: string[];
}

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function evaluate(scheme: Scheme, a: Answers): MatchResult {
  const e = scheme.eligibility;
  const reasons: string[] = [];
  const failures: string[] = [];

  if (e.minAge !== undefined || e.maxAge !== undefined) {
    const range =
      e.minAge !== undefined && e.maxAge !== undefined
        ? `${e.minAge}–${e.maxAge} years`
        : e.minAge !== undefined
          ? `${e.minAge} years or older`
          : `${e.maxAge} years or younger`;
    const ok = (e.minAge === undefined || a.age >= e.minAge) && (e.maxAge === undefined || a.age <= e.maxAge);
    (ok ? reasons : failures).push(
      ok ? `Your age (${a.age}) is within the required ${range}.` : `This scheme needs ${range}; you are ${a.age}.`,
    );
  }

  if (e.gender) {
    const ok = e.gender.includes(a.gender);
    (ok ? reasons : failures).push(
      ok
        ? `This scheme is meant for ${e.gender.join(" / ")} applicants.`
        : `Only ${e.gender.join(" / ")} applicants are eligible.`,
    );
  }

  if (e.maxIncome !== undefined) {
    const basis = e.incomeBasis ?? "household";
    const ok = a.income <= e.maxIncome;
    (ok ? reasons : failures).push(
      ok
        ? `Your annual ${basis} income (${inr(a.income)}) is under the ${inr(e.maxIncome)} ceiling.`
        : `The ${basis} income ceiling is ${inr(e.maxIncome)}; you entered ${inr(a.income)}.`,
    );
  }

  if (e.occupation) {
    const ok = e.occupation.includes(a.occupation);
    (ok ? reasons : failures).push(
      ok
        ? `Your occupation matches the target group (${e.occupation.join(", ")}).`
        : `This scheme is for ${e.occupation.join(", ")} applicants.`,
    );
  }

  if (e.states) {
    const ok = e.states.includes(a.state);
    (ok ? reasons : failures).push(
      ok ? `Available in ${a.state}.` : `Currently offered only in ${e.states.join(", ")}.`,
    );
  }

  if (e.categories) {
    const ok = e.categories.includes(a.category);
    (ok ? reasons : failures).push(
      ok
        ? `Your social category (${a.category.toUpperCase()}) is covered.`
        : `Reserved for ${e.categories.map((c) => c.toUpperCase()).join(", ")} applicants.`,
    );
  }

  if (e.disabilityRequired) {
    const ok = a.disability;
    (ok ? reasons : failures).push(
      ok
        ? "You indicated a certified disability, which this scheme requires."
        : "A certified disability (40%+) is required for this scheme.",
    );
  }

  if (reasons.length === 0 && failures.length === 0) {
    reasons.push("This scheme is open to all citizens — no restrictive criteria.");
  }

  return { scheme, matched: failures.length === 0, reasons, failures };
}

export function matchSchemes(a: Answers): MatchResult[] {
  return schemes
    .map((s) => evaluate(s, a))
    .sort((x, y) => Number(y.matched) - Number(x.matched) || y.reasons.length - x.reasons.length);
}

const KEY = "arivom.answers";

export function saveAnswers(a: Answers) {
  localStorage.setItem(KEY, JSON.stringify(a));
}

export function loadAnswers(): Answers | null {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Answers) : null;
  } catch {
    return null;
  }
}

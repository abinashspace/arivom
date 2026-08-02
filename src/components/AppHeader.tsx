const CATEGORIES = [
  "Central Government Schemes",
  "State Government Schemes",
  "Post Office Schemes",
  "Health & Insurance",
  "Scholarships",
  "Farmers",
  "Women & Child Welfare",
  "Senior Citizens",
  "Disability Support",
  "Housing",
  "Employment",
  "Financial Assistance",
  "Business & MSME",
  "More Government Benefits",
] as const;

function MarqueeContent({ hidden }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden}>
      {CATEGORIES.map((c) => (
        <span key={c} className="whitespace-nowrap text-sm font-semibold text-white">
          ✨ {c}
        </span>
      ))}
    </div>
  );
}

export function AppHeader() {
  return (
    <header className="relative overflow-hidden py-3" aria-label="Scheme categories">
      <div className="marquee-track flex w-max">
        <MarqueeContent />
        <MarqueeContent hidden />
      </div>
    </header>
  );
}

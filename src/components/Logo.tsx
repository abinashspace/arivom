type LogoProps = {
  /** "brand" sits on light backgrounds, "light" on the navy panels. */
  tone?: "brand" | "light";
  className?: string;
};

const TONES = {
  brand: { letter: "#171E29", figure: "#4878F3" },
  light: { letter: "#FFFFFF", figure: "#9BB8FF" },
} as const;

export function Logo({ tone = "brand", className = "h-8 w-8" }: LogoProps) {
  const { letter, figure } = TONES[tone];

  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="Arivom" className={className}>
      <path
        fill={letter}
        d="M3 40.21 18.82 10.87a5.89 5.89 0 0 1 10.36 0L45 40.21h-8.16L23.94 14.35 11.04 40.21Z"
      />
      <circle fill={figure} cx="23.94" cy="27.46" r="3.93" />
      <path fill={figure} d="M14.76 40.21a9.26 9.26 0 0 1 18.36 0Z" />
    </svg>
  );
}

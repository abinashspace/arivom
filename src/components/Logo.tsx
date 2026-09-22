type LogoProps = {
  className?: string;
};

export function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg viewBox="0 0 48 48" role="img" aria-label="Arivom" className={className}>
      <path
        fill="#171E29"
        d="M3 40.21 18.82 10.87a5.89 5.89 0 0 1 10.36 0L45 40.21h-8.16L23.94 14.35 11.04 40.21Z"
      />
      <circle fill="#4878F3" cx="23.94" cy="27.46" r="3.93" />
      <path fill="#4878F3" d="M14.76 40.21a9.26 9.26 0 0 1 18.36 0Z" />
    </svg>
  );
}

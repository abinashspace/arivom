import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import heroFamily from "@/assets/hero-family.png";
import heroFarmerField from "@/assets/hero-farmer-field.png";
import heroStudentsClassroom from "@/assets/hero-students-classroom.png";
import heroFarmerPhone from "@/assets/hero-farmer-phone.png";

const HERO_IMAGES = [
  {
    src: heroFamily,
    alt: "A mother and her two children reading government scheme details on a phone outside their home",
  },
  {
    src: heroFarmerField,
    alt: "A farmer scattering seed by hand across a green paddy field",
    objectPosition: "62% 58%",
  },
  {
    src: heroStudentsClassroom,
    alt: "Students working on laptops in a school computer lab",
  },
  {
    src: heroFarmerPhone,
    alt: "A farmer smiling while checking his phone, holding a young plant sapling",
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arivom — Connecting People with Their Rights" },
      {
        name: "description",
        content:
          "Arivom helps Indian citizens discover the government welfare schemes they are eligible for and guides them through applying. No login needed.",
      },
      { property: "og:title", content: "Arivom — Connecting People with Their Rights" },
      {
        property: "og:description",
        content: "Discover the government schemes you qualify for and apply with clear guidance.",
      },
    ],
  }),
  component: Index,
});

function HeroSlideshow() {
  const slideCount = HERO_IMAGES.length;
  const slides = [...HERO_IMAGES, HERO_IMAGES[0]];
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => i + 1);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index !== slideCount) return;
    const id = setTimeout(() => {
      setTransitionEnabled(false);
      setIndex(0);
    }, 700);
    return () => clearTimeout(id);
  }, [index, slideCount]);

  useEffect(() => {
    if (transitionEnabled) return;
    let secondFrame = 0;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => setTransitionEnabled(true));
    });
    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [transitionEnabled]);

  return (
    <div className="glass-chrome rounded-[36px] p-3 md:w-1/2">
      <div className="h-80 w-full overflow-hidden rounded-[26px] md:h-[480px]">
        <div
          className={`hero-slideshow-track flex h-full ease-in-out ${transitionEnabled ? "transition-transform duration-700" : ""}`}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((img, i) => (
            <img
              key={`${img.src}-${i}`}
              src={img.src}
              alt={img.alt}
              className="h-full w-full shrink-0 object-cover"
              style={"objectPosition" in img ? { objectPosition: img.objectPosition } : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Index() {
  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-20 pt-12 md:flex-row md:items-center md:pt-20">
        <div className="glass-chrome w-full min-w-0 flex-col items-start rounded-[32px] p-6 text-left flex sm:p-10 md:w-1/2">
          <span className="inline-flex rounded-full bg-accent px-4 py-1.5 font-mono text-xs tracking-tight text-accent-foreground">
            GOVERNMENT WELFARE SCHEMES
          </span>

          <h1 className="display-heading mt-6 text-6xl text-white sm:text-7xl md:text-8xl lg:text-[110px]">Arivom</h1>
          <p className="mt-2 text-lg text-white/80 md:text-xl">Connecting People with Their Rights</p>

          <Link
            to="/find"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-success px-8 py-4 text-base font-medium text-success-foreground transition-colors hover:bg-success/90"
          >
            Find My Scheme
            <ArrowRight className="h-5 w-5" />
          </Link>

          <p className="mt-4 font-mono text-xs text-white/60">
            FREE · NO ACCOUNT NEEDED · TAKES ABOUT 2 MINUTES
          </p>
        </div>

        <HeroSlideshow />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20">
        <div className="glass-content rounded-[32px] p-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            Millions of eligible citizens never receive welfare benefits — not because they don't
            qualify, but because no one told them the scheme existed. Arivom checks your eligibility
            against real central and state schemes, explains every match in plain language, and walks
            you through the paperwork.
          </p>
          <div className="mt-6">
            <Link to="/about" className="text-sm font-semibold text-foreground underline underline-offset-4">
              Learn how Arivom works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

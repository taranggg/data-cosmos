"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export type ExpandableCard = {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  content: (() => React.ReactNode) | React.ReactNode;
};

export default function ExpandableCardGrid({
  cards: cardsProp,
  cardMinHeight,
  cardClassName,
}: {
  cards?: ExpandableCard[];
  /** CSS value for min-height (e.g. '9rem' or '160px'). Defaults to '9rem' */
  cardMinHeight?: string;
  /** Additional className to apply to each card */
  cardClassName?: string;
}) {
  const [active, setActive] = useState<ExpandableCard | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="relative w-full max-w-[680px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white/6 dark:bg-neutral-900/60 sm:rounded-3xl overflow-hidden border border-cosmic-violet/20 backdrop-blur-md"
            >
              {/* prominent violet gradient overlay for expanded card */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-cosmic-violet/20 via-cosmic-violet/12 to-transparent" />
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-900 dark:text-neutral-100 text-2xl md:text-3xl leading-tight z-20"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-300 text-base md:text-lg leading-relaxed z-20"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-base md:text-lg leading-relaxed h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-300 z-20 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-3xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-2 items-stretch">
        {(cardsProp ?? cards).map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            role="button"
            tabIndex={0}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setActive(card);
              }
            }}
            aria-expanded={
              !!(
                active &&
                typeof active === "object" &&
                active.title === card.title
              )
            }
            className={
              `p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-200 rounded-3xl cursor-pointer relative bg-white/6 dark:bg-neutral-900/30 border border-white/6 backdrop-blur-md overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-violet focus-visible:ring-offset-2 ` +
              (cardClassName ?? "")
            }
            style={{ minHeight: cardMinHeight ?? "9rem" }}
          >
            {/* violet tint overlay */}
            <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-cosmic-violet/10 via-transparent to-transparent" />

            <div className="flex flex-col w-full">
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-semibold text-neutral-900 dark:text-neutral-100 text-left text-lg mb-2 z-10"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-neutral-600 dark:text-neutral-400 text-left text-sm z-10"
              >
                {card.description}
              </motion.p>
            </div>

            {/* small read more hint at bottom-left so users know there's more */}
            <div className="absolute left-6 bottom-4 text-xs text-cosmic-violet font-medium z-10">
              Read more →
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Lord Himesh",
    title: "Aap Ka Suroor",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Himesh Reshammiya, a renowned Indian music composer, singer, and
          actor, is celebrated for his distinctive voice and innovative
          compositions. Born in Mumbai, India, he has become a prominent figure
          in the Bollywood music industry. <br /> <br /> His songs often feature
          a blend of contemporary and traditional Indian music, capturing the
          essence of modern Bollywood soundtracks. With a career spanning over
          two decades, Himesh Reshammiya has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },
];

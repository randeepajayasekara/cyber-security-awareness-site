import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function CaseStudyExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

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
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
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
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
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
    description: "LTTE Cyber Attack to Government",
    title: "1996, 2009, 2018",
    src: "https://www.sundayobserver.lk/wp-content/uploads/2024/07/01-EU.jpg",
    ctaText: "Explore",
    ctaLink: " ",
    content: () => {
      return (
        <p>
          A most notable cyberattack that has happened in Sri Lanka is the
          cyberattack of LTTE (The Liberation Tigers of Tamil Eelam) toward the
          Sri Lankan government in the year 1998. This attack was considered as
          the very first cyberattack that a terrorist group that target a
          government. In the year 1998, the LTTE sent 800 emails to Sri Lankan
          embassies mentioning that they were the black tigers, and they are
          interrupting their communication. In 2009, The LTTE attack the website
          of the army that belongs to the Sri Lankan government. Actually, the
          LTTE attempted to control the behavior of the Sri Lankan community and
          government using modern technology. And the year 2018, a cyberattack
          occurred to the Ministry of Tourism Development and Christian
          Religious Affairs.
        </p>
      );
    },
  },
  {
    description: "Youngsters hacked former president's webpage",
    title: "2016",
    src: "https://th-i.thgim.com/public/incoming/o1oizk/article66369240.ece/alternates/LANDSCAPE_1200/IMG_Maithripala_Sirisena_4_1_1OA9IUFJ.jpg",
    ctaText: "Explore",
    ctaLink: " ",
    content: () => {
      return (
        <p>
          In 2016, the official website of president Maithreepala Sirisena was
          hacked by potential youngsters who are identified by the ‘ Sri Lankan
          youth
        </p>
      );
    },
  },

  {
    description: "Kelvin Cyber Group Incident",
    title: "2022",
    src: "https://media.wired.com/photos/65989cb9c256c0f1447f298c/master/w_1920,c_limit/WW2024_1423783201_SECURITY_Scott-Shapiro.jpg",
    ctaText: "Explore",
    ctaLink: " ",
    content: () => {
      return (
        <p>
          In 2022, the ministry of defense and ministry of education faced a
          data breach. It was reported that the cyber group which is called as
          kelvin cyber group illegally sold the access to gates in the ministry
          of defense and ministry of education.
        </p>
      );
    },
  },
  {
    description: "Anonymous leaked student data",
    title: "2022 May",
    src: "https://www.ukcybersecurity.co.uk/wp-content/uploads/Depositphotos_63221229_XL-1024x680.jpg",
    ctaText: "Explore",
    ctaLink: " ",
    content: () => {
      return (
        <p>
          The Anonymous attacked the Sri Lankan educational website which is
          known as Sri Lankan scholar. And they released out the personal
          details of the students like the email addresses
        </p>
      );
    },
  },
  {
    description: "Ransomware hit LGC",
    title: "2023 September",
    src: "https://content.kaspersky-labs.com/fm/press-releases/f8/f8a374b2a1c586b1fd4750859a19c74f/processed/ransomware-q75.jpg",
    ctaText: "Explore",
    ctaLink: " ",
    content: () => {
      return (
        <p>
          In September 2023, the Sri Lankan government was hit by a ransomware
          attack which caused a huge data loss. Around 5,000 emails are
          fractured by the cyberattack. The LGC (Lanka government cloud) network
          lost a lot of data that belonged to a certain time period
        </p>
      );
    },
  },
];

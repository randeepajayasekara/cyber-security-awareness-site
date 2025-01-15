import { AwarePageParallaxLayout } from "@/components/layouts/aware-page-parallax-layout";
import { ContactLayoutGrid } from "@/components/layouts/contact-layout-grid";
import { CardSpotlight } from "@/components/animations/card-spotlight";
import { CaseStudyExpandableCard } from "@/components/layouts/case-study-expandable-card";
import { motion } from "framer-motion";
import {
  HeroHighlight,
  Highlight,
} from "@/components/animations/hero-highlight";
import { SiteFooter } from "@/components/layouts/site-footer";

export default function AwarenessLocalPage() {
  return (
    <div>
      <div>
        <AwarePageParallaxLayout />
      </div>
      <div className="flex justify-center items-center flex-col">
        <CardSpotlight className="h-fit w-[95%]">
          <p className="text-xl font-semibold relative mt-2 text-black dark:text-white">
            Most of Sri Lankans doesn't know that, they face a range of cyber
            threats.
          </p>
          <div className="text-neutral-800 dark:text-neutral-200 mt-4 relative ">
            Including,
            <ul className="list-none  mt-2">
              <Step title="Phishing scams" />
              <p className="ml-4 text-sm dark:text-gray-400 mb-2">
                These scams often target local banks and online services, <br />
                tricking individuals into revealing sensitive information like
                usernames, passwords,
                <br /> and credit card details.
              </p>
              <Step title="Ransomware attacks" />
              <p className="ml-4 text-sm dark:text-gray-400 mb-2">
                These attacks encrypt victims' data and demand a ransom for its
                release, impacting both individuals and businesses.
              </p>
              <Step title="Malware Infections" />
              <p className="ml-4 text-sm dark:text-gray-400 mb-2">
                Malicious software can infect devices, steal data, or disrupt
                operations.
              </p>
              <Step title="Data breaches" />
              <p className="ml-4 text-sm dark:text-gray-400 mb-2">
                Organizations holding sensitive personal information face the
                risk of data breaches, potentially exposing private details to
                unauthorized parties.
              </p>
              <Step title="Online Frauds" />
              <p className="ml-4 text-sm dark:text-gray-400 mb-2">
                This encompasses various schemes, including fake online stores,
                investment scams, and social media-based frauds.
              </p>
            </ul>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 mt-4 relative text-sm">
            Ensuring your account is properly secured helps protect your
            personal information and data.
          </p>
        </CardSpotlight>
      </div>

      <div>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
          >
            Incidents of{" "}
            <Highlight className="text-black dark:text-white">
              Famous Cyberattacks
            </Highlight>
            in Sri Lanka
          </motion.h1>
        </HeroHighlight>

        <CaseStudyExpandableCard />
      </div>

      <div>
        <HeroHighlight>
          <motion.h1>
            <div className="pt-12">
              <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Contact for Cyberthreats,
                <br />
                <strong className="text-red-200">Not for joke.</strong>
              </h4>

              <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                Relevant organizations and hotlines for reporting cybercrimes or
                seeking help.
              </p>
            </div>
          </motion.h1>
        </HeroHighlight>
        <ContactLayoutGrid />
      </div>

      <SiteFooter />
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-black dark:text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-red-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

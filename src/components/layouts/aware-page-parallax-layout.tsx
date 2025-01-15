import { HeroParallax } from "@/components/animations/hero-parallax";

import thumbnail01 from '@/assets/Parallax_Thumbnails/csis_01.png';
import thumbnail02 from '@/assets/Parallax_Thumbnails/purplesec_02.png';
import thumbnail03 from '@/assets/Parallax_Thumbnails/aagit_03.png';
import thumbnail04 from '@/assets/Parallax_Thumbnails/verizon_04.png';
import thumbnail05 from '@/assets/Parallax_Thumbnails/checkpoint_05.png';
import thumbnail06 from '@/assets/Parallax_Thumbnails/cybercrimeventure_06.png';
import thumbnail07 from '@/assets/Parallax_Thumbnails/embroker_07.png';
import thumbnail08 from '@/assets/Parallax_Thumbnails/asdAcsc_08.png';
import thumbnail09 from '@/assets/Parallax_Thumbnails/secureframe_09.png';
import thumbnail10 from '@/assets/Parallax_Thumbnails/securitybrief_10.png';
import thumbnail11 from '@/assets/Parallax_Thumbnails/industrialcyber_11.png';
import thumbnail12 from '@/assets/Parallax_Thumbnails/msft_12.png';
import thumbnail13 from '@/assets/Parallax_Thumbnails/fbi_13.png';
import thumbnail14 from '@/assets/Parallax_Thumbnails/cisa_14.png';
import thumbnail15 from '@/assets/Parallax_Thumbnails/techtarget_15.png';

export function AwarePageParallaxLayout() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "CSIS",
    link: "https://csis.org/programs/strategic-technologies-program/significant-cyber-incidents",
    thumbnail: thumbnail01,
  },
  {
    title: "PurpleSec",
    link: "https://purplesec.us/breach-report/",
    thumbnail: thumbnail02,
  },
  {
    title: "AAG IT",
    link: "https://aag-it.com/the-latest-cyber-crime-statistics/",
    thumbnail: thumbnail03,
  },
  {
    title: "Verizon",
    link: "https://www.verizon.com/business/resources/reports/dbir/",
    thumbnail: thumbnail04,
  },
  {
    title: "Checkpoint",
    link: "https://www.checkpoint.com/security-report/",
    thumbnail: thumbnail05,
  },
  {
    title: "CyberSecurity Ventures",
    link: "https://cybersecurityventures.com/intrusion-daily-cyber-threat-alert/",
    thumbnail: thumbnail06,
  },

  {
    title: "Embroker",
    link: "https://www.embroker.com/blog/cyber-attack-statistics/",
    thumbnail: thumbnail07,
  },
  {
    title: "Australian Cyber Security Centre",
    link: "https://www.cyber.gov.au/about-us/view-all-content/reports-and-statistics",
    thumbnail: thumbnail08,
  },
  {
    title: "Secure Frame",
    link: "https://secureframe.com/blog/recent-cyber-attacks",
    thumbnail: thumbnail09,
  },
  {
    title: "Security Brief",
    link: "https://securitybrief.com.au/story/check-point-report-reveals-44-rise-in-cyber-attacks",
    thumbnail: thumbnail10,
  },
  {
    title: "Industrial Cyber",
    link: "https://industrialcyber.co/reports/wef-global-cybersecurity-outlook-2025-report-addresses-geopolitical-tensions-emerging-threats-to-boost-resilience/",
    thumbnail: thumbnail11,
  },

  {
    title: "Microsoft",
    link: "https://www.microsoft.com/en-us/security/security-insider/intelligence-reports/microsoft-digital-defense-report-2024",
    thumbnail: thumbnail12,
  },
  {
    title: "Federal Bureau of Investigation (FBI)",
    link: "https://www.fbi.gov/investigate/cyber",
    thumbnail: thumbnail13,
  },
  {
    title: "Cybersecurity and Infrastructure Security Agency (CISA)",
    link: "https://www.cisa.gov/stopransomware/official-alerts-statements-cisa",
    thumbnail: thumbnail14,
  },
  {
    title: "TechTarget",
    link: "https://www.techtarget.com/whatis/34-Cybersecurity-Statistics-to-Lose-Sleep-Over-in-2020",
    thumbnail: thumbnail15,
  },
];

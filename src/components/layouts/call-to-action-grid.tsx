import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBulbFilled,
  IconInputSpark,
  IconTools,
  IconUserQuestion,
} from "@tabler/icons-react";

import Bn3 from '@/assets/CTA_Banners/banner_asset_3.png';
import Bn4 from '@/assets/CTA_Banners/banner_asset_4.png';

export function CallToActionGrid() {
  return (
    <div>
        <div>
            <div className="px-8 py-8">
            <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
                Explore.
            </h4>

            <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
                Explore and Access the resources
            </p>
            </div>
        </div>
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
            <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            />
        ))}
        </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);

const Banner3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl select-none"><img src={Bn3} className="w-full h-full object-cover"/></div>
);

const Banner4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl select-none"><img src={Bn4} className="w-full h-full object-cover"/></div>
);


const items = [
  {
    title: "Cybersecurity Tips",
    description: " ",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <IconBulbFilled className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Introduction",
    description: " ",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconInputSpark className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Resources & Tools",
    description: "Link to reliable online tools for password management, antivirus software, and privacy settings and etc..",
    header: <Banner3 />,
    className: "md:col-span-1",
    icon: <IconTools className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Local Threats & Awareness",
    description:
      "Highlighting common cyber threats faced by Sri Lankans, such as phishing scams targeting local banks or online services.",
    header: <Banner4 />,
    className: "md:col-span-2",
    icon: <IconUserQuestion className="h-6 w-6 text-neutral-500" />,
  },
];

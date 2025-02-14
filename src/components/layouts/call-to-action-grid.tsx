import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBulbFilled,
  IconInputSpark,
  IconTools,
  IconUserQuestion,
} from "@tabler/icons-react";

import Bn3 from '@/assets/CTA_Banners/banner_asset_3.png';
import Bn4 from '@/assets/CTA_Banners/banner_asset_4.png';
import Bn2 from '@/assets/CTA_Banners/banner_asset_2.png';
import Bn1 from '@/assets/CTA_Banners/banner_asset_1.png';

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

const Banner1 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl select-none"><img src={Bn1} className="w-full h-full object-cover rounded-xl"/></div>
);

const Banner2 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl select-none"><img src={Bn2} className="w-full h-full object-cover rounded-xl"/></div>
);

const Banner3 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl select-none"><img src={Bn3} className="w-full h-full object-cover rounded-xl"/></div>
);

const Banner4 = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl select-none"><img src={Bn4} className="w-full h-full object-cover rounded-xl"/></div>
);


const items = [
  {
    title: "Cybersecurity Tips",
    description: " ",
    header: <Banner1 />,
    className: "md:col-span-2",
    icon: <IconBulbFilled className="h-8 w-8 text-neutral-500" />,
  },
  {
    title: "Introduction",
    description: " ",
    header: <Banner2 />,
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

import { Spotlight } from "@/components/animations/spotlight";
import { ToolsCarousel } from "@/components/layouts/tools-carousel";
import { CoursesGrid } from "@/components/layouts/courses-grid";
import { Cover } from "@/components/animations/cover";
import { TopContentTabs } from "@/components/layouts/top-content-tabs";
import { SiteFooter } from "@/components/layouts/site-footer";

export default function ResourceToolsPage() {
  return (
    <div>
      <div className="md:h-[40rem] sm:h-[30rem] w-full rounded-md flex md:items-center md:justify-center bg-white dark:bg-[#0B0B0F] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Resources <br /> & Tools.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Useful Tools, Educational Resources and various courses related to cybersecurity can be found here.
          </p>
        </div>
      </div>

      <div>
        <ToolsCarousel />
      </div>

      <div>
          <h1 className="text-4xl md:text-4xl font-bold text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Rated Cybersecurity Courses. <br/> <Cover>Developer&apos;s Choice</Cover>
          </h1>
        <CoursesGrid />
      </div>
      <div>
        <TopContentTabs />
      </div>
    
      <SiteFooter />
    </div>
  );
}

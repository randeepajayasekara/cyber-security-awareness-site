import { SparklesCore } from "@/components/animations/sparkles";
import { Cover } from "@/components/animations/cover";
import { WorldMap } from "@/components/animations/world-map";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black h-screen">
      <div className="h-[40rem] w-full bg-gray-200 dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-gray-400 relative">
          Navigate the Digital World <Cover>Confidently</Cover>
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-gray-200 dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      {/*<div className="w-full bg-gray-200 dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <WorldMap
          dots={[
            {
              start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
            {
              start: { lat: -10.9731, lng: 80.7718 }, // Colombo
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: 28.6139, lng: 77.209 }, // New Delhi
              end: { lat: -10.9731, lng: 80.7718 }, // Colombo
            },
          ]}
        />
      </div> */}
    </div>
  );
}

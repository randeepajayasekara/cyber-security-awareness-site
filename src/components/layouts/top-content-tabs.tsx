import { Tabs } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

export function TopContentTabs() {
  const tabs = [
    {
      title: "Articles",
      value: "articles",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-white">
          <p>Top Cybersecurity Article</p>
          <Link to="https://www.gartner.com/smarterwithgartner/5-must-read-ransomware-and-cybersecurity-articles" target="_blank">
          <img
            src="https://www.uctoday.com/wp-content/uploads/2023/12/Image.jpeg"
            alt="article_image"
            width="1000"
            height="1000"
            className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
          />
          </Link>
        </div>
      ),
    },
    {
      title: "Videos",
      value: "videos",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-red-400 to-white">
          <p>Top Cybersecurity related Video</p>
          <Link to="https://youtu.be/zPodxy8zlX0?si=ELnXY6Q-cceY7OlN" target="_blank">
          <iframe width="1000" height="1000" src="https://www.youtube.com/embed/zPodxy8zlX0?si=Yz-U3sAUbwnA6iE_&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"></iframe>
          </Link>
        </div>
      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}



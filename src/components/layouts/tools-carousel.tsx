import { AnimatedTestimonials } from "@/components/animations/animated-testimonials";

export function ToolsCarousel() {
  const testimonials = [
    {
      quote:
        "Known to #1 by Businesses and individuals worldwide rely on NordPass to secure and manage their passwords, passkeys, credit cards, and other sensitive data.",
      name: "NordPass",
      designation: "Password Manager",
      src: "https://m.media-amazon.com/images/I/31HF7V4rAoL.png",
    },
    {
      quote:
        "Norton AntiVirus is a well-known antivirus software that protects computers from malware, viruses, and other online threats. Rated #1 in the market on 2024.",
      name: "Norton 360",
      designation: "AntiVirus and Anti-Malware software",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSatJTA_iavSAyRAR6JyVEVKJmdBnnlOOTAIA&s",
    },
    {
      quote:
        "Avast AntiTrack is a privacy tool that blocks online trackers from collecting your personal data, preventing websites and advertisers from targeting you with ads.",
      name: "Avast AntiTrack",
      designation: "Anti-Tracking Software",
      src: "https://downloadr2.apkmirror.com/wp-content/uploads/2022/07/89/62cca6ae82d85.png",
    },
    {
      quote:
        "Proton VPN is a VPN service that encrypts your internet traffic. This helps you browse the web anonymously, access geo-restricted content, and protect your online privacy.",
      name: "Proton VPN",
      designation: "Virtual Private Network Service",
      src: "https://cdn.comparitech.com/wp-content/uploads/2018/10/proton-vpn-logo-svg.jpg.webp",
    },
    {
      quote:
        "Eset Home Security Essential is a lightweight and best for home PCs antivirus solution provides excellent protection against malware, viruses, and other threats without impacting system performance.",
      name: "Eset Home Security Essential",
      designation: "Antimalware Software",
      src: "https://play-lh.googleusercontent.com/_rz0CC55dCP9dBwNgOV0KdsSI-AnaSAwfVquFuSK0Trw0cKPiQ_GIdk82AvXnXHLUa4",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

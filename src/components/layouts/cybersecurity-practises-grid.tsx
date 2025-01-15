import { useId } from "react";

export function CSecurityPractisesGrid() {
  return (
    <div className="py-10 lg:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Strong Passwords",
    description:
      "Use unique, complex passwords for each account. Avoid common phrases or personal information. Consider using a password manager to generate and store strong passwords securely.",
  },
  {
    title: "Multi-Factor Authentication (MFA)",
    description:
      "Enable MFA whenever possible. This adds an extra layer of security by requiring a second form of verification, such as a code sent to your phone, in addition to your password.",
  },
  {
    title: "Software Updates",
    description:
      "Keep your devices and software updated with the latest security patches. Updates often include fixes for vulnerabilities that hackers can exploit.",
  },
  {
    title: "Phishing Awareness",
    description:
      "Be wary of suspicious emails, links, and messages. Do not click on links or open attachments from unknown senders. Verify the sender's identity before responding or providing any information.",
  },
  {
    title: "Data Encryption",
    description:
      "Encrypt sensitive data both at rest (on your devices) and in transit (when being sent over the internet). This makes it much harder for hackers to access your information even if they intercept it.",
  },
  {
    title: "Secure Wi-Fi Networks",
    description:
      "Use strong passwords for your Wi-Fi network and avoid connecting to public Wi-Fi networks for sensitive activities. Consider using a VPN (Virtual Private Network) to encrypt your traffic when using public Wi-Fi.",
  },
  {
    title: "Backups",
    description:
      "Regularly back up your important data to a secure location. This will help you recover from a cyberattack or other data loss event.",
  },
  {
    title: "Security Awareness Training",
    description:
      " Educate yourself and your employees about cybersecurity best practices. This can help prevent human error, which is often a major factor in cyberattacks.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

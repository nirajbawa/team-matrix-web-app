import type { Metadata } from "next";
import HomeNavbar from "@/components/navbars/HomeNavbar";
import Script from "next/script";
import ScriptLoader from "./(home)/components/ScriptLoader";

export const metadata: Metadata = {
  title: "Team Matrix Robotics Club",
  description:
    "Team Matrix is the robotics club of K.K. Wagh Institute of Engineering Education and Research, Nashik. Our club unites students from various technical branches to create robotic solutions, achieving excellence in hackathons, including 2nd place in the ISRO Hackathon for Chandrayaan 3.",
  keywords: [
    "Team Matrix",
    "Robotics Club",
    "K.K. Wagh",
    "Nashik",
    "ISRO Hackathon",
    "Chandrayaan 3 Rover",
    "Robotics",
    "Engineering",
    "SPPU",
    "KK Wagh Robotics",
    "Hackathon Winners",
  ],
  authors: [
    {
      name: "Team Matrix Robotics Club, K.K. Wagh Institute of Engineering Education and Research",
    },
  ],
  openGraph: {
    title: "Team Matrix Robotics Club",
    description:
      "Explore the innovative world of Team-Matrix, the robotics club of K.K. Wagh Institute of Engineering Education and Research, Nashik. Learn about our engineering marvels and hackathon achievements, including 2nd place in the ISRO Hackathon for Chandrayaan 3.",
    url: process.env.BASE_URL, // Ensure this environment variable is defined
    type: "website",
    siteName: "Team Matrix",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScriptLoader />
      <div className="w-full overflow-hidden dark:bg-black">
        <HomeNavbar />
        {children}
      </div>
    </>
  );
}

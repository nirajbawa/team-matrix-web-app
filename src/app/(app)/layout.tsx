import type { Metadata } from "next";
import HomeNavbar from "@/components/navbars/HomeNavbar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Team Matrix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta
          name="author"
          content="Team Matrix Robotics Club, K.K. Wagh Institute of Engineering Education and Research"
        />
        <meta
          name="description"
          content="Team Matrix is the robotics club of K.K. Wagh Institute of Engineering Education and Research, Nashik. Our club unites students from various technical branches to create robotic solutions, achieving excellence in hackathons, including 2nd place in the ISRO Hackathon for Chandrayaan 3."
        />
        <meta
          name="keywords"
          content="Team Matrix, Robotics Club, K.K. Wagh, Nashik, ISRO Hackathon, Chandrayaan 3 Rover, Robotics, Engineering, SPPU, KK Wagh Robotics, Hackathon Winners"
        />
        <meta property="og:title" content="Team Matrix Robotics Club" />
        <meta
          property="og:description"
          content="Explore the innovative world of Team-Matrix, the robotics club of K.K. Wagh Institute of Engineering Education and Research, Nashik. Learn about our engineering marvels and hackathon achievements, including 2nd place in the ISRO Hackathon for Chandrayaan 3."
        />
        <meta property="og:url" content={process.env.BASE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Team Matrix"></meta>
      </Head>
      <div className="w-full overflow-hidden dark:bg-black">
        <HomeNavbar />
        {children}
      </div>
    </>
  );
}

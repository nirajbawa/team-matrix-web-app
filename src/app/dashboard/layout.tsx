import DashboardNavbar from "@/components/navbars/DashboardNavbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full overflow-hidden">
      <DashboardNavbar />
      {children}
    </div>
  );
}

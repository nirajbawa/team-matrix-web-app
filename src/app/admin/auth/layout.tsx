import type { Metadata } from "next";
import AdminDashboardNavbar from "@/components/navbars/AdminDashboardNavbar";

export const metadata: Metadata = {
  title: "Admin Dashboard Login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full overflow-hidden">
      {children}
    </div>
  );
}

"use client"
import type { Metadata } from "next";
import AdminDashboardNavbar from "@/components/navbars/AdminDashboardNavbar";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full overflow-hidden">
      <div className="w-full h-screen fixed bg-white z-50 lg:hidden flex justify-center items-center text-xl">
        <h1 className="text-center">Not supported on this screen size</h1>
      </div>
       <AdminDashboardNavbar/>
      {children}
    </div>
  );
}

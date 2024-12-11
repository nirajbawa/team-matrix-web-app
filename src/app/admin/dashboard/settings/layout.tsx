"use client"
import SettingsSidebar from "@/components/sidebars/SettingsSidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full h-[100vh] overflow-hidden">
      <SettingsSidebar />
      <main className="w-full h-full overflow-y-scroll">
        {children}
      </main>
    </div>
  )
}
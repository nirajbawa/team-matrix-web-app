import React from "react";
import ChartSection from "./components/ChartSection";
import UsersSection from "./components/UsersSection";

export const dynamic = "force-dynamic";
export const revalidate = 60;

function page() {
  return (
    <div className="min-h-[100vh] px-10 flex justify-between flex-row">
      <ChartSection />
      <UsersSection />
    </div>
  );
}

export default page;

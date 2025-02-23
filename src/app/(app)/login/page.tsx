import React from "react";
import Main from "./components/Main";

export const dynamic = "force-dynamic";
export const revalidate = 60;

function page() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default page;

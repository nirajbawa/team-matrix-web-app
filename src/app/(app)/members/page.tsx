import React from "react";
import MembersCardContainer from "./components/MembersCardContainer";
import Footer from "../(home)/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 60;

function page() {
  return (
    <div>
      <MembersCardContainer />
      <Footer />
    </div>
  );
}

export default page;

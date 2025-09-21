import React from "react";
import MainMainContainer from "./components/MainMainContainer";
import Footer from "../(home)/components/Footer";

export const dynamic = "force-dynamic";
export const revalidate = 60;

function page() {
  return (
    <div>
      <MainMainContainer />
      <Footer />
    </div>
  );
}

export default page;

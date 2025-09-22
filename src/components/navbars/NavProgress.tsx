"use client";
import React from "react";
import NextNProgress from "nextjs-progressbar";

function NavProgress() {
  return (
    <NextNProgress
      color="#29D" // You can customize the color
      startPosition={0.3}
      stopDelayMs={0}
      height={3}
      showOnShallow={true}
      options={{ showSpinner: false }}
    />
  );
}

export default NavProgress;

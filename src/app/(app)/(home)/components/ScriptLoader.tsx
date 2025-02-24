"use clinet";
import Script from "next/script";
import React from "react";

function ScriptLoader() {
  return (
    <div>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
      />
    </div>
  );
}

export default ScriptLoader;

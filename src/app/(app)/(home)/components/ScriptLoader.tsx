import Script from "next/script";
import React from "react";

function ScriptLoader() {
  return (
    <div>
      <Script
        strategy="beforeInteractive"
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      />
      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"
      />
      <Script id="script">
        {`VANTA.NET({
                    el: "#main-header-bg",
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0xff0000,
                    points: 7.00,
                    maxDistance: 18.00,
                    spacing: 20.00,
                    showDots: false,
                    backgroundAlpha: 0,
                });`}
      </Script>
    </div>
  );
}

export default ScriptLoader;

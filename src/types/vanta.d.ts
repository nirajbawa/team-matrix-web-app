interface VantaEffect {
  destroy: () => void;
}

interface Vanta {
  NET: (
    options: { el: HTMLElement | null } & Record<string, any>
  ) => VantaEffect;
}

declare global {
  interface Window {
    VANTA: Vanta;
  }
}

export {};

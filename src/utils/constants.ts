// Image error fallback configuration
export const IMAGE_FALLBACK_URL = (seed: number) => 
  `https://picsum.photos/seed/${seed}/800/450?grayscale`;

// Button and interaction styles (DRY - single source of truth)
export const BUTTON_STYLES = {
  primary: "flex items-center justify-center px-6 py-3 bg-sekiro-red/20 border border-sekiro-red text-sekiro-red hover:bg-sekiro-red hover:text-white transition-colors uppercase tracking-widest text-sm font-bold",
  secondary: "flex items-center justify-center px-6 py-3 bg-stone-800 border border-stone-600 hover:border-sekiro-red hover:text-sekiro-red transition-colors uppercase tracking-widest text-sm font-bold",
  icon: "p-2 text-stone-400 hover:text-sekiro-red hover:bg-stone-900 rounded-full transition-colors",
  navButton: "absolute p-2 sm:p-3 bg-black/50 hover:bg-sekiro-gold text-white rounded-full transition-colors opacity-100 sm:opacity-0 group-hover/gallery:opacity-100 duration-300 z-20",
};

// Thumbnail styles
export const THUMBNAIL_STYLES = {
  base: "relative h-12 w-20 sm:h-16 sm:w-28 shrink-0 overflow-hidden border-2 transition-all duration-300",
  active: "border-sekiro-gold opacity-100 scale-105 shadow-[0_0_10px_rgba(217,119,6,0.5)]",
  inactive: "border-stone-800 opacity-50 hover:opacity-100 hover:border-stone-500",
};

// Card and container styles
export const CARD_STYLES = {
  base: "group relative bg-stone-900 border border-stone-800 hover:border-sekiro-red transition-all duration-500 overflow-hidden cursor-pointer",
  modal: "relative w-full max-w-4xl bg-stone-900 sm:border-2 border-stone-600 shadow-2xl animate-scaleIn h-full sm:h-auto sm:max-h-[90vh] flex flex-col overflow-hidden rounded-none sm:rounded-sm",
};

"use client";

interface BurgerIconProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

export function BurgerIcon({ isOpen, onClick, className = "" }: BurgerIconProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
      className={`relative w-10 h-10 focus:outline-none focus:ring-2 focus:ring-primary rounded-md transition-all duration-300 hover:bg-primary/10 ${className}`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6">
        {/* Top line */}
        <span
          className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        />
        
        {/* Middle line */}
        <span
          className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
          }`}
        />
        
        {/* Bottom line */}
        <span
          className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
            isOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        />
      </div>
    </button>
  );
}

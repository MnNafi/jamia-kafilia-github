"use client";

import { useTranslations } from "next-intl";

export function Ticker() {
  const t = useTranslations("Home.ticker");
  const items = t.raw("items") as string[];

  return (
    <div className="w-full overflow-hidden bg-emerald-900 h-14 flex items-center border-b border-white/10 shadow-lg relative z-20">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-emerald-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-emerald-900 to-transparent z-10" />
      
      <div className="ticker-wrap w-full">
        <div className="ticker flex whitespace-nowrap animate-ticker">
          {items.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center px-10 text-emerald-50 font-medium text-sm tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 mr-4 animate-pulse" />
              {item}
            </span>
          ))}
          {/* Duplicate for seamless loop */}
          {items.map((item, index) => (
            <span
              key={`duplicate-${index}`}
              className="inline-flex items-center px-10 text-emerald-50 font-medium text-sm tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 mr-4 animate-pulse" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        .ticker-wrap {
          width: 100%;
          overflow: hidden;
        }

        .ticker {
          display: inline-flex;
          animation: ticker 40s linear infinite;
        }

        .ticker:hover {
          animation-play-state: paused;
        }

        @keyframes ticker {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ticker {
            animation: none;
            transform: none;
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}

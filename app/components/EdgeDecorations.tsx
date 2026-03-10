"use client";

export default function EdgeDecorations() {
  return (
    <>
      {/* Left: molecules (mirror of right) */}
      <div className="fixed left-0 top-0 bottom-0 w-28 md:w-36 pointer-events-none z-0 opacity-60" aria-hidden>
        <svg viewBox="0 0 140 900" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="nodeGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#81b29a" />
              <stop offset="100%" stopColor="#6b9080" />
            </linearGradient>
            <linearGradient id="musicGradLeft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e07a7a" />
              <stop offset="100%" stopColor="#81b29a" />
            </linearGradient>
          </defs>
          {/* Molecules – mirrored positions (x → 140-x for right-edge layout on left) */}
          <g stroke="url(#nodeGradLeft)" strokeWidth="1.5" fill="none" transform="translate(0, 0)">
            <circle cx="65" cy="55" r="7" fill="url(#nodeGradLeft)" />
            <circle cx="45" cy="72" r="5" fill="url(#nodeGradLeft)" />
            <line x1="65" y1="55" x2="45" y2="72" />
            <circle cx="82" cy="85" r="5" fill="url(#nodeGradLeft)" />
            <line x1="65" y1="55" x2="82" y2="85" />
          </g>
          <g fill="url(#musicGradLeft)" transform="translate(58, 150)">
            <ellipse cx="12" cy="8" rx="6" ry="8" />
            <line x1="6" y1="8" x2="6" y2="55" stroke="url(#musicGradLeft)" strokeWidth="3" />
          </g>
          <g stroke="url(#nodeGradLeft)" strokeWidth="1.2" fill="none">
            <circle cx="52" cy="220" r="6" fill="url(#nodeGradLeft)" />
            <circle cx="35" cy="235" r="5" fill="url(#nodeGradLeft)" />
            <circle cx="62" cy="242" r="5" fill="url(#nodeGradLeft)" />
            <line x1="52" y1="220" x2="35" y2="235" />
            <line x1="52" y1="220" x2="62" y2="242" />
          </g>
          <g fill="url(#musicGradLeft)" transform="translate(55, 300)">
            <ellipse cx="10" cy="6" rx="5" ry="6" />
            <line x1="5" y1="6" x2="5" y2="48" stroke="url(#musicGradLeft)" strokeWidth="2.5" />
            <line x1="5" y1="48" x2="18" y2="38" stroke="url(#musicGradLeft)" strokeWidth="2" />
          </g>
          <g stroke="url(#nodeGradLeft)" strokeWidth="1.2" fill="none">
            <circle cx="58" cy="400" r="6" fill="url(#nodeGradLeft)" />
            <circle cx="42" cy="388" r="5" fill="url(#nodeGradLeft)" />
            <line x1="58" y1="400" x2="42" y2="388" />
            <circle cx="68" cy="418" r="4" fill="url(#nodeGradLeft)" />
            <line x1="58" y1="400" x2="68" y2="418" />
          </g>
          <path d="M 55 480 Q 45 500 55 520 Q 65 540 52 560 Q 45 575 55 590" stroke="url(#musicGradLeft)" strokeWidth="3" fill="none" opacity="0.8" />
          <g stroke="url(#nodeGradLeft)" strokeWidth="1.2" fill="none">
            <circle cx="65" cy="640" r="6" fill="url(#nodeGradLeft)" />
            <circle cx="48" cy="655" r="5" fill="url(#nodeGradLeft)" />
            <circle cx="72" cy="662" r="5" fill="url(#nodeGradLeft)" />
            <line x1="65" y1="640" x2="48" y2="655" />
            <line x1="65" y1="640" x2="72" y2="662" />
          </g>
          <g fill="url(#musicGradLeft)" transform="translate(50, 720)">
            <ellipse cx="8" cy="10" rx="5" ry="7" />
            <line x1="3" y1="10" x2="3" y2="52" stroke="url(#musicGradLeft)" strokeWidth="2.5" />
          </g>
          <g stroke="url(#nodeGradLeft)" strokeWidth="1.2" fill="none">
            <circle cx="60" cy="820" r="5" fill="url(#nodeGradLeft)" />
            <circle cx="44" cy="832" r="4" fill="url(#nodeGradLeft)" />
            <line x1="60" y1="820" x2="44" y2="832" />
          </g>
        </svg>
      </div>
      {/* Right: molecules + music */}
      <div className="fixed right-0 top-0 bottom-0 w-28 md:w-36 pointer-events-none z-0 opacity-60" aria-hidden>
        <svg viewBox="0 0 140 900" className="w-full h-full object-cover">
          <defs>
            <linearGradient id="nodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#81b29a" />
              <stop offset="100%" stopColor="#6b9080" />
            </linearGradient>
            <linearGradient id="musicGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e07a7a" />
              <stop offset="100%" stopColor="#81b29a" />
            </linearGradient>
          </defs>
          <g stroke="url(#nodeGrad)" strokeWidth="1.5" fill="none">
            <circle cx="75" cy="55" r="7" fill="url(#nodeGrad)" />
            <circle cx="95" cy="72" r="5" fill="url(#nodeGrad)" />
            <line x1="75" y1="55" x2="95" y2="72" />
            <circle cx="58" cy="85" r="5" fill="url(#nodeGrad)" />
            <line x1="75" y1="55" x2="58" y2="85" />
          </g>
          <g fill="url(#musicGrad)" transform="translate(70, 150)">
            <ellipse cx="12" cy="8" rx="6" ry="8" />
            <line x1="18" y1="8" x2="18" y2="55" stroke="url(#musicGrad)" strokeWidth="3" />
          </g>
          <g stroke="url(#nodeGrad)" strokeWidth="1.2" fill="none">
            <circle cx="88" cy="220" r="6" fill="url(#nodeGrad)" />
            <circle cx="105" cy="235" r="5" fill="url(#nodeGrad)" />
            <circle cx="78" cy="242" r="5" fill="url(#nodeGrad)" />
            <line x1="88" y1="220" x2="105" y2="235" />
            <line x1="88" y1="220" x2="78" y2="242" />
          </g>
          <g fill="url(#musicGrad)" transform="translate(72, 300)">
            <ellipse cx="10" cy="6" rx="5" ry="6" />
            <line x1="15" y1="6" x2="15" y2="48" stroke="url(#musicGrad)" strokeWidth="2.5" />
            <line x1="15" y1="48" x2="28" y2="38" stroke="url(#musicGrad)" strokeWidth="2" />
          </g>
          <g stroke="url(#nodeGrad)" strokeWidth="1.2" fill="none">
            <circle cx="82" cy="400" r="6" fill="url(#nodeGrad)" />
            <circle cx="98" cy="388" r="5" fill="url(#nodeGrad)" />
            <line x1="82" y1="400" x2="98" y2="388" />
            <circle cx="72" cy="418" r="4" fill="url(#nodeGrad)" />
            <line x1="82" y1="400" x2="72" y2="418" />
          </g>
          <path d="M 85 480 Q 95 500 85 520 Q 75 540 88 560 Q 95 575 85 590" stroke="url(#musicGrad)" strokeWidth="3" fill="none" opacity="0.8" />
          <g stroke="url(#nodeGrad)" strokeWidth="1.2" fill="none">
            <circle cx="75" cy="640" r="6" fill="url(#nodeGrad)" />
            <circle cx="92" cy="655" r="5" fill="url(#nodeGrad)" />
            <circle cx="68" cy="662" r="5" fill="url(#nodeGrad)" />
            <line x1="75" y1="640" x2="92" y2="655" />
            <line x1="75" y1="640" x2="68" y2="662" />
          </g>
          <g fill="url(#musicGrad)" transform="translate(78, 720)">
            <ellipse cx="8" cy="10" rx="5" ry="7" />
            <line x1="13" y1="10" x2="13" y2="52" stroke="url(#musicGrad)" strokeWidth="2.5" />
          </g>
          <g stroke="url(#nodeGrad)" strokeWidth="1.2" fill="none">
            <circle cx="80" cy="820" r="5" fill="url(#nodeGrad)" />
            <circle cx="96" cy="832" r="4" fill="url(#nodeGrad)" />
            <line x1="80" y1="820" x2="96" y2="832" />
          </g>
        </svg>
      </div>
    </>
  );
}
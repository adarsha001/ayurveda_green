export function MandalaBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large mandala SVG watermark */}
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] animate-[spin_120s_linear_infinite]"
        width="900"
        height="900"
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="450" cy="450" r="440" stroke="#355E3B" strokeWidth="1" />
        <circle cx="450" cy="450" r="380" stroke="#355E3B" strokeWidth="0.8" />
        <circle cx="450" cy="450" r="320" stroke="#C9A227" strokeWidth="1" />
        <circle cx="450" cy="450" r="260" stroke="#355E3B" strokeWidth="0.8" />
        <circle cx="450" cy="450" r="200" stroke="#C9A227" strokeWidth="1" />
        <circle cx="450" cy="450" r="140" stroke="#355E3B" strokeWidth="0.8" />
        <circle cx="450" cy="450" r="80" stroke="#C9A227" strokeWidth="1" />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 450 450)`}>
            <line x1="450" y1="10" x2="450" y2="890" stroke="#355E3B" strokeWidth="0.5" opacity="0.5" />
            <ellipse cx="450" cy="130" rx="18" ry="60" fill="#355E3B" opacity="0.15" />
            <ellipse cx="450" cy="770" rx="18" ry="60" fill="#355E3B" opacity="0.15" />
            <circle cx="450" cy="200" r="8" stroke="#C9A227" strokeWidth="1" fill="none" />
            <circle cx="450" cy="700" r="8" stroke="#C9A227" strokeWidth="1" fill="none" />
          </g>
        ))}
        {[0,45,90,135,180,225,270,315].map((angle) => (
          <g key={`p${angle}`} transform={`rotate(${angle} 450 450)`}>
            <path d="M450,70 C470,110 490,160 450,200 C410,160 430,110 450,70Z" fill="#C9A227" opacity="0.12" />
            <path d="M450,700 C470,740 490,790 450,830 C410,790 430,740 450,700Z" fill="#C9A227" opacity="0.12" />
          </g>
        ))}
      </svg>

      {/* Secondary smaller mandala offset */}
      <svg
        className="absolute -top-20 -right-20 opacity-[0.04] animate-[spin_180s_linear_infinite_reverse]"
        width="500"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="250" cy="250" r="240" stroke="#C9A227" strokeWidth="1" />
        <circle cx="250" cy="250" r="180" stroke="#355E3B" strokeWidth="0.8" />
        <circle cx="250" cy="250" r="120" stroke="#C9A227" strokeWidth="1" />
        <circle cx="250" cy="250" r="60" stroke="#355E3B" strokeWidth="0.8" />
        {[0,40,80,120,160,200,240,280,320].map((angle) => (
          <g key={angle} transform={`rotate(${angle} 250 250)`}>
            <line x1="250" y1="10" x2="250" y2="490" stroke="#355E3B" strokeWidth="0.4" opacity="0.6" />
            <ellipse cx="250" cy="100" rx="12" ry="40" fill="#C9A227" opacity="0.2" />
          </g>
        ))}
      </svg>
    </div>
  );
}

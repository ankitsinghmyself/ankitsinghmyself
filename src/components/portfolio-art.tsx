type ProjectArtworkProps = {
  variant: "yellow" | "slate" | "pink";
};

const paletteMap = {
  yellow: {
    base: "from-[#f5d94f] via-[#ffffff] to-[#111111]",
    cardA: "bg-[#f5d94f]",
    cardB: "bg-[#111111]",
    cardC: "bg-[#6cf6ff]",
  },
  slate: {
    base: "from-[#d8d8dc] via-[#ffffff] to-[#4a4a4a]",
    cardA: "bg-[#ffffff]",
    cardB: "bg-[#50505a]",
    cardC: "bg-[#c7e8ff]",
  },
  pink: {
    base: "from-[#f7c1d6] via-[#ffffff] to-[#111111]",
    cardA: "bg-[#f7c1d6]",
    cardB: "bg-[#111111]",
    cardC: "bg-[#f0b327]",
  },
} as const;

export const HeroSketch = () => {
  return (
    <svg viewBox="0 0 520 420" className="h-full w-full" fill="none">
      <path d="M40 364H472" stroke="#1A1A1A" strokeWidth="3" />
      <ellipse cx="212" cy="314" rx="72" ry="44" fill="#F3F3F0" stroke="#1A1A1A" strokeWidth="3" />
      <ellipse cx="302" cy="314" rx="68" ry="44" fill="#F3F3F0" stroke="#1A1A1A" strokeWidth="3" />
      <path
        d="M294 104C330 104 363 133 363 169V266H225V176C225 136 256 104 294 104Z"
        fill="#0D0D0D"
      />
      <path
        d="M272 108H314C323 108 331 116 331 125V162C331 185 312 204 289 204C266 204 247 185 247 162V133C247 119 258 108 272 108Z"
        fill="#FAFAF8"
        stroke="#1A1A1A"
        strokeWidth="3"
      />
      <path
        d="M254 126C254 113 265 102 278 102H324C337 102 348 113 348 126V143C348 143 326 145 314 137C304 130 297 122 297 122V154L278 148L254 126Z"
        fill="#0D0D0D"
      />
      <path d="M268 171C274 177 285 177 291 171" stroke="#1A1A1A" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="274" cy="151" r="3" fill="#1A1A1A" />
      <path
        d="M230 190H350C386 190 414 218 414 254V292H218V202C218 195 223 190 230 190Z"
        fill="#0D0D0D"
      />
      <path
        d="M138 208L230 214L262 282H154C139 282 126 269 126 254V223C126 214 129 208 138 208Z"
        fill="#0D0D0D"
      />
      <path
        d="M140 211H227C234 211 240 217 240 224V279H157C141 279 128 266 128 250V223C128 216 133 211 140 211Z"
        fill="#F3F3F0"
        stroke="#1A1A1A"
        strokeWidth="3"
      />
      <circle cx="208" cy="243" r="8" fill="#0D0D0D" />
      <path d="M247 189L244 281" stroke="#FAFAF8" strokeWidth="3" />
      <path d="M350 195C365 214 378 247 378 282" stroke="#FAFAF8" strokeWidth="3" />
      <path d="M270 204L248 221" stroke="#FAFAF8" strokeWidth="3" />
      <path d="M334 208C349 224 364 253 368 282" stroke="#FAFAF8" strokeWidth="2" opacity="0.65" />
      <path d="M318 197C329 210 342 232 346 254" stroke="#FAFAF8" strokeWidth="2" opacity="0.7" />
      <path d="M300 198C309 214 319 238 320 257" stroke="#FAFAF8" strokeWidth="2" opacity="0.75" />
      <path d="M286 198C289 214 292 229 292 246" stroke="#FAFAF8" strokeWidth="2" opacity="0.75" />
      <path d="M403 292C382 302 364 319 359 364" stroke="#1A1A1A" strokeWidth="3" />
      <path d="M278 292C259 308 240 327 236 364" stroke="#1A1A1A" strokeWidth="3" />
      <path d="M220 292C205 310 194 333 193 364" stroke="#1A1A1A" strokeWidth="3" />
      <path d="M374 292C389 308 399 332 401 364" stroke="#1A1A1A" strokeWidth="3" />
    </svg>
  );
};

export const AboutSketch = () => {
  return (
    <svg viewBox="0 0 320 340" className="h-full w-full" fill="none">
      <rect x="38" y="24" width="244" height="244" rx="12" fill="#F8F8F5" stroke="#111111" strokeWidth="2" />
      <path
        d="M162 72C192 72 214 95 214 125V184H110V122C110 94 133 72 162 72Z"
        fill="#0D0D0D"
      />
      <path
        d="M149 77H176C187 77 196 86 196 97V133C196 151 181 166 163 166C145 166 130 151 130 133V96C130 85 138 77 149 77Z"
        fill="#FAFAF8"
        stroke="#111111"
        strokeWidth="2"
      />
      <path
        d="M131 95C131 82 142 72 155 72H182C195 72 206 83 206 96V110C206 110 192 112 181 106C172 100 165 90 165 90V129L148 123L131 95Z"
        fill="#0D0D0D"
      />
      <circle cx="150" cy="118" r="2.5" fill="#111111" />
      <path d="M145 138C151 143 162 143 168 138" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M102 194C107 168 131 150 159 150H165C194 150 218 169 223 196L234 260H84L102 194Z"
        fill="#0D0D0D"
      />
      <path d="M122 176L158 205L200 176" stroke="#FAFAF8" strokeWidth="3" />
      <path d="M98 233C125 234 145 240 164 251C184 239 204 233 230 233" stroke="#FAFAF8" strokeWidth="3" />
      <path d="M117 260C123 280 129 294 140 308" stroke="#111111" strokeWidth="3" />
      <path d="M204 260C198 280 192 294 181 308" stroke="#111111" strokeWidth="3" />
    </svg>
  );
};

export const ProjectArtwork = ({ variant }: ProjectArtworkProps) => {
  const palette = paletteMap[variant];

  return (
    <div
      className={`relative h-52 overflow-hidden rounded-[14px] bg-gradient-to-br ${palette.base}`}
    >
      <div className="absolute left-3 top-3 h-16 w-24 rotate-[-8deg] rounded-[10px] border border-black/20 bg-white p-2 shadow-sm">
        <div className={`h-6 w-9 rounded ${palette.cardA}`} />
        <div className="mt-2 h-1.5 w-12 rounded bg-black/20" />
        <div className="mt-1 h-1.5 w-8 rounded bg-black/20" />
      </div>
      <div className="absolute right-4 top-5 h-24 w-32 rotate-[12deg] rounded-[10px] border border-black/20 bg-white p-2 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="h-5 w-5 rounded-full bg-black" />
          <div className="h-1.5 w-10 rounded bg-black/20" />
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className={`h-8 rounded ${palette.cardB}`} />
          <div className={`h-8 rounded ${palette.cardC}`} />
          <div className="h-8 rounded bg-black/10" />
        </div>
      </div>
      <div className="absolute bottom-3 left-5 h-20 w-28 rotate-[8deg] rounded-[10px] border border-black/20 bg-white p-2 shadow-sm">
        <div className="grid grid-cols-2 gap-2">
          <div className={`h-7 rounded ${palette.cardA}`} />
          <div className={`h-7 rounded ${palette.cardB}`} />
          <div className={`h-7 rounded ${palette.cardC}`} />
          <div className="h-7 rounded bg-black/10" />
        </div>
      </div>
      <div className="absolute bottom-6 right-5 h-16 w-20 rounded-[12px] border border-black/15 bg-white/80" />
    </div>
  );
};

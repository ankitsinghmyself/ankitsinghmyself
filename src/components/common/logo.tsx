type LogoProps = {
  className?: string;
  height: number;
  width: number;
};

const Logo = ({ className, height, width }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 64 64"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="10" y1="10" x2="54" y2="54">
          <stop stopColor="#56CCF2" />
          <stop offset="0.55" stopColor="#7C4DFF" />
          <stop offset="1" stopColor="#FF2D9A" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="24" fill="url(#logo-gradient)" />
      <path
        d="M23 21L14 32L23 43"
        stroke="#F8FAFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 21L50 32L41 43"
        stroke="#F8FAFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Logo;

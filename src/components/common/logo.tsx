"use client";

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
      className={className}
      height={height}
      viewBox="0 0 41.298 31.248"
    >
      <path
        d="M19.656 0h12.96l1.439 2.16h-2.736c-1.8 0-2.159.504-1.367 1.872l10.512 18.432c1.512 2.593 1.439 8.784-4.248 8.784H20.304L18.72 28.44H0l5.472-9.433h15.624L27 29.232h3.24c1.151 0 .863-1.152.071-2.592L17.496 4.752C16.056 2.16 17.928 0 19.656 0zm-.072 16.272H7.056l6.192-10.8 6.336 10.8z"
        fill-rule="evenodd"
        clip-rule="evenodd"
        className="fill-black dark:fill-white"
      />
    </svg>
  );
};

export default Logo;

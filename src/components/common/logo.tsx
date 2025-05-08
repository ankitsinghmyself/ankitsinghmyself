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
      viewBox="0 0 500 500"
      className={className}
      height={height}
      width={width}
    >
      <text
        x="140.289"
        y="159.323"
        fontFamily="Arial,sans-serif"
        fontSize="28"
        className="fill-black dark:fill-white"
        fontWeight="700"
        style={{ textTransform: "uppercase", whiteSpace: "pre" }}
        transform="matrix(21.63196 0 0 20.32194 -2968.636 -2743.534)"
      >
        A
      </text>
      <text
        x="140.289"
        y="159.323"
        fontFamily="Arial,sans-serif"
        fontSize="28"
        className="fill-black dark:fill-white"
        fontStyle="italic"
        style={
          {
            textTransform: "uppercase",
            whiteSpace: "pre",
            transformBox: "fill-box",
          } as React.CSSProperties
        }
        transform="matrix(18.01105 -.08966 .18955 23.66237 17.392 106.456)"
        transformOrigin="9.33797px 15.6453px"
      >
        S
      </text>
    </svg>
  );
};

export default Logo;

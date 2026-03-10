"use client";

type HeroNameStaticProps = {
  text: string;
};

const splitName = (text: string) => {
  const words = text.trim().split(/\s+/);

  if (words.length <= 1) {
    return [text, ""] as const;
  }

  return [words.slice(0, -1).join(" "), words[words.length - 1] ?? ""] as const;
};

const HeroNameStatic = ({ text }: HeroNameStaticProps) => {
  const [firstName, lastName] = splitName(text);

  return (
    <div className="relative mt-4 h-[96px] w-full sm:h-[132px] lg:h-[172px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-semibold tracking-[-0.07em] text-white sm:text-7xl lg:text-[5.7rem]">
          {firstName}
          {lastName ? (
            <>
              {" "}
              <span className="neo-gradient-text">{lastName}</span>
            </>
          ) : null}
        </h1>
      </div>
    </div>
  );
};

export default HeroNameStatic;

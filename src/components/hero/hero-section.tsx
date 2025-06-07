import Link from "next/link";
import HeroImage from "./hero-image";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { calculateYearsFromSep2020 } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative grid grid-cols-1 py-12 sm:py-20 md:py-32 lg:grid-cols-3 group">
      <div className="flex flex-col text-center gap-y-10 lg:text-left lg:col-span-2 ">
        <div>
          <span className="text-lg font-semibold  md:text-xl lg:text-2xl text-muted">
            Hey there <span className="animate-wave">👋</span>!
          </span>
          <div className="text-4xl font-bold md:text-5xl lg:text-6xl text-muted">
            I&apos;m{" "}
            <h1 className="text-primary block sm:inline">Ankit Singh</h1>
          </div>
        </div>
        <div className="text-lg md:text-xl text-muted text-pretty">
          <span>A self-taught developer with</span>
          <Tooltip>
            <TooltipTrigger className="border-dashed border-b border-muted/50 mx-1 hover:text-foreground transition duration-300 hover:border-muted-foreground">
              {calculateYearsFromSep2020()} years
            </TooltipTrigger>
            <TooltipContent className="dark:bg-onyx font-semibold text-muted-foreground border-opacity-0 shadow-lg">
              Since Sep 2020
            </TooltipContent>
          </Tooltip>
          <span>
            of industry experience. I&apos;m a passionate learner who thrives on
            exploring new technologies and applying them to solve real-world
            problems. I enjoy working across diverse tech stacks and domains to
            continuously grow and make meaningful impact.
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row ">
          <Link
            prefetch={false}
            target="_blank"
            href={
              "https://drive.google.com/file/d/1cXjUkPhHm7zFPj0dfIUEFkJ1zwCbPW3-/view?usp=sharing"
            }
            className="cursor-pointer rounded-lg flex justify-center items-center bg-gradient min-h-[60px] px-8 py-4 primary-button hover:translate-y-[-1px] dark:text-muted text-white hover:text-white active:translate-y-[1px] font-medium transition duration-300 w-full lg:w-fit"
          >
            See my resume
          </Link>
          <Link
            href={"/contact"}
            className="cursor-pointer rounded-lg flex justify-center items-center bg-onyx min-h-[60px] px-8 py-4  hover:translate-y-[-1px] dark:text-muted text-white hover:text-white active:translate-y-[1px] font-medium transition duration-300 w-full lg:w-fit"
          >
            Get in touch
          </Link>
        </div>
      </div>
      <div className="hidden h-full lg:block -z-50">
        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;

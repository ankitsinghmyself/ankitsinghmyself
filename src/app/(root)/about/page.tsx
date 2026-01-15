"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import GetInTouch from "@/components/get-in-touch";
import PageContainer from "@/components/page/page-container";
import PageHeader from "@/components/page/page-header";
import ProtectedImage from "@/components/protected-image";
import { calculateYearsFromSep2020 } from "@/lib/utils";

const AboutPage = () => {
  const [years, setYears] = useState("5+"); // fallback

  useEffect(() => {
    setYears(calculateYearsFromSep2020());
  }, []);
  return (
    <>
    
      <PageHeader
        title="A little bit about me"
        subtitle="Who I am and what I do."
      />
      <PageContainer>
        <div className="grid w-full grid-cols-1 md:grid-cols-12">
          <div className="col-span-12 flex flex-col gap-12 md:col-span-8 md:pr-12 text-pretty">
            <div className="flex flex-col gap-2">
              <p className="font-semibold uppercase text-muted-foreground/50 dark:text-medium-gray">
                Who I am
              </p>
              <p className="text-[18px] leading-[160%] text-muted">
                I&apos;m{" "}
                <span className="text-onyx dark:text-white">Ankit</span> a
                passionate software engineer who loves crafting seamless web
                experiences and exploring innovative technologies. With a knack
                for problem-solving and a drive for efficiency, I thrive in
                dynamic environments.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold uppercase text-muted-foreground/50 dark:text-medium-gray">
                What I Do
              </p>
              <p className="text-[18px] leading-[160%] text-muted">
                With {years} years of invaluable experience, I&apos;ve honed my skills in
                JavaScript and TypeScript, focusing on frameworks like Next.js
                and React. I specialize in building intuitive, interactive web
                applications using Tailwind CSS and various CMS platforms,
                enabling seamless user experiences. My work enhances team
                collaboration and empowers businesses to streamline their
                processes. I thrive on tackling complex challenges and
                delivering solutions that create a tangible impact.
              </p>
              <p className="text-[18px] leading-[160%] text-muted">
                Checkout my{" "}
                <Link
                  href="/uses"
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                >
                  tech & tools
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold uppercase text-muted-foreground/50 dark:text-medium-gray">
                What I Did
              </p>
              <p className="text-[18px] leading-[160%] text-muted">
                Before diving into full-stack development, I focused on
                optimizing web applications. I boosted loading speeds with
                Next.js, enhancing user engagement, and streamlined APIs to
                create a smoother experience. My projects, like Template UI and
                shopmate Marketplace, reflect my ability to develop solutions
                that foster collaboration and drive success.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] leading-[160%] text-muted">
                Feel free to reach out via{" "}
                <Link
                  href="mailto:ankitsinghmyself@gmail.com"
                  target="_blank"

                  prefetch={false}
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                >
                  e-mail
                </Link>
                , or follow me on{" "}
                <Link
                  href="https://x.com/singh311094"
                  target="_blank"

                  prefetch={false}
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                >
                  Twitter
                </Link>
                . Want to see where I’ve worked? Check out my{" "}
                <Link
                  href="https://drive.google.com/file/d/1cXjUkPhHm7zFPj0dfIUEFkJ1zwCbPW3-/view?usp=sharing"
                  target="_blank"

                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                >
                  Resume
                </Link>
                , or Connect with me on{" "}
                <Link
                  href="https://www.linkedin.com/in/ankitsinghmyself/"
                  target="_blank"
                  className="cursor-pointer rounded-lg justify-center items-center inline-flex font-medium transition text-onyx underline underline-offset-4 dark:text-white"
                >
                  LinkedIn.
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] leading-[160%] text-muted">
                Let’s build something great, together!
              </p>
            </div>

            <GetInTouch className="flex md:hidden" />
          </div>

          <div className="-order-1 col-span-12 md:order-2 md:col-span-4">
            <div className="group relative mb-20 flex justify-center">
              <ProtectedImage
                src="/images/IMG_5057.png"
                width={400}
                height={400}
                alt="Ankit"
              />
            </div>

            <GetInTouch className="hidden md:flex" />
          </div>
        </div>
      </PageContainer>
    </>
  );
};

export default AboutPage;

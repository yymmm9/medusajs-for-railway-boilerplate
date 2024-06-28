import { Section, Container } from "@/components/craft";
import Image from "next/image";
import Logo from "@/public/logo.svg";
import Link from "next/link";

import { cva } from "class-variance-authority";
import Balancer from "react-wrap-balancer";

// Define CVA configuration
const containerStyles = cva("", {
  variants: {
    align: {
      left: "",
      center: "text-center flex flex-col items-center",
      right: "text-right flex flex-col items-end",
    },
  },
  defaultVariants: {
    align: "left",
  },
});
const CalloutWithInlineImages = ({ data, align }: any) => {
  return (
    <Section className="not-prose">
      <Container className="w-full h-full m-auto max-w-5xl md:px-6 px-4 flex flex-col gap-8">
        <div className={containerStyles({ align: align })}>
          {/* Large Text */}
          <Balancer>
            <h1 className="text-3xl md:text-6xl font-normal tracking-tight !leading-snug">
              {data.map((obj: any, index: number) => (
                <>
                  {Object.entries(obj).map(([key, data]) => (
                    <>
                      {key === "title" && typeof data === "string" && (
                        <>{data + " "}</>
                      )}
                      {key === "image" && typeof data === "string" && (
                        <>
                          <img
                            className="inline my-auto w-24 md:w-48 md:-mt-1 -mt-2 object-cover h-16 rounded"
                            // width={192}
                            src={data}
                            alt=""
                          />{" "}
                        </>
                      )}
                    </>
                  ))}
                </>
              ))}
              {/* eslint-disable-next-line */}
            </h1>
          </Balancer>
          {/* logo features */}
          <div className="p-4 flex flex-wrap border rounded-lg gap-6 items-center w-fit">
            <p>见于以下媒体</p>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
            <Image className="h-6 w-fit dark:invert" src={Logo} alt=""></Image>
          </div>
          {/* End Text */}
          {/* <div className="md:text-lg">
            <p className="hidden md:block">
              We make components for marketing sites.
            </p>
            <div className="md:flex grid gap-2">
              <p className="opacity-50">
                Visit craftui.org to use our components for free.{" "}
              </p>
              <Link className="hover:opacity-70 transition-all" href="#">
                Check it Out -{`>`}
              </Link>
            </div>
            <p className="text-xs mt-4">
              <span className="opacity-50">Available now online.</span> Tell us
              what you build next.
            </p>
          </div> */}
        </div>
      </Container>
    </Section>
  );
};

export default CalloutWithInlineImages;

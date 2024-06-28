// Layout
import * as Craft from "@/components/craft";
import Balancer from "react-wrap-balancer";
import Link from "next/link";

// Icons
import { Coins, ArrowRight } from "lucide-react";
import { cva } from "class-variance-authority";

const gridStyles = cva("mt-6 grid gap-6 md:mt-12 ", {
  variants: {
    size: {
      small: ["grid-cols-2 sm:grid-cols-4 lg:grid-cols-6"],
      medium: ["sm:grid-cols-2 lg:grid-cols-4"],
      large: ["sm:grid-cols-2"],
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

type FeatureText = {
  icon: JSX.Element;
  title: string;
  description: string;
  href?: string;
  cta?: string;
};

const FeatureTwo = ({
  title,
  subtitle,
  data,
  size = "medium",
}: {
  title: string;
  subtitle?: string;
  data: FeatureText[];
  size?: "small" | "medium" | "large";
}) => {
  if (!data) return null;
  return (
    <Craft.Section className="border-b">
      <Craft.Container className="not-prose">
        <div className="flex flex-col gap-6 items-center">
          <h3 className="text-3xl">
            <Balancer>{title}</Balancer>
          </h3>
          {subtitle && (
            <p className="text-lg  text-center">
              <Balancer>{subtitle}</Balancer>
            </p>
          )}
          {/* {subtitle && (
            <h4 className="text-2xl font-light opacity-70">
              <Balancer>{subtitle}</Balancer>
            </h4>
          )} */}

          <div className={gridStyles({ size })}>
            {data.map(({ icon, title, description, href, cta }, index) => (
              <Link
                href={`${href}`}
                className="flex flex-col justify-between gap-6 rounded-lg border p-6 transition-all hover:-mt-2 hover:mb-2"
                key={index}
              >
                <div className="grid gap-4">
                  {icon}
                  <h4 className="text-primary text-xl">{title}</h4>
                  <p className="text-base opacity-75">{description}</p>
                </div>
                {cta && (
                  <div className="flex h-fit items-center text-sm font-semibold">
                    <p>{cta}</p> <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default FeatureTwo;

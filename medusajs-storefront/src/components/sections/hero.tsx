import { Section, Container } from "@/components/craft";
import Placeholder from "@/public/placeholder.jpg";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = ({
  title,
  body,
  buttons,
  badge,
  cover,
}: {
  title: string;
  body: string;
  badge?: any;
  buttons?: any;
  cover?: string;
}) => {
  return (
    <Section>
      <Container>
        <div>
          <Button
            asChild
            className="w-fit mb-6"
            size={"sm"}
            variant={"outline"}
          >
            {badge && (
              <Link className="not-prose" {...badge}>
                {badge.label}
              </Link>
            )}
          </Button>
          <h1>
            <Balancer>{title}</Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>{body}</Balancer>
          </h3>
          {cover && (
            <div className="my-8 h-96 not-prose w-full overflow-hidden border rounded-lg md:rounded-xl md:h-[480px]">
              <Image
                className="h-full w-full object-cover object-bottom"
                src={cover}
                width={1920}
                height={1080}
                alt="hero image"
                // placeholder="blur"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Hero;

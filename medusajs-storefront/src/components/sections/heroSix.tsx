import { Section, Container } from "@/components/craft";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

import Link from "next/link";

const HeroSix = ({
  title,
  body,
  buttons,
  badge,
}: {
  title: string;
  body: string;
  badge?: any;
  buttons?: any;
}) => {
  return (
    <Section className="relative backdrop-blur-sm text-center">
      <Container className={"flex flex-col gap-8 items-center"}>
        <Badge className="not-prose w-fit" variant="outline">
          {badge && (
            <Link
              className="group flex items-center gap-1"
              {...badge}
              // href={badge.url}
            >
              {badge.label}
              <ArrowRight className="w-4 transition-all group-hover:-rotate-45" />
            </Link>
          )}
        </Badge>
        <h1 className="!mb-0 !leading-snug">{title}</h1>
        <h3 className="!mt-2 rounded-md border bg-muted/50 p-4 text-muted-foreground">
          {body}
        </h3>
        <div className="flex gap-4">
          {buttons &&
            buttons.map((button: any, index: number) => (
              <Button key={index} {...button}>
                {button.label}
              </Button>
            ))}
        </div>
      </Container>
    </Section>
  );
};

export default HeroSix;

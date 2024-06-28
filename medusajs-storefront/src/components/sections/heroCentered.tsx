import { Container, Section } from "@/components/craft";
import Balancer from "react-wrap-balancer";
import { Button } from "../ui/button";

const HeroCentered = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <Section>
      <Container className="flex flex-col text-center py-20 sm:py-36">
        <h1 className="!mb-0 !leading-snug font-semibold">{title}</h1>
        <h3 className="text-muted-foreground">
          <Balancer>{subtitle}</Balancer>
        </h3>
        {/* <div className="mx-auto !mt-8 flex items-center gap-2">
          <Button>Get Started</Button>
          <Button variant={"outline"}>Learn More</Button>
        </div> */}
      </Container>
    </Section>
  );
};

export default HeroCentered;

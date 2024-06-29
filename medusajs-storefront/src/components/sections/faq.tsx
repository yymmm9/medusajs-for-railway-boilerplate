import * as Craft from "@/components/craft"

import { ArrowUpRight } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
// @ts-nocheck
type FAQItem = {
  question: string
  answer: string
  link?: string
}

const content: FAQItem[] = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "https://google.com",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Excepteur sint occaecat cupidatat non proident?",
    answer:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
]

const FAQ = ({ data }: { data: FAQItem[] }) => {
  return (
    <Craft.Section>
      <Craft.Container>
        <h3 className="!mt-0">常见疑问</h3>
        <h4 className="text-muted-foreground">
          找不到您需要的答案？欢迎<Link href="/contact">联系我们</Link>
        </h4>

        <div className="mt-4 md:mt-8 not-prose flex flex-col gap-4">
          {data.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="hover:bg-muted/50 transition-all border px-4 bg-muted/20 rounded-md"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="opacity-60 w-full mt-2 hover:opacity-100 transition-all flex items-center"
                    >
                      相关信息 <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </Craft.Container>
    </Craft.Section>
  )
}

export default FAQ

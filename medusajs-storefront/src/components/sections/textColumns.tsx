import { Section, Container } from "@/components/craft";
import { ArrowRightIcon } from "lucide-react";
const TextColumns = ({ subtitle, cta, blocks }: any) => {
  const renderBlock = (block: string) => {
    return block.split("\n").map((text, index) => (
      <span key={index}>
        {text}
        <br />
      </span>
    ));
  };
  return (
    <Section>
      <div
        data-sb-field-path="sections.1"
        className="flex mx-auto col-span-1 md:col-span-1 overflow-x-hidden relative pt-0 pb-0 bg-theme-bg-subtle-hover"
      >
        <div
          className="w-full max-w-content px-6 md:px-9 grid mx-auto z-[1] relative gap-x-6 gap-y-6 md:gap-y-6 grid-cols-1 md:grid-cols-1 justify-items-center items-start md:items-start md:justify-items-center"
          data-sb-field-path=".blocks"
        >
          <div
            data-sb-field-path=".0"
            className="w-full flex justify-between border-b pb-3 border-theme-border-strong"
          >
            <div className="flex items-center gap-2">
              <p className="text-theme-fg-subtle text-lg">{subtitle}</p>
            </div>
            {cta?.text && cta?.url && (
              <a
                data-sb-field-path=".link"
                className="leading-5 font-medium gap-1.5 items-center transition-all inline-flex text-theme-text-interactive dark:text-dark-text-interactive group-hover:text-theme-text-interactive-hover hover:text-theme-text-interactive-hover dark:hover:text-dark-text-interactive-hover dark:group-hover:text-dark-text-interactive-hover"
                href={cta.url}
              >
                {cta.text}
                <span className="">
                  <span className="overflow-hidden">
                    <ArrowRightIcon className="size-4" />
                  </span>
                </span>
              </a>
            )}
          </div>
          <div data-sb-field-path=".1" className="w-full">
            <div className="py-8 flex flex-col items-center">
              <div className="w-[calc(100%+3rem)] md:w-[calc(100%+4.5rem)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 px-6 md:px-9">
                  <p className="text-xl md:text-2xl font-medium">
                    {renderBlock(blocks[0])}
                  </p>
                  {blocks[1] && (
                    <p className="text-lg">{renderBlock(blocks[1])}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-theme-border-base w-full h-[2px] bg-white absolute bottom-0 left-0 right-0 z-50"></div> */}
      </div>
    </Section>
  );
};

export default TextColumns;

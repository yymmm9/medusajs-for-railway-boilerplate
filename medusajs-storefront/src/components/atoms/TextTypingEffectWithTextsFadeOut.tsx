"use client";
import { useState, useEffect } from "react";

import { cva } from "class-variance-authority";

// Define CVA configuration
const textStyles = cva(
  "inline-block flex items-center text-black duration-300 dark:text-white min-h-72 ", // base styles
  {
    variants: {
      fadeText: {
        true: "opacity-1 translate-y-0",
        false: "translate-y-2 opacity-0",
      },
      size: {
        sm: "text-sm",
        md: "text-lg",
        lg: "text-3xl md:text-5xl font-normal tracking-tight !leading-snug",
      },
      align: {
        center: "text-center",
      },
    },
    defaultVariants: {
      size: "md",
      // align: "center",
    },
  }
);

const circleStyles = cva(
  " inline-block  rounded-full bg-black duration-300 dark:bg-white", // base styles
  {
    variants: {
      fadeCircle: {
        true: "",
        false: "scale-0",
      },
      size: {
        sm: "ml-1 h-2 w-2",
        md: "ml-2 h-3 w-3",
        lg: "ml-5 h-6 w-6",
      },
    },
  }
);

const useTypingEffect = (
  text: string,
  duration: number,
  isTypeByLetter = false
) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const items = isTypeByLetter ? text.split("") : text.split(" ");

  useEffect(() => {
    setCurrentPosition(0);
  }, [text]);

  useEffect(() => {
    if (currentPosition >= items.length) return;

    const intervalId = setInterval(() => {
      setCurrentPosition((prevPosition) => prevPosition + 1);
    }, duration);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentPosition, items, duration]);

  return items.slice(0, currentPosition).join(isTypeByLetter ? "" : " ");
};

const texts = [
  "加载中...",
  "但我们若盼望那所不见的，就必忍耐等候。\n罗马书 8:25",
  "内容快好了",
  "恒常忍耐可以劝动君王；柔和的舌头能折断骨头。\n箴言 25:15",
];

const TIME_TO_FADE = 300;
const TIME_INTERVAL = 4500;
const TIME_PER_LETTER = 150;

const TextTypingEffectWithTextsFadeOut = ({
  texts,
  size,
}: {
  texts: string[];
  size: "sm" | "md" | "lg";
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeText, setFadeText] = useState(true);
  const [fadeCircle, setFadeCircle] = useState(true);
  const textToShow = useTypingEffect(texts[textIndex], TIME_PER_LETTER, true);

  const timeToTypeText = texts[textIndex].split("").length * TIME_PER_LETTER;

  useEffect(() => {
    const circleTimeout = setTimeout(() => {
      setFadeCircle(false);
    }, timeToTypeText + 1000);

    const textTimeout = setTimeout(() => {
      setFadeText(false);

      setTimeout(() => {
        setTextIndex((prevIndex) =>
          prevIndex >= texts.length - 1 ? 0 : prevIndex + 1
        );
        setFadeCircle(true);
        setFadeText(true);
      }, TIME_TO_FADE);
    }, timeToTypeText + 1000);

    return () => {
      clearTimeout(circleTimeout);
      clearTimeout(textTimeout);
    };
  }, [textIndex]);

  return (
    <>
      <div
        className={textStyles({ fadeText: fadeText, size: size })}
        key={textIndex}
      >
        <span className="whitespace-pre-line leading-normal">
          {textToShow}
          <span
            className={circleStyles({ fadeCircle: fadeCircle, size: size })}
          />
        </span>
      </div>
    </>
  );
};

export default TextTypingEffectWithTextsFadeOut;

import React, { useState, FC } from "react";
import Image from "next/image";

interface LogoItem {
  name: string;
  imgUrl: string;
  altText: string;
}

interface LogoWallProps {
  items?: LogoItem[];
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
}

const LogoWall: FC<LogoWallProps> = ({
  items = [],
  direction = "horizontal",
  pauseOnHover = false,
  size = "clamp(21rem, 1rem + 30vmin, 25rem)",
  duration = "40s",
}) => {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    "flex",
    "flex-col",
    "gap-[calc(var(--size)/14)]",
    "mx-auto",
    "max-w-full",
    "p-[20px_10px]",
    direction === "vertical" && "flex-row justify-center h-full",
  ]
    .filter(Boolean)
    .join(" ");

  const marqueeClass = [
    "relative",
    "flex",
    "overflow-hidden",
    "select-none",
    "gap-[calc(var(--size)/14)]",
    "justify-start",
    "w-full",
    "mask-horizontal",
    direction === "vertical" && "flex-col h-full mask-vertical",
    isPaused && "paused",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={wrapperClass}
      style={{
        "--size": size as string,
        "--duration": duration as string,
      }}
    >
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
            <Image
              src={item.imgUrl}
              alt={item.altText}
              width={500}
              height={300}
              className="bg-[var(--color-bg-accent)] rounded-md object-contain aspect-video w-[var(--size)] p-[calc(var(--size)/10)]"
            />
            <p className="mt-2 text-center text-sm font-medium">{item.name}</p>
          </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex-shrink-0",
            "flex",
            "items-center",
            "justify-around",
            "gap-[calc(var(--size)/14)]",
            "min-w-full",
            "animate-scrollX",
            direction === "vertical" && "flex-col min-h-full animate-scrollY",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {items.map((item, idx) => (
            <Image
              key={`dup1-${idx}`}
              src={item.imgUrl}
              alt={item.altText}
              width={500}
              height={300}
              className={[
                "rounded-md",
                "object-contain",
                "aspect-video",
                "w-[var(--size)]",
                "p-[calc(var(--size)/10)]",
                direction === "vertical" &&
                  "aspect-square w-[calc(var(--size)/1.5)] p-[calc(var(--size)/6)]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default LogoWall;
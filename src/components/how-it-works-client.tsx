"use client";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HowItWoksGifs() {
  const [active, setActive] = useState(0);
  const urls = ["/step1.gif", "/step2.gif", "/step3.gif", "/step4.gif"];
  useEffect(() => {
    const preLoadGifs = () => {
      urls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };
    setTimeout(() => {
      preLoadGifs();
    }, 300);
  }, []);
  return (
    <div className="md:basis-2/5 shrink-0 z-0 flex flex-col items-center gap-2">
      <div className=" relative w-full h-full">
        <NextImage
          src={"/blue-circles.webp"}
          width={400}
          height={400}
          alt="background svg"
          className=" absolute w-auto left-1/2 -translate-x-1/2 h-[95%] -z-20"
        />
        <img
          src={urls[active]}
          alt="How esim works"
          className="w-full h-full"
          loading="lazy"
        />
      </div>

      <div className=" flex items-center gap-3">
        <button
          onClick={() => setActive((p) => (p - 1 < 0 ? 0 : p - 1))}
          className=" bg-white w-8 h-8 shadow-sm rounded-full flex items-center justify-center "
        >
          <ChevronLeft className="  text-gray-600  " />
        </button>
        <button
          onClick={() => setActive((p) => (p + 1) % 4)}
          className=" bg-white w-8 h-8 shadow-sm rounded-full flex items-center justify-center"
        >
          <ChevronRight className="text-gray-600 " />
        </button>
      </div>
    </div>
  );
}

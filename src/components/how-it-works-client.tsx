"use client";

import Image from "next/image";
import Step1 from "../../public/step1.gif";
import { useState } from "react";
import Step2 from "../../public/step2.gif";
import Step3 from "../../public/step3.gif";
import Step4 from "../../public/step4.gif";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HowItWoksGifs() {
  const [active, setActive] = useState(0);
  return (
    <div className="basis-2/5 shrink-0 z-0 flex flex-col items-center gap-2">
      <div className=" relative w-full h-full">
        <Image
          src={"/blue-circles.webp"}
          width={400}
          height={400}
          alt="background svg"
          className=" absolute w-auto left-1/2 -translate-x-1/2 h-[95%] -z-20"
        />
        <Image
          src={
            active === 0
              ? Step1
              : active === 1
              ? Step2
              : active === 2
              ? Step3
              : Step4
          }
          alt="How esim works"
          className="w-full h-full"
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

"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo, useState } from "react";

export function AboutUsContentTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const content = useMemo(
    () => [
      {
        heading: "Our Vision",
        text: "Our mission is to provide top-quality eSIM that offer convenience, flexibility, and affordability. We strive to deliver exceptional customer experiences through our user-friendly platform, comprehensive support, and competitive pricing. Whether you’re traveling abroad or need a flexible mobile plan, eSIM Cards are here to keep you connected.",
        imageUrl: "/about-us-content-one.png",
      },
      {
        heading: "Our Mission",
        text: "Our mission is to provide top-quality eSIM that offer convenience, flexibility, and affordability. We strive to deliver exceptional customer experiences through our user-friendly platform, comprehensive support, and competitive pricing. Whether you’re traveling abroad or need a flexible mobile plan, eSIM Cards are here to keep you connected.",
        imageUrl: "/about-us-content-one.png",
      },
      {
        heading: "Sustainability",
        text: "Our mission is to provide top-quality eSIM that offer convenience, flexibility, and affordability. We strive to deliver exceptional customer experiences through our user-friendly platform, comprehensive support, and competitive pricing. Whether you’re traveling abroad or need a flexible mobile plan, eSIM Cards are here to keep you connected.",
        imageUrl: "/about-us-content-one.png",
      },
    ],
    []
  );

  return (
    <div className=" flex flex-col items-center max-w-5xl w-full mx-auto pt-10 pb-16">
      <div className=" flex items-center justify-between w-full relative pb-6 ">
        <div className=" bg-slate-200 h-[3px] rounded-full absolute inset-x-0 bottom-0"></div>

        <div className=" relative flex items-center justify-around md:w-3/4 w-full mx-auto">
          <div
            className=" bg-bluePrimary h-[3px] w-1/3 absolute rounded-full -bottom-6 transition-all"
            style={{
              left:
                activeTab === 0
                  ? "0%"
                  : activeTab === 1
                  ? "33%"
                  : activeTab === 2
                  ? "66%"
                  : "",
            }}
          ></div>
          {content.map((c, idx) => (
            <button
              onClick={() => setActiveTab(idx)}
              className={cn(
                "text-black drop-shadow-md text-lg font-gilroyBold cursor-pointer"
              )}
            >
              {c.heading}
            </button>
          ))}
        </div>
      </div>
      <div className=" py-8 flex flex-col items-center gap-6">
        <p className=" px-4 py-2 border-2 rounded-lg font-gilroyMedium text-gray-600 border-gray-200 text-center">
          {content[activeTab].text}
        </p>
        <Image
          src={content[activeTab].imageUrl}
          width={400}
          height={400}
          className=" w-auto h-72"
          alt=""
        />
      </div>
      <span className=" h-[3px] bg-bluePrimary w-[80%] rounded-full"></span>
    </div>
  );
}

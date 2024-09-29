"use client";
import { Region } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function PlanSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-12">
      <div className=" flex items-center justify-center">
        <ToggleRegion />
      </div>
      <Providers />
      <div className="xl:max-w-4xl w-full overflow-auto px-8 md:px-4 mx-auto flex items-stretch md:justify-center justify-start gap-4 pt-12">
        {children}
      </div>
    </div>
  );
}

export function Providers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname().split("plans")[1].slice(1);
  return (
    <div className=" w-full relative pt-12">
      <div className=" absolute w-full h-[2px] bg-gray-200 -bottom-1 inset-x-0"></div>

      <div
        ref={containerRef}
        className=" relative flex items-center justify-center w-fit mx-auto"
      >
        <motion.div
          className="absolute transition-all sm:w-24 w-20 h-[2px] bg-indigo-800 -bottom-1"
          style={{
            left: pathname.startsWith("three")
              ? "0%"
              : pathname === "ee"
              ? "25%"
              : pathname.startsWith("o2")
              ? "50%"
              : "75%",
          }}
        ></motion.div>
        <MenuItem path="/plans/three">Three</MenuItem>
        <MenuItem path="/plans/ee">EE</MenuItem>
        <MenuItem path="/plans/o2">O2</MenuItem>
        <MenuItem path="/plans/vodafone">Vodafone</MenuItem>
      </div>
    </div>
  );
}

function MenuItem({
  children,
  path,
}: {
  children: React.ReactNode;
  path: string;
}) {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();
  return (
    <button
      className={cn(
        "font-gilroyMedium sm:w-24 w-20  transition-all md:text-sm text-base",
        pathname.split("?")[0] === path
          ? " text-black font-gilroyBold"
          : "text-gray-500 hover:text-black"
      )}
      onClick={() =>
        router.replace(
          params.size > 0 ? `${path}?${params.toString()}` : `${path}`
        )
      }
    >
      {children}
    </button>
  );
}

export function ToggleRegion() {
  const pathname = usePathname();
  const params = useSearchParams();
  const [active, setActive] = useState<Region>("UK");
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  useEffect(() => {
    const region = params.get("region");
    if (region && (region === "UK" || region === "UK_EU")) {
      setActive(region);
    }
  }, [params, pathname]);

  useEffect(() => {
    const container = containerRef.current;
    const activeTab = activeTabRef.current;
    if (container && activeTab) {
      const { offsetLeft, offsetWidth } = activeTab;
      const clipLeft = offsetLeft;
      const clipRight = offsetLeft + offsetWidth;
      container.style.clipPath = `inset(0 ${Number(
        100 - (clipRight / container.offsetWidth) * 100
      ).toFixed()}% 0 ${Number(
        (clipLeft / container.offsetWidth) * 100
      ).toFixed()}% round 4px)`;
    }
  }, [active]);

  return (
    <div className="relative flex flex-col items-center w-fit mx-auto text-sm font-gilroyBold">
      <ul className="relative flex w-full justify-center gap-4 bg-[#fff] text-gray-600 border rounded-sm border-black shadow-sm">
        <li>
          <button
            className="flex items-center justify-center h-8 px-6 font-medium transition-all opacity-80 hover:opacity-100"
            ref={active === "UK" ? activeTabRef : null}
            onClick={() => {
              setActive("UK");
              router.replace(`${pathname}?region=UK`);
            }}
          >
            UK eSIM
          </button>
        </li>
        <li>
          <button
            className="flex items-center justify-center h-8 px-6 font-medium transition-all opacity-80 hover:opacity-100"
            ref={active === "UK_EU" ? activeTabRef : null}
            onClick={() => {
              setActive("UK_EU");
              router.replace(`${pathname}?region=UK_EU`);
            }}
          >
            UK+Europe eSIM
          </button>
        </li>
      </ul>
      <div
        className="absolute z-20 w-full overflow-hidden bg-bluePrimary transition-all duration-250 ease-in-out"
        aria-hidden
        ref={containerRef}
        style={{ clipPath: "inset(0px 63% 0px 0% round 4px)" }}
      >
        <ul className="relative flex w-full justify-center gap-4 rounded-md text-white border border-black/40">
          <li>
            <button
              tabIndex={-1}
              className="flex items-center justify-center h-8 px-6"
              onClick={() => setActive("UK")}
            >
              UK eSIM
            </button>
          </li>
          <li>
            <button
              tabIndex={-1}
              className="flex items-center justify-center h-8  px-6 font-medium shadow-sm"
              onClick={() => setActive("UK_EU")}
            >
              UK+Europe eSIM
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

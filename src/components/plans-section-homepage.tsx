"use client";
import { motion } from "framer-motion";
import { Plan, type Providers, Region } from "@/lib/types";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { PlanCard } from "./plan-card";

export function HomePagePlansSection({ allPlans }: { allPlans: Plan[] }) {
  const [activeRegion, setActiveRegion] = useState<Region>("UK");
  const [activeProvider, setActiveProvider] = useState<Providers>("EE");

  return (
    <div className="pt-12">
      <div className=" flex items-center justify-center">
        <ToggleRegion active={activeRegion} setActive={setActiveRegion} />
      </div>
      <Providers
        activeProvider={activeProvider}
        setActiveProvider={setActiveProvider}
      />
      <div className="xl:max-w-4xl w-full overflow-auto px-8 md:px-4 mx-auto flex items-stretch md:justify-center justify-start gap-4 pt-12">
        <>
          {allPlans
            .filter(
              (p) => p.provider === activeProvider && p.region === activeRegion
            )
            .map((p) => (
              <PlanCard plan={p} key={p.id} />
            ))}
        </>
      </div>
    </div>
  );
}

export function ToggleRegion({
  active,
  setActive,
}: {
  active: Region;
  setActive: Dispatch<SetStateAction<Region>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

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

export function Providers({
  activeProvider,
  setActiveProvider,
}: {
  activeProvider: Providers;
  setActiveProvider: Dispatch<SetStateAction<Providers>>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
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
            left:
              activeProvider === "THREE"
                ? "0%"
                : activeProvider === "EE"
                ? "25%"
                : activeProvider === "O2"
                ? "50%"
                : "75%",
          }}
        ></motion.div>
        <MenuItem
          activeProvider={activeProvider}
          setActiveProvider={setActiveProvider}
          id="THREE"
        >
          Three
        </MenuItem>
        <MenuItem
          activeProvider={activeProvider}
          setActiveProvider={setActiveProvider}
          id="EE"
        >
          EE
        </MenuItem>
        <MenuItem
          activeProvider={activeProvider}
          setActiveProvider={setActiveProvider}
          id="O2"
        >
          O2
        </MenuItem>
        <MenuItem
          activeProvider={activeProvider}
          setActiveProvider={setActiveProvider}
          id="VODAFONE"
        >
          Vodafone
        </MenuItem>
      </div>
    </div>
  );
}

function MenuItem({
  children,
  activeProvider,
  id,
  setActiveProvider,
}: {
  children: React.ReactNode;
  activeProvider: Providers;
  setActiveProvider: Dispatch<SetStateAction<Providers>>;
  id: Providers;
}) {
  return (
    <button
      className={cn(
        "font-gilroyMedium sm:w-24 w-20  transition-all md:text-sm text-base",
        activeProvider === id
          ? " text-black font-gilroyBold"
          : "text-gray-500 hover:text-black"
      )}
      onClick={() => setActiveProvider(id)}
    >
      {children}
    </button>
  );
}

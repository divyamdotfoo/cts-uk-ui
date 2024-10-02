"use client";

import { cn } from "@/lib/utils";
import { HandCoins, Minus, Plus, Smartphone, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export function PlanData({ plans }: { plans: any }) {
  const [activePlan, setActivePlan] = useState<any>({});
  const [quantity, setQuantity] = useState(1);
  const TABS = [
    "Features",
    "Supported destination",
    "Usage Restrictions",
    "APN",
  ] as const;
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Features");
  useEffect(() => {
    setActiveTab("Features");
  }, [activePlan]);

  return (
    <div className=" pt-2 text-gray-900 flex flex-col lg:items-start items-center gap-8 lg:max-w-2xl xl:max-w-3xl">
      {/* heading */}
      <div className=" flex items-center justify-between text-4xl w-full">
        <h2 className=" ">EE UK eSIM Plan</h2>
        <p className=" text-3xl tracking-wider text-black font-gilroySemiBold hidden md:block">
          £{activePlan.price ?? Number(21.9).toFixed(2)}
          <span id="plan-price" className="text-sm pl-3 tracking-normal">
            GBP
          </span>
        </p>
      </div>
      {/* tabs */}
      <div className=" flex gap-2 items-center w-fit bg-gray-50 shadow-sm rounded-2xl py-2 lg:px-2">
        {TABS.map((t) => (
          <button
            className={cn(
              "px-2 font-gilroyMedium py-2 border border-transparent  transition-all rounded-xl",
              activeTab === t
                ? " border-gray-500 text-black"
                : " text-gray-700 hover:border-gray-300"
            )}
            onClick={() => setActiveTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      {/* content */}
      <div className=" min-h-24 lg:px-3 self-start">
        {activeTab === "Features" ? (
          <div className=" flex flex-col gap-3 font-gilroyMedium">
            <p className=" flex items-center gap-3">
              <span>
                <Smartphone className=" w-5 h-5 stroke-[1.5px] text-black" />
              </span>
              UK's Unlimited local Voice eSIM
            </p>
            <p className=" flex items-center gap-3">
              <span>
                <Zap className=" w-5 h-5 stroke-[1.5px]" />
              </span>
              5G High Speed Connection
            </p>
            <p className=" flex items-center gap-3">
              <span>
                <HandCoins className=" w-5 h-5 stroke-[1.5px]" />
              </span>
              No Roaming (UK Only)
            </p>
          </div>
        ) : activeTab === "Supported destination" ? (
          <p></p>
        ) : activeTab === "Usage Restrictions" ? (
          <p></p>
        ) : (
          <p></p>
        )}
      </div>
      {/* tabs */}
      <div className=" lg:px-3 flex flex-col md:gap-2 gap-6 self-start">
        {/* validity */}
        <div className=" flex flex-col sm:flex-row sm:items-center items-start gap-4">
          <p className=" font-gilroySemiBold text-black text-lg">Plan type:</p>
          <div className=" flex items-center gap-4 text-white text-xs font-inter font-medium">
            <button className=" bg-bluePrimary px-2 py-1 rounded-sm shadow-sm">
              30-days
            </button>
            <button className=" bg-gray-500 hover:bg-bluePrimary transition-all px-2 py-1 rounded-sm shadow-sm">
              3-months
            </button>
            <button className=" bg-gray-500 hover:bg-bluePrimary transition-all px-2 py-1 rounded-sm shadow-sm">
              6-months
            </button>
            <button className=" bg-gray-500 hover:bg-bluePrimary transition-all px-2 py-1 rounded-sm shadow-sm">
              12-months
            </button>
          </div>
        </div>
        {/* data */}
        <div className=" flex flex-col sm:flex-row sm:items-center items-start gap-4">
          <p className=" font-gilroySemiBold text-black text-lg">Data type:</p>
          <div className=" flex items-center gap-4 text-white text-xs font-inter font-medium">
            <button className="bg-bluePrimary px-2 py-1 rounded-sm shadow-sm">
              Unlimited
            </button>
            <button className="bg-gray-500 hover:bg-bluePrimary transition-all px-2 py-1 rounded-sm shadow-sm">
              50 GB
            </button>
            <button className="bg-gray-500 hover:bg-bluePrimary transition-all px-2 py-1 rounded-sm shadow-sm">
              100 GB
            </button>
          </div>
        </div>
      </div>
      {/* quantity */}
      <div className=" flex items-center text-black justify-around p-2 rounded-lg border border-gray-300 sm:max-w-72 w-[90%] self-center lg:self-start">
        <button
          disabled={quantity <= 1}
          onClick={() => setQuantity((p) => (p - 1 === 0 ? 1 : p - 1))}
          className=" p-1 border border-gray-200 disabled:opacity-60 hover:border-gray-400 transition-all shadow-sm rounded-lg"
        >
          <Minus />
        </button>
        <p className=" basis-1/2 text-center shrink-0 font-inter font-medium text-lg">
          {quantity}
        </p>
        <button
          onClick={() => setQuantity((p) => p + 1)}
          className=" p-1 border border-gray-200 hover:border-gray-400 transition-all shadow-sm rounded-lg"
        >
          <Plus />
        </button>
      </div>

      <div className="tracking-wider w-[90%] px-1 self-center lg:self-start flex items-center justify-between text-black font-gilroySemiBold lg:hidden">
        <p className=" text-2xl">Total</p>
        <p className=" text-3xl">
          £{activePlan.price ?? Number(21.9).toFixed(2)}
          <span id="plan-price" className="text-sm pl-3 tracking-normal">
            GBP
          </span>
        </p>
      </div>

      {/* add */}
      <button className=" mt-4 w-[90%] self-center lg:self-start bg-bluePrimary text-white py-2 text-center px-2 rounded-lg shadow-sm hover:bg-blueSecondary transition-all">
        Add to cart
      </button>
    </div>
  );
}

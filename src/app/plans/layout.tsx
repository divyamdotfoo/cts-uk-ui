import { Benefits } from "@/components/benefits";
import { FAQs } from "@/components/faqs";
import { HowItWorks } from "@/components/how-it-works";
import { PlanSection } from "@/components/plans-section";
import {
  AffordableMoney,
  Beach,
  EasySetup,
  EsimIconLightBlue,
} from "@/components/svgs";
import { Underline } from "@/components/underline-wrapper";
import Image from "next/image";
import React, { Suspense } from "react";

export default function PlanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-full">
      <div className=" w-full bg-blueAccent py-16 ">
        <div className=" max-w-7xl mx-auto">
          <h1 className=" text-4xl text-bluePrimary text-center font-gilroyBold">
            Connect Your Way, Anytime,{" "}
            <Underline color="#eab308" strokeWidth={2}>
              Anywhere
            </Underline>
          </h1>
          <Suspense>
            <PlanSection>{children}</PlanSection>
          </Suspense>
        </div>
      </div>
      <div className=" py-12">
        <p className=" text-4xl text-black/90 font-gilroyBold pb-3 text-center">
          Why eSIM CARDS?
        </p>
        <div className=" text-blueAccentForeground py-6 max-w-5xl mx-auto font-gilroyBold grid md:grid-cols-4 grid-cols-2 gap-4">
          <div className=" bg-blueAccent p-2 rounded-md shadow-sm flex items-center gap-4">
            <div className=" basis-1/5">
              <Beach />
            </div>
            <p className="">Stay connected wherever you travel</p>
          </div>
          <div className=" bg-blueAccent p-2 rounded-md shadow-sm flex items-center gap-4">
            <div className=" basis-1/6 shrink-0">
              <AffordableMoney />
            </div>
            <p>Affordable data plans</p>
          </div>
          <div className=" bg-blueAccent p-2 rounded-md shadow-sm flex items-center gap-4">
            <div className=" basis-1/6 shrink-0">
              <EasySetup />
            </div>
            <p>Effortless setup</p>
          </div>
          <div className=" bg-blueAccent p-2 rounded-md shadow-sm flex items-center gap-4">
            <div className=" basis-1/6 shrink-0">
              <EsimIconLightBlue />
            </div>
            <p>No more roaming fees</p>
          </div>
        </div>
        <div className=" flex md:flex-row flex-col  pt-4 items-start gap-6 justify-between max-w-5xl mx-auto">
          <div className="basis-3/5 md:translate-y-2">
            <p className=" text-black font-gilroyMedium text-xl pb-4 ">
              Why choose our eSIM?
            </p>
            <p className=" font-inter text-gray-600 font-medium text-sm">
              Our eSIM offers the convenience of instant activation and flexible
              mobile plans from some of the leading network providers. With
              broad network coverage, you can enjoy fast and reliable
              connectivity for all your communication needs—whether at home or
              while traveling.
            </p>
          </div>
          <Image
            src={"/esim-girl.webp"}
            width={400}
            height={400}
            alt=""
            className=" w-auto h-auto"
          />
        </div>
      </div>
      <HowItWorks />
      <FAQs />
    </div>
  );
}

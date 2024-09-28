import { Benefits } from "@/components/benefits";
import { NewsLetter } from "@/components/email";
import { Footer } from "@/components/footer";
import { FAQs } from "@/components/faqs";
import { FeatureSection } from "@/components/feature-section";
import { HowItWorks } from "@/components/how-it-works";
import { PlanSection } from "@/components/plans-section";
import { EE, O2, Three, Vodafone, WhiteLogo } from "@/components/svgs";
import { Underline } from "@/components/underline-wrapper";
import Image from "next/image";
import React, { Suspense } from "react";

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div
        className=" w-full relative h-auto bg-center bg-[length:150%_100%] md:bg-[length:105%_100%] bgClip"
        style={{
          backgroundImage: "url('/hero-bg.webp')",
        }}
      >
        <svg
          width="0"
          height="0"
          aria-hidden="true"
          className=" hidden md:block"
        >
          <defs>
            <clipPath id="bgClipLarge" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V1 C0.75,0.95 0.25,0.95 0,1 Z" />
            </clipPath>
          </defs>
        </svg>

        <svg width="0" height="0" aria-hidden="true" className="md:hidden">
          <defs>
            <clipPath id="bgClipSmall" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V1 C0.75,0.975 0.25,0.975 0,1 Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className=" pt-10 sm:pb-28 pb-16 max-w-[1440px] w-full mx-auto md:px-12 px-4 sm:px-6 2xl:px-0 md:flex md:items-center md:gap-4"
          style={{}}
        >
          <div className=" xl:basis-[70%] lg:basis-[90%] basis-[100%]  shrink-0">
            <div className=" flex items-center justify-between">
              <div className=" lg:basis-[70%] md:basis-[60%] basis-[100%] shrink-0">
                <h1 className=" font-gilroyBold w-fit md:leading-[57px] leading-tight lg:text-5xl sm:text-4xl text-3xl text-white">
                  <span className=" block">Ditch the Old SIM Cards.</span>
                  <span className=" block">Meet the Ultimate</span>
                  <Underline color="yellow" className=" relative">
                    eSIM Experience.
                    <WhiteLogo className=" absolute -right-24 md:top-0 -top-5" />
                  </Underline>
                </h1>
                <h2 className=" font-gilroyMedium text-2xl max-w-72 sm:max-w-full pt-6 text-white">
                  Jump between networks in the UK and Europe with ease.
                </h2>
              </div>
              <div className="sm:hidden md:block xl:hidden">
                <HeroLogos />
              </div>
            </div>

            <HeroPlans />
          </div>

          {/* hero logos */}
          <div className="hidden xl:block">
            <HeroLogos />
          </div>
        </div>
      </div>

      <FeatureSection />
      <Suspense fallback={null}>
        <PlanSection>{children}</PlanSection>
      </Suspense>
      <HowItWorks />
      <FAQs />
      <Benefits />

      <div className="max-w-6xl mx-auto px-6 xl:px-0">
        <div className="bg-accentSection rounded-lg py-6 px-6 text-bluePrimary ">
          <p className=" font-semibold text-lg pb-4">Why Choose Us? ❤️</p>
          <p className=" tracking-wide text-sm">
            Choose us for the best eSIM experience. Our seamless platform makes
            purchasing, activating, and managing your eSIM easy, ensuring
            instant connectivity. We offer affordable plans, top-notch security,
            and local geographic numbers to keep you connected like a local.
            With exceptional customer service and a 30-day money-back guarantee,
            your satisfaction is our priority. Whether for personal or
            professional use, our reliable and high-quality eSIM solutions
            fulfill all your connectivity needs. Experience unmatched
            convenience with our prepaid eSIM UK. Enjoy the ultimate convenience
            with our prepaid eSIM UK.
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}

function HeroLogos() {
  return (
    <div className="flex items-center translate-y-6">
      <Image src={"/eu.png"} width={650} height={650} alt="logo" />
      <Image
        src={"/uk.png"}
        width={650}
        height={650}
        alt="logo"
        className=" -translate-y-16 -translate-x-1/4"
      />
    </div>
  );
}

function HeroPlans() {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 items-stretch gap-5 w-full sm:pt-16 pt-12 px-1 sm:px-0">
        {/* three */}
        <div className=" flex flex-col items-center py-4 lg:px-8 px-4 rounded-lg  bg-white text-black border border-black shadow-sm relative">
          <div className=" absolute -right-3 -top-2 sm:w-12 sm:h-12 w-10 h-10 rounded-full flex items-center justify-center bg-white border-[1.3px] border-black">
            <Three />
          </div>
          <h2 className=" font-gilroyBold lg:text-2xl md:text-xl pb-4">
            Three
          </h2>
          <p className=" font-gilroyBold font-bold text-xs">as low as</p>
          <p className=" font-gilroyBold text-5xl pb-1">£8</p>
          <p className=" font-giloryLight text-gray-500 pb-4 text-sm">
            per month
          </p>
          <button className=" w-full text-center py-1 text-white bg-black font-gilroyBold rounded-lg">
            View all
          </button>
        </div>

        {/* EE */}
        <div className=" flex flex-col items-center py-4 lg:px-8 px-4  rounded-lg  bg-white text-black border border-ee shadow-sm relative">
          <div className=" absolute -right-3 -top-2 sm:w-12 sm:h-12 w-10 h-10 p-[6px] rounded-full flex items-center justify-center bg-white border-[1.3px] border-ee">
            <EE />
          </div>
          <h2 className=" font-gilroyBold lg:text-2xl md:text-xl pb-4">EE</h2>
          <p className=" font-gilroyBold font-bold text-xs">as low as</p>
          <p className=" font-gilroyBold text-5xl pb-1">£10</p>
          <p className=" font-giloryLight text-gray-500 pb-4 text-sm">
            per month
          </p>
          <button className=" w-full text-center py-1 text-white bg-ee font-gilroyBold rounded-lg">
            View all
          </button>
        </div>

        {/* o2 */}
        <div className=" flex flex-col items-center py-4 lg:px-8 px-4  rounded-lg  bg-white text-black border border-o2 shadow-sm relative">
          <div className=" absolute -right-3 -top-2 sm:w-12 sm:h-12 w-10 h-10 p-[10px] rounded-full flex items-center justify-center bg-white border-[1.3px] border-o2">
            <O2 />
          </div>
          <h2 className=" font-gilroyBold text-xl pb-3">
            <span className=" text-2xl">O</span>2
          </h2>
          <p className=" font-gilroyBold font-bold text-xs">as low as</p>
          <p className=" font-gilroyBold text-5xl pb-1">£9</p>
          <p className=" font-giloryLight text-gray-500 pb-4 text-sm">
            per month
          </p>
          <button className=" w-full text-center py-1 text-white bg-o2 font-gilroyBold rounded-lg">
            View all
          </button>
        </div>

        {/* Vodafone */}
        <div className=" flex flex-col items-center py-4 lg:px-8 px-4  rounded-lg  bg-white text-black border border-vodafone shadow-sm relative">
          <div className=" absolute -right-3 -top-2 sm:w-12 sm:h-12 w-10 h-10 p-[10px] rounded-full flex items-center justify-center bg-white border-[1.3px] border-vodafone">
            <Vodafone />
          </div>
          <h2 className=" font-gilroyBold lg:text-2xl md:text-xl pb-3">
            Vodafone
          </h2>
          <p className=" font-gilroyBold font-bold text-xs">as low as</p>
          <p className=" font-gilroyBold text-5xl pb-1">£12</p>
          <p className=" font-giloryLight text-gray-500 pb-4 text-sm">
            per month
          </p>
          <button className=" w-full text-center py-1 text-white bg-vodafone font-gilroyBold rounded-lg">
            View all
          </button>
        </div>
      </div>
    </>
  );
}

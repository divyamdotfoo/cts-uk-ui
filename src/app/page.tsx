import { FeatureSection } from "@/components/feature-section";
import { EE, O2, Three, Vodafone, WhiteLogo } from "@/components/svgs";
import { Underline } from "@/components/underline-wrapper";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div
        className=" w-full h-auto"
        style={{
          backgroundImage: "url('/hero-bg.webp')",
          backgroundSize: "100% 100%",
          clipPath: "url(#curve)",
        }}
      >
        <svg width="0" height="0">
          <defs>
            <clipPath id="curve" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V1 C0.75,0.95 0.25,0.95 0,1 Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className=" pt-10 pb-28 max-w-[1440px] w-full mx-auto px-12 2xl:px-0 flex items-center gap-4"
          style={{}}
        >
          <div className=" basis-[70%] shrink-0">
            <h1 className=" font-gilroyBold w-fit leading-[57px] text-5xl text-white">
              <span className=" block">Ditch the Old SIM Cards.</span>
              <span className=" block">Meet the Ultimate</span>
              <Underline color="yellow" className=" relative">
                eSIM Experience.
                <WhiteLogo className=" absolute -right-24 top-0" />
              </Underline>
            </h1>
            <h2 className=" font-gilroyMedium text-2xl pt-6 text-white">
              Jump between networks in the UK and Europe with ease.
            </h2>
            <div className=" grid grid-cols-4 items-stretch gap-5 w-full pt-16">
              {/* three */}
              <div className=" flex flex-col items-center py-4 px-8 rounded-lg  bg-white text-black border border-black shadow-sm relative">
                <div className=" absolute -right-3 -top-2 w-12 h-12 rounded-full flex items-center justify-center bg-white border-[1.3px] border-black">
                  <Three />
                </div>
                <h2 className=" font-gilroyBold text-2xl pb-4">Three</h2>
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
              <div className=" flex flex-col items-center py-4 px-8 rounded-lg  bg-white text-black border border-ee shadow-sm relative">
                <div className=" absolute -right-3 -top-2 w-12 h-12 p-[6px] rounded-full flex items-center justify-center bg-white border-[1.3px] border-ee">
                  <EE />
                </div>
                <h2 className=" font-gilroyBold text-2xl pb-4">EE</h2>
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
              <div className=" flex flex-col items-center py-4 px-8 rounded-lg  bg-white text-black border border-o2 shadow-sm relative">
                <div className=" absolute -right-3 -top-2 w-12 h-12 p-[10px] rounded-full flex items-center justify-center bg-white border-[1.3px] border-o2">
                  <O2 />
                </div>
                <h2 className=" font-gilroyBold text-2xl pb-3">
                  <span className=" text-3xl">O</span>2
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
              <div className=" flex flex-col items-center py-4 px-8 rounded-lg  bg-white text-black border border-vodafone shadow-sm relative">
                <div className=" absolute -right-3 -top-2 w-12 h-12 p-[10px] rounded-full flex items-center justify-center bg-white border-[1.3px] border-vodafone">
                  <Vodafone />
                </div>
                <h2 className=" font-gilroyBold text-2xl pb-3">Vodafone</h2>
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
          </div>

          {/* hero logos */}
          <div className=" flex items-center translate-y-6">
            <Image src={"/eu.png"} width={650} height={650} alt="logo" />
            <Image
              src={"/uk.png"}
              width={650}
              height={650}
              alt="logo"
              className=" -translate-y-16 -translate-x-1/4"
            />
          </div>
        </div>
      </div>
      <FeatureSection />
    </>
  );
}

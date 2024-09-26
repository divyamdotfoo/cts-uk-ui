import { EsimIcon, FiveGIcon, SecurityIcon, TravelIcon } from "./svgs";

export function FeatureSection() {
  return (
    <div className=" md:pt-20 pt-12">
      <p className=" font-gilroyBold sm:text-4xl text-3xl text-center pb-2">
        Level Up Your Journey.
      </p>
      <p className=" font-gilroyBold text-sm text-center">
        Easy Travel, Secure Tech, Instant Connection!
      </p>
      <div className=" max-w-[968px] mx-auto grid md:grid-cols-4 grid-cols-2 gap-4 py-8 px-4 xl:px-0">
        {/* feature one */}
        <div className=" flex flex-col items-center py-6 px-2 rounded-lg border border-gray-300 shadow-sm">
          <div className=" w-12 h-12">
            <TravelIcon />
          </div>
          <p className=" font-gilroyBold pt-6 text-center text-lg text-[#222]">
            Travel Simplified
          </p>
          <p className=" font-gilroyMedium text-sm text-gray-600 max-w-40 text-center pt-2">
            No more SIM card swaps
          </p>
        </div>
        {/* feature two */}
        <div className=" flex flex-col items-center py-6 px-2 rounded-lg border border-gray-300 shadow-sm">
          <div className=" w-12 h-12">
            <EsimIcon />
          </div>
          <p className=" font-gilroyBold pt-6 text-center text-lg text-[#222]">
            Future-Proof Technology
          </p>
          <p className=" font-gilroyMedium text-sm text-gray-600 max-w-40 text-center pt-2">
            No more SIM card swaps
          </p>
        </div>
        {/* feature two */}
        <div className=" flex flex-col items-center py-6 px-2 rounded-lg border border-gray-300 shadow-sm">
          <div className=" w-12 h-12">
            <SecurityIcon />
          </div>
          <p className=" font-gilroyBold pt-6 text-center text-lg text-[#222]">
            Enhanced Security
          </p>
          <p className=" font-gilroyMedium text-sm text-gray-600 max-w-40 text-center pt-2">
            Protected from physical damage
          </p>
        </div>
        {/* feature two */}
        <div className=" flex flex-col items-center py-6 px-2 rounded-lg border border-gray-300 shadow-sm">
          <div className=" w-12 h-12">
            <FiveGIcon />
          </div>
          <p className=" font-gilroyBold pt-6 text-center text-lg text-[#222]">
            Instant Connectivity
          </p>
          <p className=" font-gilroyMedium text-sm text-gray-600 max-w-40 text-center pt-2">
            Quick activation <br /> No waiting time
          </p>
        </div>
      </div>
    </div>
  );
}

import { PlanData } from "@/components/plan-data";
import { LogoMutedSmall, Three } from "@/components/svgs";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className=" flex lg:gap-[70px] w-full">
      <div className=" hidden basis-0 lg:basis-1/3 lg:block">
        <Image
          src={"/plan-hero.jpg"}
          width={500}
          height={500}
          alt=""
          className="rounded-md shadow-sm"
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% 85%, 15% 100%, 0 100%)`,
          }}
        />
      </div>
      <div className=" basis-[100%] relative lg:basis-2/3">
        <div className=" flex items-center gap-1">
          <div className=" w-6 h-6">
            <LogoMutedSmall />
          </div>
          <ChevronRight className=" w-4 h-4 text-[#4E4A4C]" />
          <div className=" w-6 h-6">
            <Three className=" fill-[#4E4A4C]" />
          </div>
        </div>
        <PlanData plans={[]} />
      </div>
    </div>
  );
}

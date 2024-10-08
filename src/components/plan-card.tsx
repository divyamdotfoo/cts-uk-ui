"use client";
import { Plan, Providers, Region, TValidity } from "@/lib/types";
import { useEffect, useState } from "react";
import {
  EE,
  FiveGSim,
  HotspotIcon,
  O2,
  RoamingIcon,
  Three,
  Vodafone,
} from "./svgs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowDownUp, PhoneCall } from "lucide-react";
import { useCart } from "@/lib/store";
import { useRouter, useSearchParams } from "next/navigation";
export const PlanCard = ({
  children,
  plan,
  defaultActive = 1,
}: {
  children?: React.ReactNode;
  plan: Plan;
  defaultActive?: TValidity;
}) => {
  const [activeVariant, setActiveVariant] = useState<TValidity>(defaultActive);
  const router = useRouter();
  const plans = useCart((s) => s.plans);
  const addPlan = useCart((s) => s.addPlans);
  const isPlanInCart =
    plans.length > 0 && plans.findIndex((p) => p.id === plan.id) !== -1;

  return (
    <div className=" bg-white border-gray-200 border-[1.5px] rounded-sm shadow-sm flex flex-col items-center min-w-64">
      <div className=" py-1">{renderPlanProviderIcon(plan.provider)}</div>
      <div className="bg-planCardBg flex flex-col items-center py-4 w-full text-white ">
        <div className="flex items-center gap-2 pb-4">
          <p className=" font-gilroyBold text-5xl">
            £ {plan.variants[activeVariant].rate}
          </p>
          <p className=" text-sm">
            <span className=" block">per/month</span>
            <span className=" block">billed monthly</span>
          </p>
        </div>
        <p className=" py-[2px] rounded-md px-6 bg-planCardData font-gilroyBold">
          {typeof plan.data === "number" ? `${plan.data} GB Plan` : "Unlimited"}
        </p>
      </div>
      <div className=" p-4 w-full">
        <Select onValueChange={(v) => setActiveVariant(Number(v) as TValidity)}>
          <SelectTrigger className="w-full h-8 font-gilroyBold text-black flex items-center justify-center gap-2 border-gray-300 border-[1.4px]">
            <SelectValue placeholder="30 days" className=" " />
          </SelectTrigger>
          <SelectContent className=" border-gray-300 border-[1.5px] bg-gray-50">
            {Object.keys(plan.variants).map((k) => (
              <SelectItem value={k} key={k}>
                {Number(k) === 1 ? "30 days" : `${k} months`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex flex-col items-start gap-5 font-gilroyMedium text-sm py-6">
          <PlanFeatureItem>
            <PhoneCall className="text-planCardBg w-5 h-5" />
            <p>{plan.features && plan.features[0]}</p>
          </PlanFeatureItem>
          <PlanFeatureItem>
            <ArrowDownUp className="text-planCardBg w-5 h-5" />
            <p>{plan.features && plan.features[1]}</p>
          </PlanFeatureItem>
          <PlanFeatureItem>
            <div className=" w-5 h-5">
              <HotspotIcon />
            </div>
            <p>{plan.features && plan.features[2]}</p>
          </PlanFeatureItem>
          <PlanFeatureItem>
            <div className=" w-[22px] h-[22px]">
              <RoamingIcon />
            </div>
            <p>{plan.features && plan.features[3]}</p>
          </PlanFeatureItem>
          <PlanFeatureItem>
            <div className=" w-[22px] h-[22px] -translate-y-[3px]">
              <FiveGSim />
            </div>
            <p>{plan.features && plan.features[4]}</p>
          </PlanFeatureItem>
        </div>

        <button
          className=" shadow-md text-white bg-planCardBtn hover:bg-blueSecondary transition-all w-full flex items-center justify-center py-2 rounded-md text-sm"
          // onClick={() => {
          //   if (!isPlanInCart) {
          //     addPlan({
          //       data: plan.data,
          //       id: plan.id,
          //       provider: plan.provider,
          //       quantity: 1,
          //       region: plan.region,
          //       type: plan.type,
          //       rate: plan.variants[activeVariant].rate,
          //       validity: activeVariant,
          //     });
          //     toast(
          //       <div
          //         className="w-full text-green-800 text-lg flex items-center justify-between"
          //         onClick={(e) => {
          //           e.preventDefault();
          //           router.push("/cart");
          //         }}
          //       >
          //         <div className=" flex items-center gap-2">
          //           <div className=" bg-white rounded-full border-gray-500">
          //             {renderPlanProviderIcon(plan.provider)}
          //           </div>
          //           <p>Plan has been added.</p>
          //         </div>
          //         <button className=" bg-bluePrimary text-sm text-white px-4 py-1 rounded-lg">
          //           view
          //         </button>
          //       </div>
          //     );
          //   }
          // }}
          onClick={() => router.push(`/plans/${plan.provider.toLowerCase()}`)}
        >
          Buy now
        </button>
      </div>
    </div>
  );
};

export const PlanFeatureItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className=" flex items-center gap-4">{children}</div>;
};

export const renderPlanProviderIcon = (provider: Providers) => {
  switch (provider) {
    case "EE":
      return (
        <div className=" w-7 h-7">
          <EE />
        </div>
      );
    case "O2":
      return (
        <div className=" w-7 h-7 py-[2px]">
          <O2 />
        </div>
      );
    case "THREE":
      return (
        <div className=" w-7 h-7">
          <Three />
        </div>
      );
    case "VODAFONE":
      return (
        <div className=" w-7 h-7 py-[2px]">
          <Vodafone />
        </div>
      );
  }
};

export function FilterPlans({ plans }: { plans: Plan[] }) {
  const params = useSearchParams();
  const [filteredPlans, setFilteredPlans] = useState(
    plans.filter((p) => p.region === "UK")
  );

  useEffect(() => {
    const region = params.get("region") as Region;
    if (region && (region === "UK" || region === "UK_EU")) {
      setFilteredPlans(plans.filter((p) => p.region === region));
    }
  }, [params, plans]);

  console.log(filteredPlans);
  return (
    <>
      {filteredPlans.map((p) => (
        <PlanCard plan={p} key={p.id} />
      ))}
    </>
  );
}

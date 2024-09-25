"use client";
import { PlanCard } from "@/components/plan-card";
import { PLANS } from "@/DATA";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <EE />
    </Suspense>
  );
}
function EE() {
  const { EE: plans } = PLANS;
  return (
    <>
      {plans.slice(0, 3).map((plan) => (
        <PlanCard plan={plan} key={plan.id} />
      ))}
    </>
  );
}
// const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
// const searchParams = useSearchParams();

// useEffect(() => {
//   const region = searchParams.get("region") as Region | null;
//   if (region && region.length) {
//     setFilteredPlans(plans.filter((p) => p.region === region));
//   } else {
//     setFilteredPlans(plans.filter((p) => p.region === "UK"));
//   }
// }, [searchParams]);

// if (!filteredPlans.length) {
//   return (
//     <div className=" w-full flex items-center justify-center">
//       <p>No plans to show currently</p>
//     </div>
//   );
// }

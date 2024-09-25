import { PlanCard } from "@/components/plan-card";
import { PLANS } from "@/DATA";
import { Suspense } from "react";

export default function Page() {
  const { VODAFONE: plans } = PLANS;
  return (
    <>
      {plans.slice(0, 3).map((plan) => (
        <PlanCard plan={plan} key={plan.id} />
      ))}
    </>
  );
}

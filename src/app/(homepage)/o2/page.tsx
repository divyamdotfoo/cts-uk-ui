import { PlanCard } from "@/components/plan-card";
import { PLANS } from "@/DATA";

export default function Page() {
  const { O2: plans } = PLANS;
  return (
    <>
      {plans.slice(0, 3).map((plan) => (
        <PlanCard plan={plan} key={plan.id} />
      ))}
    </>
  );
}

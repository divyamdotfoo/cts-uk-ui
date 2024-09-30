import { FilterPlans, PlanCard } from "@/components/plan-card";
import { PLANS } from "@/DATA";

export default function Page() {
  const { O2: plans } = PLANS;
  return (
    <>
      <FilterPlans plans={plans} />
    </>
  );
}

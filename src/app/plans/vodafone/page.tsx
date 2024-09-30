import { FilterPlans } from "@/components/plan-card";
import { PLANS } from "@/DATA";

export default function Page() {
  const { VODAFONE: plans } = PLANS;
  return (
    <>
      <FilterPlans plans={plans} />
    </>
  );
}

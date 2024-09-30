import { create } from "zustand";
import { CartItem } from "./types";
import { persist, createJSONStorage } from "zustand/middleware";
interface UseCart {
  addPlans: (plan: CartItem) => void;
  deletePlan: (planId: string) => void;
  toggleQuantity: (planId: string, action: boolean) => void;
  plans: CartItem[];
}

export const useCart = create<UseCart>()(
  persist(
    (set) => ({
      plans: [],
      addPlans: (z) =>
        set((prev) => ({
          plans: [...prev.plans, z],
        })),

      deletePlan: (z) =>
        set((prev) => {
          const plan = prev.plans.find((p) => p.id === z);
          if (!plan) throw new Error("id does not match");
          return {
            plans: prev.plans.filter((p) => p.id !== z),
          };
        }),

      toggleQuantity: (z, action) =>
        set((prev) => {
          const idx = prev.plans.findIndex((p) => p.id === z);
          if (idx == -1) throw new Error("id does not match");
          const newPlan: CartItem = {
            ...prev.plans[idx],
            quantity: action
              ? prev.plans[idx].quantity + 1
              : prev.plans[idx].quantity - 1,
          };
          const allPlans = [
            ...prev.plans.slice(0, idx),
            newPlan,
            ...prev.plans.slice(idx + 1),
          ];
          return {
            plans: allPlans,
          };
        }),
    }),
    {
      name: "esim", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

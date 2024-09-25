import { create } from "zustand";
import { Cart, CartItem } from "./types";

interface UseCart extends Cart {
  addPlans: (plan: CartItem) => void;
  deletePlan: (planId: string) => void;
  toggleQuantity: (planId: string, action: boolean) => void;
}

export const useCart = create<UseCart>((set) => ({
  plans: [],
  subTotal: 0,
  total: 0,
  vat: 0,
  addPlans: (z) =>
    set((prev) => {
      const subTotal = prev.subTotal + z.rate * z.quantity * z.validity;
      const vat = 0.1 * subTotal;
      const total = subTotal + vat;
      return {
        plans: [...prev.plans, z],
        total,
        vat,
        subTotal,
      };
    }),

  deletePlan: (z) =>
    set((prev) => {
      const plan = prev.plans.find((p) => p.id === z);
      if (!plan) throw new Error("id does not match");
      const subTotal = prev.total - plan.quantity * plan.rate * plan.validity;
      const vat = 0.1 * subTotal;
      const total = subTotal + vat;
      return {
        plans: prev.plans.filter((p) => p.id !== z),
        subTotal,
        vat,
        total,
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
      console.log(allPlans);
      const subTotal = allPlans.reduce(
        (prev, curr) => prev + curr.rate * curr.quantity,
        0
      );
      const vat = 0.1 * subTotal;
      const total = subTotal + vat;
      console.log(subTotal, vat, total);
      return {
        plans: allPlans,
        subTotal,
        vat,
        total,
      };
    }),
}));

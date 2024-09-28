export type Providers = "THREE" | "EE" | "O2" | "VODAFONE";
const Validity = [1, 3, 6, 12] as const;
export type Region = "UK" | "UK_EU";
export type ValidityString = "30-days" | "3-months" | "6-months" | "12-months";
export type TValidity = (typeof Validity)[number];

export type PlanVariants = {
  [key in TValidity]: {
    id: TValidity;
    validityString: ValidityString;
    rate: number;
  };
};

export interface Plan {
  provider: Providers;
  region: Region;
  type: "Voice_Data" | "SMS";
  data: "unlimited" | number;
  id: string;
  variants: PlanVariants;
  features?: string[];
}

export interface CartItem extends Omit<Plan, "variants"> {
  quantity: number;
  rate: number;
  validity: TValidity;
}
export interface Cart {
  plans: CartItem[];
  subTotal: number;
  vat: number;
  total: number;
}

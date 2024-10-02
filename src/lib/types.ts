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

export type FetchParams =
  | {
      type: "login";
      payload: {
        email: string;
        password: string;
      };
    }
  | {
      type: "register";
      payload: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        mobileNo?: string;
      };
    }
  | {
      type: "2FA";
      payload: {
        otp: string;
      };
    };

export interface UserData {
  token: string;
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
  phoneNumber?: string;
  dateJoined?: string;
}

export class AccountAlreadyExistsError extends Error {}
export class InternalServerError extends Error {}
export class InvalidCredentials extends Error {}
export class InvalidOTP extends Error {}

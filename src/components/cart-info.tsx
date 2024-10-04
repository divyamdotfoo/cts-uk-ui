"use client";
import { useFormik } from "formik";
import { useCart } from "@/lib/store";
import * as Yup from "yup";
import { useUser } from "@/lib/hooks";
import { Label } from "./ui/label";
import { Loader2, Minus, Plus, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { renderPlanProviderIcon } from "./plan-card";
import { Separator } from "./ui/separator";
import { CheckboxField, InputField } from "./formik-fields";
import { fetcher } from "@/lib/fetcher";
import { AccountAlreadyExistsError } from "@/lib/types";
import { toast } from "sonner";
import { useState } from "react";
import { VerifyOtpDialog } from "./verify-otp-dialog";
import { LoginDialog } from "./login-dialog";
export function CartInfo() {
  const { plans } = useCart();
  const { user } = useUser();
  const [isOtpDialogOpen, setOtpDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  const newUserForm = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      phoneNumber: Yup.number().notRequired(),
      email: Yup.string().email().required("Email is required"),
      password: Yup.string()
        .required("Password cannot be empty")
        .min(8, "Password must have atelast 8 characters")
        .matches(/[A-Z]/, {
          excludeEmptyString: true,
          message: "Password must contain atleast one uppercase letter",
        }),
    }),
    isInitialValid: false,
    onSubmit: (data) => {},
  });

  const agreementForm = useFormik({
    initialValues: {
      option1: false,
      option2: false,
      option3: false,
    },
    validationSchema: Yup.object({
      option1: Yup.boolean().oneOf([true]),
      option2: Yup.boolean().oneOf([true]),
      option3: Yup.boolean().oneOf([true]),
    }),
    onSubmit: () => {},
  });

  const validateForms = async () => {
    const [errorsUserForm, errorsRegisterForm] = await Promise.all([
      newUserForm.validateForm(),
      agreementForm.validateForm(),
    ]);

    if (Object.keys(errorsUserForm).length) {
      document.getElementById(Object.keys(errorsUserForm)[0])?.focus();
      return false;
    }
    if (Object.keys(errorsRegisterForm).length) {
      document.getElementById(Object.keys(errorsRegisterForm)[0])?.focus();
      return false;
    }
    return true;
  };

  const proceedCheckout = async () => {
    if (user) {
      const isAgreed = await agreementForm.validateForm();
      if (Object.keys(isAgreed).length) {
        document.getElementById(Object.keys(isAgreed)[0])?.focus();
        return;
      }
    }

    // if user is new
    const isFormValid = await validateForms();
    if (!isFormValid) return;

    // proceeding when form is valid to hit the create new user api
    try {
      setLoading(true);
      const isSuccessfull = await fetcher({
        type: "register",
        payload: {
          email: newUserForm.values.email,
          firstName: newUserForm.values.firstName,
          lastName: newUserForm.values.lastName,
          password: newUserForm.values.password,
          mobileNo: newUserForm.values.phoneNumber ?? "",
        },
      });
      setLoading(false);
      if (isSuccessfull !== true) return;
      setOtpDialog(true);
    } catch (e) {
      setLoading(false);
      if (e instanceof AccountAlreadyExistsError) {
        toast.error("Email already exists.");
        return;
      }
      toast.error("Something went wrong. Please try again later!");
    }
  };

  if (!plans.length)
    return (
      <div className="h-80 w-full flex flex-col items-center gap-4 justify-center">
        <p className=" text-2xl font-gilroySemiBold">Your cart is empty.</p>
        <Link
          href={"/plans"}
          className=" bg-bluePrimary py-2 px-5 rounded-xl shadow-sm hover:bg-blueSecondary text-white"
        >
          Shop now
        </Link>
      </div>
    );
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:gap-0 max-w-6xl mx-auto pt-12 justify-items-center">
      <VerifyOtpDialog
        onOpenChange={setOtpDialog}
        open={isOtpDialogOpen}
        userData={newUserForm.values}
      />
      <div className=" max-w-md">
        <p className=" text-2xl text-gray-900 font-gilroyMedium pb-4">
          Create your account
        </p>
        {user ? (
          <p className=" flex items-center justify-between bg-accentWhite border border-gray-200 p-3 shadow-md shadow-blue-100 rounded-lg">
            <span className=" flex items-center font-gilroyMedium text-gray-800">
              <UserCircle2 className=" text-bluePrimary w-5 h-5 stroke-[1.7px]  mr-2" />
              {"divyam7091@gmail.com"}
            </span>
            <span className="block text-sm font-gilroyMedium text-gray-600">
              Signed in
            </span>
          </p>
        ) : (
          <>
            <div className=" flex items-center mb-10 justify-between shadow-md shadow-blue-100 bg-[#fafbfc] border border-gray-200 p-3 rounded-lg">
              <p className=" font-gilroyMedium">Already have an account?</p>
              <LoginDialog>
                <button className=" px-3 py-1 font-gilroyMedium text-white bg-bluePrimary hover:bg-blueSecondary rounded-lg transition-all">
                  Sign in
                </button>
              </LoginDialog>
            </div>
            <div className=" flex flex-col items-stretch gap-6 w-full">
              <div className=" w-full flex items-center gap-6">
                <div className=" basis-1/2">
                  <Label htmlFor="firstName">First name</Label>
                  <InputField
                    errors={newUserForm.errors}
                    placeholder="John"
                    id="firstName"
                    type="text"
                    name="firstName"
                    onChange={newUserForm.handleChange}
                  />
                </div>
                <div className="basis-1/2">
                  <Label htmlFor="lastName">Last name</Label>
                  <InputField
                    errors={newUserForm.errors}
                    placeholder="Doe"
                    id="lastName"
                    type="text"
                    name="lastName"
                    onChange={newUserForm.handleChange}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <InputField
                  errors={newUserForm.errors}
                  type="text"
                  id="phoneNumber"
                  placeholder="+1 234 567 8900"
                  name="phoneNumber"
                  onChange={newUserForm.handleChange}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <InputField
                  errors={newUserForm.errors}
                  type="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  onChange={newUserForm.handleChange}
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <InputField
                  errors={newUserForm.errors}
                  type="text"
                  id="password"
                  placeholder="*******"
                  name="password"
                  onChange={newUserForm.handleChange}
                  className=" placeholder:text-xl placeholder:tracking-widest placeholder:translate-y-1"
                />
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col items-start gap-3 pt-10">
          <CheckboxField
            name="option1"
            id="option1"
            checked={agreementForm.values.option1}
            onChange={agreementForm.handleChange}
            errors={agreementForm.errors}
          >
            I have an{" "}
            <Link href={"/"} className=" text-blue-700 underline">
              eSIM compatible
            </Link>{" "}
            and{" "}
            <Link href={"/"} className=" text-blue-700 underline">
              network-unlocked
            </Link>{" "}
            device.
          </CheckboxField>
          <CheckboxField
            name="option2"
            id="option2"
            checked={agreementForm.values.option2}
            onChange={agreementForm.handleChange}
            errors={agreementForm.errors}
          >
            I agree to the{" "}
            <Link href={"/"} className=" text-blue-700 underline">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link href={"/"} className=" text-blue-700 underline">
              Privacy Policy
            </Link>
          </CheckboxField>
          <CheckboxField
            name="option3"
            id="option3"
            checked={agreementForm.values.option3}
            onChange={agreementForm.handleChange}
            errors={agreementForm.errors}
          >
            I agree to pay the convenience fee according to the payment gateway.
          </CheckboxField>
          <CheckboxField
            name="term-one"
            onChange={(e) => {
              agreementForm.setValues({
                option1: e.target.checked,
                option2: e.target.checked,
                option3: e.target.checked,
              });
            }}
          >
            By clicking this you agree to all the conditions.
          </CheckboxField>
        </div>
      </div>
      <OrderSummary proceedCheckout={proceedCheckout} loading={loading} />
    </div>
  );
}

function OrderSummary({
  proceedCheckout,
  loading,
}: {
  proceedCheckout: () => void;
  loading: boolean;
}) {
  const { plans, addPlans, deletePlan, toggleQuantity } = useCart();

  return (
    <div className=" w-full flex flex-col items-start">
      <p className="text-2xl font-gilroyMedium pb-4">Order summary</p>
      <div className=" bg-accentWhite py-4 px-8 rounded-lg shadow-md shadow-blue-100 border-gray-100 border w-full">
        <div className=" flex flex-col items-start gap-6">
          {plans.map((p, idx) => (
            <div key={p.id} className=" w-full">
              <div className=" flex items-start justify-between w-full">
                <div className=" flex items-start gap-3">
                  <div className=" translate-y-1">
                    {renderPlanProviderIcon(p.provider)}
                  </div>
                  <div className=" flex flex-col items-start gap-1">
                    <p className="text-2xl font-gilroyMedium">
                      {p.data === "unlimited" ? "Unlimited" : `${p.data}GB`}
                    </p>
                    <p className=" text-sm font-gilroyMedium text-gray-500">
                      Duration: {"30 days"}
                    </p>
                    <p className=" text-sm font-gilroyMedium text-gray-500">
                      Region: {p.region}
                    </p>
                  </div>
                </div>
                <div className=" flex flex-col items-start">
                  <p className=" font-gilroyMedium text-3xl pb-3">
                    £{p.rate.toFixed(2)}
                  </p>
                  <div className=" text-white justify-around flex items-center gap-2 bg-bluePrimary p-1 rounded-lg w-full">
                    <button
                      disabled={p.quantity <= 1}
                      onClick={() => toggleQuantity(p.id, false)}
                      className=" disabled:opacity-50"
                    >
                      <Minus className=" text-inherit w-4 h-4" />
                    </button>
                    <p className=" text-sm">{p.quantity}</p>
                    <button onClick={() => toggleQuantity(p.id, true)}>
                      <Plus className=" text-inherit w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => deletePlan(p.id)}
                    className=" text-xs underline text-black cursor-pointer self-end pt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
              {idx < plans.length - 1 && plans.length > 1 && (
                <Separator className=" bg-gray-200 w-full translate-y-[10px]" />
              )}
            </div>
          ))}
        </div>
      </div>
      <p className=" w-full text-4xl flex items-center justify-between px-6 py-10 font-gilroyMedium">
        <span>Total due</span>{" "}
        <span>
          £
          {plans
            .reduce((acc, curr) => acc + curr.rate * curr.quantity, 0)
            .toFixed(2)}
        </span>
      </p>
      <button
        onClick={proceedCheckout}
        className=" p-2 w-[90%] self-center bg-bluePrimary flex items-center justify-center gap-3 shadow-sm hover:bg-blueSecondary text-lg text-white rounded-lg font-gilroyMedium"
      >
        Proceed to checkout
        {loading && (
          <span>
            <Loader2 className=" w-[18px] h-[18px] text-inherit animate-spin" />
          </span>
        )}
      </button>
    </div>
  );
}

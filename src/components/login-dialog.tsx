import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import { Loader2, X } from "lucide-react";
import { SeparatorInline } from "./ui/separator-inline";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InputField } from "./formik-fields";
import { fetcher } from "@/lib/fetcher";
import { InternalServerError, InvalidCredentials } from "@/lib/types";
import { useUser } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { InputOTP, InputOTPSlot } from "./ui/input-otp";
import { cn } from "@/lib/utils";
import Link from "next/link";
export function LoginDialog({ children }: { children: React.ReactNode }) {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [open, setOpenChange] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [isOtpValid, setOtpValid] = useState(true);

  const { updateUser } = useUser();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      invalid: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
      password: Yup.string().required("Password is required"),
      newPassword: Yup.string()
        .required("Password is required")
        .min(6, "Password should be atleast 6 characters"),
    }),
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: () => {},
  });

  const onOpenChange = (z: boolean) => {
    setOpenChange(z);
    formik.setErrors({});
    setForgotPassword(false);
    setLoading(false);
    setChangePassword(false);
  };

  const login = async () => {
    const errors = await formik.validateForm();
    if (errors.email || errors.password) {
      if (errors.email) document.getElementById("email")?.focus();
      else if (errors.password) document.getElementById("password")?.focus();
      return;
    }
    try {
      setLoading(true);
      const data = (await fetcher({
        type: "login",
        payload: {
          email: formik.values.email,
          password: formik.values.password,
        },
      })) as Record<string, any>;
      setLoading(false);
      updateUser({
        email: data?.data["Email"],
        firstName: data?.data["FirstName"] ?? "",
        lastName: data?.data["LastName"] ?? "",
        token: data["Token"],
        userId: data?.data["UserID"] ?? "",
        dateJoined: "",
        phoneNumber: "",
      });
      onOpenChange(false);
      router.refresh();
    } catch (e) {
      setLoading(false);
      if (e instanceof InvalidCredentials) {
        formik.setErrors({
          email: "Please check your email again",
          password: "Please check your password again",
          invalid: "Invalid credentials",
        });
        return;
      } else {
        formik.setErrors({
          invalid: "Something went wrong",
        });
      }
    }
  };

  const sendOtp = async () => {
    const errors = await formik.validateForm();
    if (errors.email) return;
    try {
      setLoading(true);
      await fetcher({
        type: "reset-password-initiate",
        payload: {
          email: formik.values.email,
        },
      });
      setLoading(false);
      setForgotPassword(false);
      setChangePassword(true);
    } catch (e) {
      setLoading(false);
      if (e instanceof InternalServerError) {
        formik.setErrors({
          invalid: "Something went wrong, please try again later.",
        });
      }
    }
  };

  const handlePasswordChange = async () => {
    const errors = await formik.validateForm();
    if (!otp.length) setOtpValid(false);
    if (errors.email || errors.newPassword) {
      if (errors.email) document.getElementById("email")?.focus();
      else if (errors.newPassword)
        document.getElementById("newPassword")?.focus();
      return;
    }
    try {
      const data = await fetcher({
        type: "change-password",
        payload: {
          email: formik.values.email,
          password: formik.values.newPassword,
          otp,
        },
      });
    } catch (e) {}
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className=" max-w-md">
        <DialogHeader className=" flex flex-col items-center gap-2">
          <DialogTitle>
            <Image
              src={"/logo.png"}
              height={200}
              width={200}
              className=" w-28 h-auto"
              alt="esim cards logo"
            />
          </DialogTitle>
          {forgotPassword ? (
            <DialogDescription className=" text-base px-4 text-center font-gilroyMedium text-gray-600">
              To reset your account password, enter the email you registered
              with.
            </DialogDescription>
          ) : changePassword ? (
            <DialogDescription className=" w-full px-4 text-center text-base font-gilroyMedium text-gray-600">
              An OTP has been sent your registered email.
            </DialogDescription>
          ) : (
            <DialogDescription className=" w-full px-4 font-gilroyMedium text-gray-600">
              <SeparatorInline>Log in with email</SeparatorInline>
            </DialogDescription>
          )}
        </DialogHeader>
        <div className=" flex flex-col gap-3 items-stretch w-full px-4">
          <InputField
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            errors={formik.errors}
            className=" w-full"
          />
          {forgotPassword ? (
            <>
              <button
                onClick={() => setForgotPassword(false)}
                className=" text-sm text-start px-1 text-gray-600 underline hover:text-gray-900 font-gilroyMedium"
              >
                Go back to login
              </button>
            </>
          ) : changePassword ? (
            <>
              <InputField
                placeholder="New Password"
                type="text"
                id="newPassword"
                name="newPassword"
                onChange={formik.handleChange}
                errors={formik.errors}
              />
              <div className=" flex flex-col gap-6  items-center py-4">
                <InputOTP
                  maxLength={4}
                  value={otp}
                  onChange={(val) => setOtp(val)}
                >
                  <InputOTPSlot
                    index={0}
                    className={cn(
                      isOtpValid ? " border-blueSecondary" : " border-red-500"
                    )}
                  />
                  <InputOTPSlot
                    index={1}
                    className={cn(
                      isOtpValid ? " border-blueSecondary" : " border-red-500"
                    )}
                  />
                  <InputOTPSlot
                    index={2}
                    className={cn(
                      isOtpValid ? " border-blueSecondary" : " border-red-500"
                    )}
                  />
                  <InputOTPSlot
                    index={3}
                    className={cn(
                      isOtpValid ? " border-blueSecondary" : " border-red-500"
                    )}
                  />
                </InputOTP>
              </div>
            </>
          ) : (
            <>
              <InputField
                placeholder="Password"
                type="text"
                id="password"
                name="password"
                onChange={formik.handleChange}
                errors={formik.errors}
              />

              <button
                onClick={() => setForgotPassword(true)}
                className=" text-sm text-start px-1 text-gray-600 underline hover:text-gray-900 font-gilroyMedium"
              >
                Forgot your password?
              </button>
            </>
          )}
          {formik.errors && formik.errors["invalid"] && (
            <p className=" text-sm text-red-400 text-center translate-y-3">
              {formik.errors["invalid"] ?? ""}
            </p>
          )}

          <button
            className=" bg-bluePrimary hover:bg-blueSecondary p-2 font-gilroySemiBold w-full rounded-3xl mt-6 transition-all shadow-sm text-white disabled:opacity-60 flex items-center justify-center gap-2"
            onClick={
              forgotPassword
                ? sendOtp
                : changePassword
                ? handlePasswordChange
                : login
            }
          >
            {forgotPassword
              ? "RESET PASSWORD"
              : changePassword
              ? "CHANGE PASSWORD"
              : "SIGN IN"}{" "}
            {loading && (
              <span>
                <Loader2 className=" text-inherit animate-spin w-4 h-4" />
              </span>
            )}
          </button>
          <Link
            href={"/register"}
            className=" text-center pt-5 text-gray-700 text-sm"
          >
            New to our platform?{" "}
            <span className=" text-bluePrimary underline">Sign up</span>
          </Link>
        </div>

        {/* close */}
        <DialogClose className="absolute right-2 top-2 rounded-sm bg-transparent hover:bg-gray-100 p-2 transition-all focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

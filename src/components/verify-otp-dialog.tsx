import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { InputOTP, InputOTPSlot } from "./ui/input-otp";
import { fetcher } from "@/lib/fetcher";
import { InvalidOTP, UserData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useUser } from "@/lib/hooks";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

export function VerifyOtpDialog({
  onOpenChange,
  open,
  userData,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  userData: Omit<UserData, "token" | "userId">;
}) {
  const [otp, setOtp] = useState("");
  const [isValid, setValid] = useState(true);
  const { updateUser } = useUser();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const isValid = (await fetcher({
        type: "2FA",
        payload: { otp },
      })) as Record<string, any>;
      setLoading(false);
      const userId = isValid?.data?.UserID as string;
      const token = isValid.Token as string;

      updateUser({
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        userId,
        token,
      });

      onOpenChange(false);
      router.push("/profile");
    } catch (e) {
      if (e instanceof InvalidOTP) {
        setLoading(false);
        setValid(false);
      }
    }
  };
  return (
    <Dialog onOpenChange={onOpenChange} open={open}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className=" font-gilroyMedium"
      >
        <DialogHeader className=" w-full flex flex-col items-center">
          <DialogTitle className=" text-2xl font-gilroySemiBold">
            Verify Your Email Address
          </DialogTitle>
          <DialogDescription className=" text-center">
            Please enter the 4-digit code we sent to <br />
            <span className=" underline text-bluePrimary decoration-bluePrimary">
              {userData.email.length > 0 ? `${userData.email}` : "your email."}
            </span>
          </DialogDescription>
        </DialogHeader>
        <div className=" flex flex-col gap-6  items-center py-4">
          <InputOTP maxLength={4} value={otp} onChange={(val) => setOtp(val)}>
            <InputOTPSlot
              index={0}
              className={cn(
                isValid ? " border-blueSecondary" : " border-red-500"
              )}
            />
            <InputOTPSlot
              index={1}
              className={cn(
                isValid ? " border-blueSecondary" : " border-red-500"
              )}
            />
            <InputOTPSlot
              index={2}
              className={cn(
                isValid ? " border-blueSecondary" : " border-red-500"
              )}
            />
            <InputOTPSlot
              index={3}
              className={cn(
                isValid ? " border-blueSecondary" : " border-red-500"
              )}
            />
          </InputOTP>

          <button
            className={cn(
              "bg-bluePrimary flex items-center justify-center gap-2 text-white relative rounded-xl shadow-sm p-2 w-full disabled:opacity-80 max-w-72 self-center",
              !isValid &&
                "after:content-['Invalid_OTP_please_check_again'] after:absolute after:-bottom-6 after:left-10 after:text-red-500 after:text-sm after:mt-1"
            )}
            disabled={otp.length !== 4}
            onClick={handleSubmit}
          >
            Continue{" "}
            {loading && (
              <span>
                <Loader2 className=" animate-spin w-4 h-4 text-white" />
              </span>
            )}
          </button>
        </div>
        <DialogClose>
          <span className=" text-xs text-red-500 font-inter underline">
            Cancel purchase
          </span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

import { FormikErrors } from "formik";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export function InputField({
  errors,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  errors: FormikErrors<Record<string, string>>;
}) {
  const isError =
    !!inputProps.id &&
    !!errors[inputProps.id] &&
    typeof errors[inputProps.id] === "string" &&
    !!errors[inputProps.id]?.length;

  return (
    <div>
      <Input
        {...inputProps}
        className={cn(
          "",
          isError
            ? " ring-offset-red-400 ring-red-400 ring-offset-1 ring-1"
            : "ring-offset-blue-800 focus-visible:ring-blue-800 focus-visible:ring-offset-1 focus-visible:ring-1"
        )}
      />
      <p
        className={cn(
          "text-red-400 font-gilroyMedium text-sm",
          isError ? "visible" : "invisible"
        )}
      >
        {errors[inputProps.id!] ?? "error"}
      </p>
    </div>
  );
}

interface CheckboxFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  errors?: FormikErrors<Record<string, string>>;
}

export function CheckboxField({
  children,
  errors,
  ...inputProps
}: CheckboxFieldProps) {
  const isError =
    typeof errors === "object" &&
    !!inputProps.id &&
    !!errors[inputProps.id] &&
    typeof errors[inputProps.id] === "string" &&
    !!errors[inputProps.id]?.length;

  return (
    <div className=" flex md:items-center items-start  gap-2">
      <label className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          className={cn(
            "peer h-4 w-4 cursor-pointer transition-all translate-y-[2px] md:translate-y-0 appearance-none rounded shadow hover:shadow-md border  checked:bg-bluePrimary",
            isError ? "border-red-700" : "border-bluePrimary"
          )}
          {...inputProps}
        />
        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <p className=" font-gilroyMedium text-sm text-gray-800 ">{children}</p>
    </div>
  );
}

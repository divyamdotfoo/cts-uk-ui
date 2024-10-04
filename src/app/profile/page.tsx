"use client";

import { Underline } from "@/components/ui/underline";
import { useUser } from "@/lib/hooks";
import { capitalize } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, loading, logout } = useUser();
  const router = useRouter();
  if (loading)
    return (
      <div className=" w-full h-96 flex items-center justify-center border-t border-gray-200">
        <Loader2 className=" text-bluePrimary w-10 h-10 animate-spin" />
      </div>
    );

  if (!user) {
    setTimeout(() => {
      router.replace("/");
    }, 800);
    return (
      <div className=" w-full h-96 flex items-center justify-center font-gilroySemiBold text-3xl text-bluePrimary">
        Not logged in. <br />
        Redirecting to home page.
      </div>
    );
  }
  return (
    <div className=" pt-4 pb-48 px-4 flex flex-col gap-12 items-center border-t border-gray-200 max-w-4xl mx-auto">
      <Underline
        className=" text-bluePrimary font-gilroySemiBold text-2xl"
        color="yellow"
        iterations={1}
      >
        Grateful to Have You!
      </Underline>
      <div className=" flex md:items-start flex-col md:flex-row items-center gap-12 w-full">
        <Image
          src={"/avatar.webp"}
          className=" rounded-full w-48 h-48 shadow-sm border border-gray-400"
          width={1000}
          height={1000}
          alt="avatar 3d illustration"
          loading="eager"
        />
        <div className=" grid grid-cols-2 gap-4 w-full">
          <div>
            <p className=" font-inter font-medium text-gray-600 pb-1 px-1 text-xs">
              Firstname
            </p>
            <p className=" bg-gray-50 shadow-sm rounded-xl border border-gray-300 py-3 sm:px-4 px-2 text-sm sm:text-base font-gilroyMedium text-gray-900">
              {capitalize(user?.firstName)}
            </p>
          </div>
          <div>
            <p className=" font-inter font-medium text-gray-600 pb-1 px-1 text-xs">
              Lastname
            </p>
            <p className=" bg-gray-50 shadow-sm rounded-xl border border-gray-300 py-3 sm:px-4 px-2 text-sm sm:text-base font-gilroyMedium text-gray-900">
              {capitalize(user?.lastName)}
            </p>
          </div>
          <div>
            <p className=" font-inter font-medium text-gray-600 pb-1 px-1 text-xs">
              Email
            </p>
            <p className=" bg-gray-50 shadow-sm rounded-xl border border-gray-300 py-3 sm:px-4 px-2 text-sm sm:text-base font-gilroyMedium text-gray-900">
              {user?.email}
            </p>
          </div>
          <div>
            <p className=" font-inter font-medium text-gray-600 pb-1 px-1 text-xs">
              Mobile Number
            </p>
            <p className=" bg-gray-50 shadow-sm rounded-xl border border-gray-300 py-3 sm:px-4 px-2 text-sm sm:text-base font-gilroyMedium text-gray-900">
              {"+44 XXXXXX"}
            </p>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-6">
        <p>You haven't made any purchases yet.</p>
        <button
          className=" bg-red-500 text-white py-2 px-6 hover:bg-red-600 transition-all shadow-sm hover:shadow-md rounded-xl"
          onClick={logout}
        >
          Log out
        </button>
      </div>
    </div>
  );
}

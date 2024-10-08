"use client";
import {
  ArrowRightFromLine,
  ChevronDown,
  MenuIcon,
  ShoppingCart,
  UserCircle2Icon,
  X,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/lib/store";
import { useUser } from "@/lib/hooks";
import { LoginDialog } from "./login-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);
  return (
    <div className=" md:hidden w-full px-4 py-2 flex items-center justify-between">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button>
            {open ? (
              <X className=" w-9 h-9 text-black" />
            ) : (
              <MenuIcon className=" w-9 h-9 text-black" />
            )}
          </button>
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className=" top-[70px] font-gilroyMedium border-none inset-x-0 w-full bottom-0 bg-white text-black py-12 px-4"
        >
          <div className=" flex flex-col items-start gap-6 text-xl w-full">
            <HamLink closeMenu={closeMenu} href={"/plans"}>
              Shop Plans
              <ChevronDown className=" w-4 h-4" />
            </HamLink>
            <Separator className=" bg-gray-200" />
            <HamLink closeMenu={closeMenu} href={"/blogs"}>
              Blogs
            </HamLink>
            <Separator className=" bg-gray-200" />
            <HamLink closeMenu={closeMenu} href={"/about-us"}>
              About Us
            </HamLink>
            <Separator className=" bg-gray-200" />
            <HamLink closeMenu={closeMenu} href={"/about-us"}>
              Help center
            </HamLink>
            <Separator className=" bg-gray-200" />
            <LoginDialog>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  closeMenu();
                }}
                className="underline decoration-white w-full hover:decoration-inherit transition-all flex items-center gap-2"
              >
                Login
              </button>
            </LoginDialog>
          </div>
        </SheetContent>
      </Sheet>
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt="company logo"
          className=" h-14 w-auto"
        />
      </Link>
      <ShowCartBtn />
    </div>
  );
}

function HamLink({
  children,
  href,
  closeMenu,
  className,
}: {
  children: React.ReactNode;
  href: string;
  closeMenu: () => void;
  className?: string;
}) {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        closeMenu();
        router.push(href);
      }}
      className={cn(
        "underline decoration-white w-full hover:decoration-inherit transition-all flex items-center gap-2 ",
        className
      )}
    >
      {children}
    </button>
  );
}

export function ShowCartBtn() {
  const plans = useCart((s) => s.plans);
  const router = useRouter();
  return (
    <button
      onClick={() => {
        router.push("/cart");
      }}
      className=" relative"
    >
      <ShoppingCart className=" w-9 h-9 md:w-6 md:h-6 text-black stroke-[1.4px] hover:text-bluePrimary focus:text-bluePrimary" />
      {plans.length > 0 && (
        <span className=" w-4 h-4 rounded-full text-[8px] flex items-center justify-center bg-bluePrimary text-white font-gilroyMedium absolute -right-2 -top-3">
          {plans.length}
        </span>
      )}
    </button>
  );
}

export function ShowUserProfile() {
  const { user } = useUser();
  if (!user)
    return (
      <LoginDialog>
        <button className=" font-gilroyMedium flex items-center gap-2 p-2 rounded-xl border border-gray-300 hover:border-gray-400 text-sm">
          Log in <ArrowRightFromLine className=" w-4 h-4 stroke-[1.4px]" />
        </button>
      </LoginDialog>
    );

  return (
    <TooltipProvider>
      <Tooltip delayDuration={300}>
        <TooltipTrigger>
          <Link href="/profile">
            <UserCircle2Icon className=" w-7 h-7 text-black hover:text-bluePrimary transition-all stroke-[1.2px]" />
          </Link>
        </TooltipTrigger>
        <TooltipContent className=" bg-white text-xs border-gray-300 font-gilroyMedium">
          Your profile
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

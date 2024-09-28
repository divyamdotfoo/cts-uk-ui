"use client";
import { ChevronDown, MenuIcon, ShoppingCart, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useCart } from "@/lib/store";

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
            <HamLink closeMenu={closeMenu} href={"/hello"}>
              Shop Plans
              <ChevronDown className=" w-4 h-4" />
            </HamLink>
            <Separator className=" bg-gray-200" />
            <HamLink closeMenu={closeMenu} href={"/"}>
              Networks
              <ChevronDown className=" w-4 h-4" />
            </HamLink>
            <Separator className=" bg-gray-200" />
            <HamLink closeMenu={closeMenu} href={"/"}>
              Coverage
            </HamLink>
            <Separator className=" bg-gray-200" />

            <HamLink closeMenu={closeMenu} href={"/"}>
              Features
            </HamLink>
            <Separator className=" bg-gray-200" />
            <HamLink closeMenu={closeMenu} href={"/"}>
              Blogs
            </HamLink>
            <Separator className=" bg-gray-200" />
            <HamLink closeMenu={closeMenu} href={"/"}>
              Why Us
            </HamLink>
            <Separator className=" bg-gray-200" />
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
      <ShoppingCart className=" w-9 h-9 md:w-5 md:h-5 text-black hover:text-bluePrimary focus:text-bluePrimary" />
      {plans.length > 0 && (
        <span className=" w-4 h-4 rounded-full text-[8px] flex items-center justify-center bg-bluePrimary text-white font-gilroyMedium absolute -right-2 -top-3">
          {plans.length}
        </span>
      )}
    </button>
  );
}

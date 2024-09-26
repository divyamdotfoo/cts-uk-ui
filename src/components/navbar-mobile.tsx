"use client";
import { ChevronDown, MenuIcon, ShoppingCart, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      <button>
        <ShoppingCart className=" w-9 h-9 text-black hover:text-bluePrimary focus:text-bluePrimary" />
      </button>
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

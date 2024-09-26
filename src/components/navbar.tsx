import { ChevronDown, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from "./navbar-mobile";
export function Navbar() {
  return (
    <>
      <div className=" hidden w-full max-w-[1440px] mx-auto py-4 md:flex items-center justify-between lg:px-12 md:px-8 2xl:px-0">
        <Image
          src={"/logo.png"}
          width={200}
          height={200}
          alt=""
          className=" h-[40px] w-auto"
        />
        <div className=" flex items-center gap-8 text-sm font-semibold text-black">
          <Link
            className="underline flex items-center gap-1 decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Shop Plans
            <ChevronDown className=" w-4 h-4" />
          </Link>
          <Link
            className="underline flex items-center gap-1 decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Networks
            <ChevronDown className=" w-4 h-4" />
          </Link>
          <Link
            className="underline flex items-center gap-1 decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Coverage
          </Link>

          <Link
            className="underline decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Features
          </Link>
          <Link
            className="underline decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Blogs
          </Link>
          <Link
            className="underline decoration-white hover:decoration-inherit transition-all "
            href={"/"}
          >
            Why Us
          </Link>
          <ShoppingCart className=" w-5 h-5 hover:scale-105 cursor-pointer " />
        </div>
      </div>
      <NavbarMobile />
    </>
  );
}

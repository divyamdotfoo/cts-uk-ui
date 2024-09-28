import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavbarMobile, ShowCartBtn } from "./navbar-mobile";
export function Navbar() {
  return (
    <>
      <div className=" hidden border-b-[2px] border-gray-200 w-full max-w-[1440px] mx-auto py-4 md:flex items-center justify-between lg:px-12 md:px-8 2xl:px-0">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            alt=""
            className=" h-[40px] w-auto"
          />
        </Link>
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
          <ShowCartBtn />
        </div>
      </div>
      <NavbarMobile />
    </>
  );
}

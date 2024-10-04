import Image from "next/image";
import Link from "next/link";
import { NavbarMobile, ShowCartBtn, ShowUserProfile } from "./navbar-mobile";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { EE, O2, Three, Vodafone } from "./svgs";
import { ChevronDown } from "lucide-react";
export function Navbar() {
  return (
    <>
      <div className=" hidden w-full max-w-[1440px] mx-auto py-2 md:flex items-center justify-between lg:px-12 md:px-8 2xl:px-0">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={200}
            height={200}
            alt=""
            className=" h-[40px] w-auto"
          />
        </Link>
        <div className=" flex items-center gap-8 font-gilroyMedium text-black text-sm">
          <HoverCard openDelay={0}>
            <HoverCardTrigger asChild>
              <Link
                className="underline flex items-center gap-1 decoration-white hover:decoration-inherit hover:text-bluePrimary transition-all "
                href={"/plans"}
              >
                Shop Plans
                <ChevronDown className=" w-3 h-3 text-inherit" />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="bg-gray-50 font-gilroyMedium  w-60 flex flex-col items-start gap-3 text-black border-gray-300">
              <Link
                href={"/plans/three"}
                className=" flex items-center gap-2 w-full underline hover:text-bluePrimary decoration-transparent hover:decoration-bluePrimary"
              >
                <span>
                  <Three className=" w-6 h-6" />
                </span>
                <span>Shop Three Plans</span>
              </Link>
              <Link
                href={"/plans/ee"}
                className=" flex items-center gap-2 w-full underline hover:text-bluePrimary decoration-transparent hover:decoration-bluePrimary"
              >
                <span>
                  <EE className=" w-6 h-6" />
                </span>
                <span>Shop EE Plans</span>
              </Link>
              <Link
                href={"/plans/o2"}
                className=" flex items-center translate-x-1 gap-2 w-full underline hover:text-bluePrimary decoration-transparent hover:decoration-bluePrimary"
              >
                <span>
                  <O2 className=" w-5 h-5" />
                </span>
                <span>Shop O2 Plans</span>
              </Link>
              <Link
                href={"/plans/vodafone"}
                className=" translate-x-1 flex items-center gap-2 w-full underline hover:text-bluePrimary decoration-transparent hover:decoration-bluePrimary"
              >
                <span className=" w-5 h-5">
                  <Vodafone />
                </span>
                <span>Shop Vodafone Plans</span>
              </Link>
            </HoverCardContent>
          </HoverCard>

          <Link
            className="underline decoration-white hover:decoration-inherit hover:text-bluePrimary transition-all "
            href={"/blogs"}
          >
            Blogs
          </Link>
          <Link
            className="underline flex items-center gap-1 decoration-white hover:decoration-inherit hover:text-bluePrimary transition-all "
            href={"https://support.esimcards.co.uk/"}
            target="_blank"
          >
            Help center
          </Link>

          <Link
            className="underline decoration-white hover:decoration-inherit hover:text-bluePrimary transition-all "
            href={"/about-us"}
          >
            About Us
          </Link>
        </div>
        <div className=" flex items-center gap-6 border-red-400">
          <ShowCartBtn />
          <ShowUserProfile />
        </div>
      </div>
      <NavbarMobile />
    </>
  );
}

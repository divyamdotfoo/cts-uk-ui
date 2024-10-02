import Image from "next/image";
import Link from "next/link";
import { NavbarMobile, ShowCartBtn, ShowUserProfile } from "./navbar-mobile";
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
          <Link
            className="underline flex items-center gap-1 decoration-white hover:decoration-inherit hover:text-bluePrimary transition-all "
            href={"/plans"}
          >
            Shop Plans
          </Link>
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

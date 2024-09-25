import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className=" bg-white pt-10">
      <div className=" max-w-5xl grid grid-cols-4 mx-auto ">
        <Image
          src="/logo.png"
          width={200}
          height={200}
          alt="logo"
          className="w-28"
        />
        <div className=" flex flex-col items-start gap-4">
          <p className=" font-semibold text-sm">Links</p>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Data Protection - GDPR
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Consumer Rights Act 2015
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Cookie Law
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            E-commerce Regulations
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Accessibility
          </Link>
        </div>
        <div className=" flex flex-col items-start gap-4">
          <p className=" font-semibold text-sm">Menu</p>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Home
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            About Us
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Blogs
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Terms And Conditions
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Refund & Return Policy
          </Link>
          <Link href={""} className="text-xs text-gray-900 opacity-80">
            Privacy Policy
          </Link>
        </div>
        <div className=" flex flex-col items-center gap-4 ">
          <p className=" font-semibold text-sm">Contact</p>
          <p className=" text-center text-xs text-gray-900 opacity-80">
            Airhub Systems <br /> 27 Old Gloucester St London WC1N 3AX, <br />{" "}
            UK <br /> Email - support@airhubsystems.co.uk
          </p>
        </div>
      </div>
      <p className=" text-center py-6 text-xs font-medium text-gray-900 opacity-60">
        © airhubsystems 2024
      </p>
    </div>
  );
}

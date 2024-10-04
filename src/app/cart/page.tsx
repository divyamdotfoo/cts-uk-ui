import { CartInfo } from "@/components/cart-info";
import { Underline } from "@/components/ui/underline";
import Image from "next/image";

export default function CartPage() {
  return (
    <div className="border-t-[2px] border-gray-200">
      <div className=" max-w-7xl  mx-auto pb-10 pt-5 px-4">
        <h2 className=" font-gilroyBold text-4xl text-center text-bluePrimary ">
          Your eSIM journey begins{" "}
          <Underline
            iterations={1}
            color="#facc15"
            type="underline"
            strokeWidth={2}
          >
            NOW!
          </Underline>
        </h2>
        <CartInfo />
      </div>
      <div className="w-full bg-bluePrimary px-8 pt-8 pb-12 mt-6">
        <p className=" text-center pb-10 text-white text-3xl font-gilroySemiBold">
          Checkout the perks of going digital
        </p>
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-3 lg:gap-0 text-center max-w-5xl w-full mx-auto text-white font-gilroyMedium text-lg">
          <div className=" flex flex-col items-center gap-2">
            <Image
              src={"/svgs/easy-setup.svg"}
              width={100}
              height={100}
              alt="svg"
              className=" max-w-10 h-auto"
            />
            <p>Easy setup</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <Image
              src={"/svgs/eco-friendly.svg"}
              width={100}
              height={100}
              alt="svg"
              className=" max-w-10 h-auto"
            />
            <p>Eco friendly</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <Image
              src={"/svgs/instant-activation.svg"}
              width={100}
              height={100}
              alt="svg"
              className=" max-w-10 h-auto"
            />
            <p>Instant activation</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <Image
              src={"/svgs/roam-free.svg"}
              width={100}
              height={100}
              alt="svg"
              className=" max-w-10 h-auto"
            />
            <p>Roam free</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <Image
              src={"/svgs/security.svg"}
              width={100}
              height={100}
              alt="svg"
              className=" max-w-10 h-auto"
            />
            <p>Enhanced security</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <Image
              src={"/svgs/rocket.svg"}
              width={100}
              height={100}
              alt="svg"
              className=" max-w-10 h-auto"
            />
            <p>Future Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
}

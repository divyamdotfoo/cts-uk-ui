import { CartInfo } from "@/components/cart-info";
import { Underline } from "@/components/underline-wrapper";

export default function CartPage() {
  return (
    <div className=" max-w-7xl border-t-[2px] border-gray-200 mx-auto pb-10 pt-5 px-4">
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
  );
}

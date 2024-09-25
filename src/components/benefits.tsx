import { DollarSign, Globe, ShieldCheck } from "lucide-react";
import { NewsLetter } from "./email";

export function Benefits() {
  return (
    <div className=" bg-accentSection w-full py-16">
      <div className=" max-w-6xl pb-12 mx-auto w-full grid grid-cols-4 gap-8 text-white text-center">
        <div className=" bg-gradient-to-br gap-4 flex flex-col items-center rounded-md shadow-sm px-4 py-8  from-[#17456B] to-[#2C87D1]">
          <div className=" flex flex-col items-center gap-4">
            <ShieldCheck className=" w-10 h-10 text-white" />
            <p className=" font-gilroyBold text-base text-center">
              SECURE PAYMENT
            </p>
          </div>
          <p className=" font-inter text-xs">
            Enjoy peace of mind with our robust payment security. We ensure all
            transactions are safeguarded, utilizing advanced encryption to
            protect against any threats. Your financial details are always kept
            confidential and secure, reflecting our dedication to your safety.
          </p>
        </div>
        <div className=" bg-gradient-to-br gap-4 flex flex-col items-center  rounded-md shadow-sm px-4 py-8 from-[#16A3B2] to-[#17456B]">
          <div className=" flex flex-col items-center gap-4">
            <Globe className=" w-10 h-10 text-white" />
            <p className=" font-gilroyBold text-base ">
              LOCAL GEOGRAPHIC NUMBER
            </p>
          </div>
          <p className=" font-inter text-xs ">
            Enjoy peace of mind with our robust payment security. We ensure all
            transactions are safeguarded, utilizing advanced encryption to
            protect against any threats. Your financial details are always kept
            confidential and secure, reflecting our dedication to your safety.
          </p>
        </div>
        <div className=" bg-gradient-to-br gap-4 flex flex-col items-center rounded-md shadow-sm py-8 from-[#17456B] to-[#2C87D1]">
          <div className=" flex flex-col items-center gap-4">
            <p className=" flex items-center justify-center  rounded-md px-2 py-[2px] bg-white text-[#17456bcf] font-gilroyBold ">
              30
            </p>
            <p className=" font-gilroyBold text-base px-2 ">
              30-Day Refund Guarantee
            </p>
          </div>
          <p className=" font-inter text-xs px-4 ">
            Enjoy peace of mind with our robust payment security. We ensure all
            transactions are safeguarded, utilizing advanced encryption to
            protect against any threats. Your financial details are always kept
            confidential and secure, reflecting our dedication to your safety.
          </p>
        </div>
        <div className=" bg-gradient-to-br gap-4 flex flex-col items-center rounded-md shadow-sm px-4 py-8 from-[#16A3B2] to-[#17456B]">
          <div className=" flex flex-col items-center gap-4">
            <div className=" w-9 rounded-full p-1 h-9 flex items-center justify-center bg-white">
              <DollarSign className=" w-full h-full text-[#16A3B2]" />
            </div>
            <p className=" font-gilroyBold text-base">AFFORDABLE PLANS</p>
          </div>
          <p className=" font-inter text-xs ">
            Enjoy peace of mind with our robust payment security. We ensure all
            transactions are safeguarded, utilizing advanced encryption to
            protect against any threats. Your financial details are always kept
            confidential and secure, reflecting our dedication to your safety.
          </p>
        </div>
      </div>
      <div className=" bg-white rounded-lg py-6 px-6 text-bluePrimary max-w-6xl mx-auto">
        <p className=" font-semibold text-lg pb-4">Why Choose Us? ❤️</p>
        <p className=" tracking-wide text-sm">
          Choose us for the best eSIM experience. Our seamless platform makes
          purchasing, activating, and managing your eSIM easy, ensuring instant
          connectivity. We offer affordable plans, top-notch security, and local
          geographic numbers to keep you connected like a local. With
          exceptional customer service and a 30-day money-back guarantee, your
          satisfaction is our priority. Whether for personal or professional
          use, our reliable and high-quality eSIM solutions fulfill all your
          connectivity needs. Experience unmatched convenience with our prepaid
          eSIM UK. Enjoy the ultimate convenience with our prepaid eSIM UK.
        </p>
      </div>
      <NewsLetter />
    </div>
  );
}

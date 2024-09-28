"use client";
import { DollarSign, Globe, ShieldCheck } from "lucide-react";
import { NewsLetter } from "./email";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function Benefits() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <div className="w-full md:py-14 py-10 px-6 xl:px-0">
      <div className="max-w-6xl pb-12 mx-auto">
        <Carousel
          opts={{
            loop: true,
          }}
          setApi={setApi}
          className=" px-8 sm:px-10 md:px-2 xl:px-0 mx-auto w-full text-white text-center"
        >
          <CarouselContent className="">
            <CarouselItem className=" xl:basis-1/4 md:basis-1/3 sm:basis-1/2">
              <div className=" bg-gradient-to-br gap-4 flex flex-col items-center rounded-md shadow-sm px-4 py-8  from-[#17456B] to-[#2C87D1]">
                <div className=" flex flex-col items-center gap-4">
                  <ShieldCheck className=" w-10 h-10 text-white" />
                  <p className=" font-gilroyBold text-base text-center">
                    SECURE <br className="xl:hidden" /> PAYMENT
                  </p>
                </div>
                <p className="font-inter max-w-64 text-xs">
                  Enjoy peace of mind with our robust payment security. We
                  ensure all transactions are safeguarded, utilizing advanced
                  encryption to protect against any threats. Your financial
                  details are always kept confidential and secure, reflecting
                  our dedication to your safety.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className=" xl:basis-1/4 md:basis-1/3 sm:basis-1/2">
              <div className=" bg-gradient-to-br gap-4 flex flex-col items-center  rounded-md shadow-sm px-4 py-8 from-[#16A3B2] to-[#17456B]">
                <div className=" flex flex-col items-center gap-4">
                  <Globe className=" w-10 h-10 text-white" />
                  <p className=" font-gilroyBold text-base ">
                    LOCAL GEOGRAPHIC <br className="xl:hidden" /> NUMBER
                  </p>
                </div>
                <p className=" font-inter max-w-64 text-xs ">
                  Enjoy peace of mind with our robust payment security. We
                  ensure all transactions are safeguarded, utilizing advanced
                  encryption to protect against any threats. Your financial
                  details are always kept confidential and secure, reflecting
                  our dedication to your safety.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className=" xl:basis-1/4 md:basis-1/3 sm:basis-1/2">
              <div className=" bg-gradient-to-br gap-4 flex flex-col items-center rounded-md shadow-sm py-8 from-[#17456B] to-[#2C87D1]">
                <div className=" flex flex-col items-center gap-4">
                  <p className=" flex items-center justify-center  rounded-md w-10 h-10 bg-white text-[#17456bcf] font-gilroyBold ">
                    30
                  </p>
                  <p className=" font-gilroyBold text-base px-2 ">
                    30-Day Refund
                    <br className="xl:hidden" /> Guarantee
                  </p>
                </div>
                <p className=" font-inter max-w-64 text-xs px-4 ">
                  Enjoy peace of mind with our robust payment security. We
                  ensure all transactions are safeguarded, utilizing advanced
                  encryption to protect against any threats. Your financial
                  details are always kept confidential and secure, reflecting
                  our dedication to your safety.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem className=" xl:basis-1/4 md:basis-1/3 sm:basis-1/2">
              <div className=" bg-gradient-to-br gap-4 flex flex-col items-center rounded-md shadow-sm px-4 py-8 from-[#16A3B2] to-[#17456B]">
                <div className=" flex flex-col items-center gap-4">
                  <div className=" w-9 rounded-full p-1 h-9 flex items-center justify-center bg-white">
                    <DollarSign className=" w-full h-full text-[#16A3B2]" />
                  </div>
                  <p className=" font-gilroyBold text-base">
                    AFFORDABLE <br className="xl:hidden" /> PLANS
                  </p>
                </div>
                <p className=" font-inter max-w-64 text-xs ">
                  Enjoy peace of mind with our robust payment security. We
                  ensure all transactions are safeguarded, utilizing advanced
                  encryption to protect against any threats. Your financial
                  details are always kept confidential and secure, reflecting
                  our dedication to your safety.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className=" xl:hidden flex items-center justify-between max-w-xs mx-auto pt-4">
            <CarouselPrevious />
            <p className=" flex items-center gap-2">
              {[1, 1, 1, 1].map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "w-3 h-3 rounded-full",
                    i + 1 === current ? "bg-bluePrimary" : "bg-gray-300 "
                  )}
                ></span>
              ))}
            </p>
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

import { AboutUsContentTabs } from "@/components/about-us-tabs";
import { Lightbulb, RadioTower, Send, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const blogThumbnails = [
    {
      link: "",
      title: "Avoiding Roaming Charges Made Easy",
      description:
        "Traveling across the UK and Europe is a dream come true for many adventurers. Yet, amidst the enchanting castles",
      thumbnail: "/blog1.webp",
      Icon: RadioTower,
    },
    {
      link: "",
      title: "Plans For UK eSIM & UK+Europe",
      description:
        "In a world where connectivity reigns supreme, imagine stepping off the plane in the vibrant heart of London or the",
      thumbnail: "/blog2.webp",
      Icon: Send,
    },
    {
      link: "",
      title: "Best Modern Travel Tips",
      description:
        "Imagine this: you're landing at Heathrow, the bustling hub of London, and the first thing you want to do is share your",
      thumbnail: "/blog3.webp",
      Icon: Lightbulb,
    },
    {
      link: "",
      title: "Top eSIM Provider",
      description:
        "Same an quit most an. Admitting an mr disposing sportsmen. Tried on cause no spoil arise plate. Longer ladies valley.",
      thumbnail: "/blog4.webp",
      Icon: Smartphone,
    },
  ];
  return (
    <div className=" w-full">
      <div
        className=" w-full py-10"
        style={{
          backgroundImage: "url('/about-bg.webp')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
        }}
      >
        <div className=" max-w-4xl mx-auto text-white text-center px-4">
          <h1 className=" font-gilroyBold text-4xl pb-10">
            All about eSIM Cards
          </h1>
          <h2 className=" font-gilroyMedium pb-6 text-sm md:text-base tracking-wide leading-[1.7]">
            eSIM Cards brand of{" "}
            <Link
              href={"https://www.airhubapp.com/"}
              target="_blank"
              className=" underline tracking-wide"
            >
              Airhub Systems
            </Link>{" "}
            and we are dedicated to revolutionizing the way you stay connected.
            As a leading provider of eSIM technology, we offer seamless and
            innovative solutions that cater to the needs of modern travelers,
            business professionals, and tech enthusiasts. Our mission is to
            provide hassle-free, instant connectivity, wherever you are in the
            world.
          </h2>
        </div>
      </div>
      <div className=" px-4">
        <AboutUsContentTabs />
        <div
          className=" w-full h-96 max-w-6xl mx-auto flex flex-col gap-12 items-center pt-16 pb-24"
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "radial-gradient(circle, #eee 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
        >
          <div className=" flex flex-col items-center gap-3">
            <p className=" text-xs font-inter font-semibold text-bluePrimary">
              Fresh from Our Blog
            </p>
            <p className=" text-4xl font-gilroyBold text-black text-center">
              Check Out Our Latest Blogs
            </p>
          </div>
          <div className=" grid md:grid-cols-4 grid-cols-2  gap-2 max-w-4xl mx-auto flex-wrap">
            {blogThumbnails.map((b) => (
              <div className=" flex flex-col items-center gap-2">
                <div className=" w-8 h-8 rounded-full p-2 flex items-center justify-center bg-bluePrimary text-white">
                  {<b.Icon className=" text-inherit" />}
                </div>
                <Link
                  href={b.link}
                  className=" border border-gray-200 hover:border-gray-300 transition-all hover:shadow-md "
                >
                  <Image
                    src={b.thumbnail}
                    alt=""
                    width={400}
                    height={400}
                    className=" w-full h-28"
                  />
                  <div className=" p-2 flex flex-col gap-2 items-center text-center bg-white">
                    <p className=" text-xl text-gray-800 font-gilroyBold">
                      {b.title}
                    </p>
                    <p className=" text-gray-600 font-gilroyMedium text-sm">
                      {b.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className=" max-w-5xl justify-center w-full py-32 mx-auto grid md:grid-cols-2 gap-10 grid-cols-1 items-center ">
          <Image
            src={"/esim-illustration.webp"}
            height={400}
            width={400}
            alt=""
            className=" w-[90%] h-auto"
          />
          <div>
            <p className=" text-bluePrimary font-inter text-sm font-semibold pb-3">
              About our eSIM
            </p>

            <p className=" font-gilroyBold text-gray-700 text-4xl pb-6">
              What We Offer
            </p>
            <p className=" text-gray-500 font-inter font-medium text-sm tracking-wide">
              <span className=" pb-4 block">
                At eSIM Cards, subsidiary of Airhub Systems, we are dedicated to
                revolutionizing the way you stay connected. As a leading
                provider of eSIM technology, we offer seamless and innovative
                solutions that cater to the needs of modern travelers, business
                professionals, and tech enthusiasts. Our mission is to provide
                hassle-free, instant connectivity, wherever you are in the
                world.
              </span>
              <span>
                eSIM Cards is proudly developed and managed by Airhub Systems, a
                renowned technology company committed to delivering cutting-edge
                communication solutions.
              </span>
            </p>
            <ul className=" pb-6 flex flex-col gap-2 tracking-normal font-inter font-medium text-gray-500 text-sm list-disc pl-3 pt-6 marker:text-bluePrimary">
              <li className="">
                <span className=" text-bluePrimary font-semibold">
                  Instant Activation
                </span>
                : Seamless activation process for immediate connectivity.
              </li>
              <li className="">
                <span className=" text-bluePrimary font-semibold">
                  Global Coverage
                </span>
                : Extensive network reach across multiple countries.
              </li>
              <li className="">
                <span className=" text-bluePrimary font-semibold">
                  Flexible Plans
                </span>
                : Customizable plans to suit your specific requirements.
              </li>
              <li className="">
                <span className=" text-bluePrimary font-semibold">
                  24/7 Support
                </span>
                : Dedicated customer service is available round the clock.
              </li>
            </ul>
            <Link
              href={"/plans"}
              className=" text-white rounded-lg hover:bg-blueSecondary transition-all w-fit bg-bluePrimary px-4 py-2 shadow-sm"
            >
              Explore Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

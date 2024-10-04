"use client";
import { useScroll, useTransform } from "framer-motion";
import { Heart } from "lucide-react";
import { useMemo } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
export function Customers() {
  const reviews = useMemo(
    () => [
      {
        title: "Works great abroad",
        content:
          "Used this eSIM on my trip to Europe last month. So much easier than buying local SIMs everywhere. Data was fast and reliable in all 3 countries I visited. Will definitely use again!",
      },
      {
        title: "Saved me in Japan",
        content:
          "Got stuck in rural Japan when my physical SIM stopped working. This eSIM saved the day! Had it up and running in minutes. The coverage was surprisingly good too.",
      },
      {
        title: "Great for work trips",
        content:
          "I travel a lot for business and this has been a game changer. Always connected, can expense one simple bill, and no more juggling multiple SIMs. My company loves it too.",
      },
      {
        title: "Easy to use app",
        content:
          "The app is pretty straightforward. Took me a minute to figure out how to top up, but once I got it, super simple. Nice to be able to check my usage easily.",
      },
      {
        title: "Coverage could be better",
        content:
          "Worked well in major cities, but had some issues in smaller towns. Not a deal breaker, but something to keep in mind if you're going off the beaten path.",
      },
      {
        title: "Customer service saved me",
        content:
          "Had trouble activating at first. Reached out to support and they were super helpful. Got me sorted in no time. Nice to know they've got your back when you're in a foreign country.",
      },
      {
        title: "No more bill shock!",
        content:
          "Used to dread checking my phone bill after international trips. This eSIM has put an end to that. Prices are clear upfront and no hidden charges. What a relief!",
      },
      {
        title: "Family vacation made easy",
        content:
          "Got eSIMs for the whole family for our Europe trip. Kids could use their phones without us worrying about costs. Made coordinating meetups and sharing photos so much easier.",
      },
      {
        title: "Not perfect, but close",
        content:
          "Had a few hiccups with connection dropping in some areas, but overall, way better than dealing with physical SIMs or paying crazy roaming fees. The good outweighs the bad for sure.",
      },
      {
        title: "Impressive speeds",
        content:
          "Was skeptical about data speeds, but color me impressed. Managed to do video calls and stream without issues in most places. Way faster than I expected.",
      },
    ],
    []
  );
  const { scrollYProgress } = useScroll();
  const x1 = useTransform(scrollYProgress, [0.2, 1], [0, -900]);
  const x2 = useTransform(scrollYProgress, [0.3, 1], [-1000, 0]);

  return (
    <div className=" w-full bg-text-primary pt-28 pb-12">
      <p className="text-center text-4xl justify-center font-gilroyBold pb-12">
        Hear from our delighted users{" "}
        <Heart className="stroke-none inline-block fill-red-600 w-8 h-8" />
      </p>
      <InfiniteMovingCards speed="slow" className="">
        {reviews.map((r) => (
          <li
            key={r.title}
            className="  max-w-96 shrink-0 px-8 py-5 bg-gray-50 border border-gray-200 p-2 rounded-lg shadow-sm"
          >
            <p className=" pb-3 text-2xl font-semibold font-gilroySemiBold text-center">
              {r.title}
            </p>
            <p className="text-pretty font-inter text-center">{r.content}</p>
          </li>
        ))}
      </InfiniteMovingCards>
    </div>
  );
}

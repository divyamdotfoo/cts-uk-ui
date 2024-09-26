"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
export function FAQs() {
  const faqs = useMemo(
    () => [
      {
        question: "What is an eSIM?",
        answer:
          "An eSIM (embedded SIM) is a small chip embedded in a device that allows you to activate cellular plans digitally. It eliminates the need for physical SIM cards and provides greater flexibility in managing multiple phone numbers or switching carriers.",
      },
      {
        question: "How do I install an eSIM profile?",
        answer:
          "To install an eSIM profile, follow these steps: Go to Settings > Cellular/Mobile Data > Add Cellular Plan. Scan the QR code provided by your carrier or manually enter the activation details. Wait for the profile to download and install. Once complete, you'll be prompted to label the new plan.",
      },
      {
        question: "Can I use both eSIM and physical SIM simultaneously?",
        answer:
          "Yes, many devices support dual-SIM functionality, allowing you to use both an eSIM and a physical SIM card at the same time. This feature is particularly useful for separating work and personal numbers or when traveling internationally.",
      },
      {
        question: "Do all phones support eSIM?",
        answer:
          "Not all phones support eSIM. Check your device specifications to confirm eSIM compatibility. Most recent flagship models from major manufacturers offer eSIM support, but older devices may not have this capability.",
      },
      {
        question: "How many eSIM profiles can I store on my device?",
        answer:
          "Most devices allow you to store multiple eSIM profiles, typically between 5 to 10 profiles. This allows you to switch between different plans easily without needing to delete existing ones.",
      },
      {
        question: "Can I switch between eSIM profiles easily?",
        answer:
          "Yes, switching between stored eSIM profiles is usually straightforward through your device's settings menu. You can quickly toggle between active plans or add new ones as needed.",
      },
      {
        question: "Is my personal data secure on an eSIM?",
        answer:
          "Yes, eSIM technology uses advanced security measures to protect your personal data and prevent unauthorized access. The chip itself is tamper-resistant, and data transmission is encrypted.",
      },
      {
        question: "Can I use eSIM for international roaming?",
        answer:
          "Absolutely! eSIM makes it easier to purchase local data plans when traveling internationally. Simply download and activate a local carrier's plan upon arrival, avoiding high roaming charges.",
      },
      {
        question: "How long does it take to activate an eSIM plan?",
        answer:
          "Activation typically takes a few minutes after scanning the QR code and confirming the plan details. In some cases, it may take up to 24 hours for full activation, depending on the carrier's systems.",
      },
      {
        question: "Can I transfer my existing phone number to an eSIM?",
        answer:
          "Yes, most carriers offer the option to port your existing number to an eSIM plan during activation. This process usually takes a few hours to complete once initiated.",
      },
      {
        question: "Do eSIM plans cost less than traditional SIM plans?",
        answer:
          "Prices vary by carrier, but eSIM plans often offer competitive pricing and flexible options compared to traditional SIM plans. Some providers offer special promotions for eSIM users, so it's worth comparing rates.",
      },
      {
        question: "Can I use eSIM on tablets and smartwatches too?",
        answer:
          "Yes, many tablets and smartwatches support eSIM technology, allowing cellular connectivity without physical SIM cards. This is especially convenient for IoT applications and wearable devices.",
      },
      {
        question: "How do I remove an eSIM profile from my device?",
        answer:
          "To remove an eSIM profile, go to Settings > Cellular/Mobile Data, select the profile you want to delete, and choose 'Remove Plan'. Note that removing a profile will disconnect you from that network until reactivated.",
      },
      {
        question: "Is eSIM technology available worldwide?",
        answer:
          "While eSIM adoption is growing globally, availability still varies by country and carrier. Major markets generally have good coverage, but check with local providers before relying solely on eSIM technology while traveling.",
      },
      {
        question: "Can I use eSIM for IoT devices?",
        answer:
          "Yes, eSIM technology is particularly beneficial for IoT applications due to its small size and remote provisioning capabilities. This allows for easier management of large-scale deployments in industrial settings.",
      },
      {
        question: "How does eSIM affect battery life?",
        answer:
          "eSIM generally has minimal impact on battery life compared to traditional SIM cards. However, factors like network conditions and usage patterns can influence overall device power consumption.",
      },
    ],
    []
  );
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window) {
        const innerWidth = window.innerWidth;
        if (innerWidth < 768) {
          setShowAll(false);
        } else {
          setShowAll(true);
        }
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div className="text-black py-20 flex flex-col items-center">
      <p className=" text-center pb-14 font-gilroyBold text-bluePrimary text-4xl">
        Frequently asked questions
      </p>
      <div className="max-w-5xl pb-6 flex flex-col md:flex-row px-6 xl:px-0 items-start justify-center gap-4 mx-auto">
        <div className=" flex flex-col basis-1/2 shrink-0 items-start gap-3">
          {faqs.slice(0, showAll ? 9 : 7).map((f) => (
            <FAQ
              key={f.question.slice(0, 10)}
              answer={f.answer}
              question={f.question}
            />
          ))}
        </div>
        {showAll && (
          <div className="flex flex-col basis-1/2 shrink-0 items-start gap-3">
            {faqs.slice(9).map((f) => (
              <FAQ
                key={f.question.slice(0, 10)}
                answer={f.answer}
                question={f.question}
              />
            ))}
          </div>
        )}
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="md:hidden bg-bluePrimary shadow-md  shadow-black/10 text-white font-gilroyMedium px-12 py-2 rounded-md"
        onClick={() => {
          setShowAll((p) => !p);
        }}
      >
        {showAll ? "Show less" : "Show more"}
      </motion.button>
    </motion.div>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  const [show, setShow] = useState(false);

  return (
    <div
      className={cn(
        " bg-accentSection w-full p-4 text-gray-800 font-gilroyBold text-xl  rounded-lg shadow-sm border-[1.8px] hover:border-gray-200  transition-all",
        show ? "border-gray-200" : "border-transparent"
      )}
    >
      <button
        onClick={() => setShow((prev) => !prev)}
        className="w-full bg-transparent flex items-start justify-between gap-3"
      >
        <span className=" text-wrap text-start">{question}</span>
        <span>
          {show ? (
            <MinusIcon className="text-text-primary" />
          ) : (
            <PlusIcon className="text-text-primary" />
          )}
        </span>
      </button>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: show ? "auto" : 0 }}
        className=" overflow-hidden"
      >
        <p className=" text-zinc-950 text-base font-inter pt-4 tracking-wide">
          {answer}
        </p>
      </motion.div>
    </div>
  );
}

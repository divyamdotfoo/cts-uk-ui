import { Underline } from "./underline-wrapper";
import { HowItWoksGifs } from "./how-it-works-client";
// import Step2 from "../../public/step2.gif"
// import Step3 from "../../public/step3.gif"
// import Step4 from "../../public/step4.gif"
export function HowItWorks() {
  return (
    <div className="text-black w-full pt-32">
      <div className="max-w-5xl mx-auto pb-20">
        <p className=" font-gilroyBold pb-3 text-center text-4xl">
          Seamless Setup, <Underline color="#1991B2">Powerful eSim.</Underline>
        </p>
        <p className=" font-gilroyMedium text-center text-xl">
          We Keep It Simple, But It's the Smart eSIM Tech Inside That Does the
          Heavy Lifting
        </p>
      </div>
      <div className=" w-full bg-accentSection py-16">
        <div className=" max-w-4xl w-full mx-auto flex items-center justify-between gap-20">
          <div className="">
            <p className=" leading-[1.2] text-bluePrimary font-gilroyBold text-4xl pb-5">
              Get eSIM in
              <br />4 Simple Steps
            </p>
            <p className=" font-gilroyMedium text-gray-800 text-sm">
              Getting connected with our eSIM is fast and hassle-free. In just
              four simple steps, you can enjoy seamless mobile service across
              the UK or the entire EU and Europe. Whether you're preparing for a
              business trip or a leisurely getaway, our quick setup process
              ensures you're ready to stay connected without missing a beat.
              Follow the steps below to get your eSIM up and running in no time!
            </p>
          </div>
          <HowItWoksGifs />
        </div>
      </div>
    </div>
  );
}

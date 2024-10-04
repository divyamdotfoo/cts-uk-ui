import { Underline } from "./ui/underline";
import { HowItWoksGifs } from "./how-it-works-client";

export function HowItWorks() {
  return (
    <div className="text-black w-full md:pt-32 pt-20">
      <div className="max-w-5xl mx-auto pb-16 md:pb-20 px-6  md:px-0">
        <p className=" font-gilroyBold pb-3 text-center text-4xl">
          Seamless Setup, <Underline color="#1991B2">Powerful eSim.</Underline>
        </p>
        <p className=" font-gilroyMedium text-center text-xl pt-1 md:pt-0">
          We Keep It Simple, But It's the Smart eSIM Tech Inside That Does the
          Heavy Lifting.
        </p>
      </div>
      <div className=" w-full py-8 px-6 md:px-0">
        <div className=" max-w-4xl w-full mx-auto flex items-center flex-col md:flex-row md:justify-between md:gap-20 gap-16">
          <div className=" md:-translate-y-10 ">
            <p className=" leading-[1.2] text-bluePrimary font-gilroyBold md:text-4xl text-2xl pb-5">
              Get eSIM in <br className=" hidden md:block" />4 Simple Steps
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

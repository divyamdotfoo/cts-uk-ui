export function NewsLetter() {
  return (
    <div className="pt-6 text-white max-w-6xl px-6 mx-auto pb-10">
      <div className="bg-[#012169] flex items-center rounded-md p-3 ">
        <p className=" hidden text-nowrap md:basis-1/4 md:block font-medium">
          Newsletter Sign Up
        </p>
        <div className="md:basis-3/4 relative basis-[100%]">
          <input
            className="focus:outline-none border-none text-black w-full h-8 p-2 rounded-sm placeholder:font-semibold placeholder:text-black placeholder:opacity-50 placeholder:text-sm"
            placeholder="Signup for our newsletter"
          />
          <button className="bg-[#012169] absolute right-2 top-1/2 -translate-y-1/2 py-1 px-4 text-center rounded-md text-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default function NewsLetter({ poppins }) {
    return (
    <div className="max-w-6xl w-full rounded-2xl bg-gradient-to-r from-[#6157FF] to-[#EE49FD] p-[3px] shadow-xl">
        <div className="w-full h-full bg-[#0A0118] rounded-2xl">
          <div className="flex rounded-2xl text-[#CCCCCC] bg-gradient-to-r from-[#6157ff33] to-[#ee49fd33] sm:p-12 p-6 w-full flex-col justify-between gap-5">
            <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
              Join the News Letter!
            </h3>

            <p className={`${poppins} font-sans sm:text-lg/[25px] text-base font-medium`}>
              Every week you will receive a best blog of that week. Included with some tech updates.
            </p>

            <form>
              <label className="relative block">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 right-0 flex items-center">
                  <button type="submit" className={`${poppins} font-sans font-normal md:text-base text-xs lg:text-lg bg-gradient-to-r from-[#6157FF] to-[#EE49FD] md:rounded-lg rounded-md w-[70px] md:w-28 lg:w-32 h-[33px] md:h-10 lg:h-12 md:mr-3 mr-2 lg:mr-5 tracking-tighter text-[#FFFFFF]`}>Subscribe</button>
                </span>
                <span className="sr-only">Search</span>
                <input id="email" placeholder="tim@apple.com" type="email" name="email" className={`placeholder:${poppins} font-sans placeholder:font-normal md:text-xl lg:text-2xl block bg-[#1E1E1E] w-full border rounded-md p-2 md:p-3 lg:p-5 shadow-sm placeholder:text-[#ffffff85] focus:outline-none ring-[#FFFFFF] ring-1 lg:ring-2`} />
              </label>
            </form>

            <p className={`${poppins} font-sans lg:text-2xl md:text-xl text-lg font-normal tracking-normal`}>
              99 Subscribers
            </p>
          </div>
        </div>
      </div>
      )
}
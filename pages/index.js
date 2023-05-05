import Image from "next/image";
import Link from "next/link";
import { Poppins, Epilogue, Space_Mono } from 'next/font/google'
import { useState } from "react";
import { space } from "postcss/lib/list";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: "--font-poppins"
})

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: "--font-epilogue"
})

const space_mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: "--font-space_mono"
})

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={`${epilogue.variable} font-serif flex min-h-screen flex-col items-center justify-between px-5 lg:px-10 xl:px-20 pt-10 xl:pt-20 gap-20 overflow-x-hidden text-[#FFFFFF]`}
    >
      <div className="max-w-6xl w-full">

        <nav class="">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
              <span class={`${space_mono.variable} lg:text-4xl md:text-2xl font-mono self-center text-2xl font-semibold whitespace-nowrap`}>Anonymous<span className="text-base"> </span>Blogger</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden bg-[#1E1E1E] focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-[#A652C8]" aria-controls="navbar-default" aria-expanded="false" onClick={() => { setIsOpen(!isOpen) }}>
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className={`${!isOpen && 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
              <ul class="font-normal lg:text-2xl justify-end flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-transparent bg-[#1E1E1E] border-[#A652C8] border-2">
                <li>
                  <a href="#" class="block py-2 pl-3 pr-4 md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-zinc-900 hover:text-white md:hover:bg-transparent" aria-current="page">About</a>
                </li>
                <li>
                  <a href="#" class="flex gap-x-1 py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-zinc-900 hover:text-white md:hover:bg-transparent">New Blog{" "}
                    <Image
                      className="lg:w-[25px]"
                      src="/plus-square.svg"
                      width="20"
                      height="20"
                      alt="square-icon"
                    />
                  </a>
                </li>
                <li>
                  <a href="#" class="py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-zinc-900 hover:text-white md:hover:bg-transparent flex gap-x-1">Search{" "}
                    <Image
                      className="lg:w-[25px]"
                      src="/search-icon.svg"
                      width="20"
                      height="20"
                      alt="search-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <hr className={`border-t-[0.83px] border-solid border-[#252C39] w-full border-r-[0.83px] mt-4 ${isOpen && 'hidden'}`} />
          </div>
        </nav>

      </div>



      <div className="max-w-6xl w-full">
        <h2 className="font-semibold lg:text-3xl xl:text-4xl text-2xl flex gap-3 z-10">
          Trending Blogs
          <img className="w-[20px] lg:w-[30px]" src="/arrow-right.svg"></img>
        </h2>
        <hr className="xl:w-[305px] lg:w-[260px] w-[210px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-purple-900 to-fuchsia-900 rounded-2xl mb-9 border-t-0" />

        <div className="flex gap-9 lg:gap-5 xl:gap-9 justify-between lg:flex-row flex-col">
          <div className="rounded-2xl bg-gradient-to-r from-[#B721FF] to-[#21D4FD] p-[3px] shadow-xl">
            <a className="flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-6 sm:p-6 lg:p-7" href="">
              <div className="flex flex-col justify-between gap-3">
                <h2 className="text-xl font-bold xl:text-2xl">
                  How To Defeat Browser
                </h2>

                <p className={`${poppins.variable} font-sans text-lg/[25px] font-normal`}>
                  Lorem ipsum dolor sit amet consectetur Lorem
                  ipsum dolor sit amet consectetur Lorem
                  iLorem ipsum dolor sit amet consecteturLore
                </p>

                <p className={`${space_mono.variable} font-mono lg:text-lg  xl:text-xl font-normal tracking-normal`}>
                  999<span className="text-xs"> </span>Views • 2<span className="text-xs"> </span>days<span className="text-xs"> </span>ago
                </p>
              </div>
            </a>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc] p-[3px] shadow-xl">
            <a className="flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-6 sm:p-6 lg:p-7" href="">
              <div className="flex flex-col justify-between gap-3">
                <h2 className="text-xl font-bold xl:text-2xl">
                  How To Defeat Browser
                </h2>

                <p className={`${poppins.variable} font-sans text-lg/[25px] font-normal`}>
                  Lorem ipsum dolor sit amet consectetur Lorem
                  ipsum dolor sit amet consectetur Lorem
                  iLorem ipsum dolor sit amet consecteturLore
                </p>

                <p className={`${space_mono.variable} font-mono lg:text-lg  xl:text-xl font-normal tracking-normal`}>
                  999<span className="text-xs"> </span>Views • 2<span className="text-xs"> </span>days<span className="text-xs"> </span>ago
                </p>
              </div>
            </a>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#FA71CD] to-[#C471F5] p-[3px] shadow-xl">
            <a className="flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-6 sm:p-6 lg:p-7" href="">
              <div className="flex flex-col justify-between gap-3">
                <h2 className="text-xl font-bold xl:text-2xl">
                  How To Defeat Browser
                </h2>

                <p className={`${poppins.variable} font-sans text-lg/[25px] font-normal`}>
                  Lorem ipsum dolor sit amet consectetur Lorem
                  ipsum dolor sit amet consectetur Lorem
                  iLorem ipsum dolor sit amet consecteturLore
                </p>

                <p className={`${space_mono.variable} font-mono lg:text-lg  xl:text-xl font-normal tracking-normal`}>
                  999<span className="text-xs"> </span>Views • 2<span className="text-xs"> </span>days<span className="text-xs"> </span>ago
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full">
        <h2 className="font-semibold lg:text-3xl xl:text-4xl text-2xl flex gap-3 z-10">
          Explore Topics
          <img className="w-[20px] xl:w-[30px]" src="/arrow-right.svg"></img>
        </h2>
        <hr className="w-[205px] lg:w-[250px] xl:w-[305px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-[#4facfe80] to-[#00f2fe80] rounded-2xl mb-9 border-t-0" />
        

        <div className="flex justify-between lg:flex-row flex-col gap-9">
          <div className="rounded-2xl bg-gradient-to-r from-[#B721FF] to-[#21D4FD] p-[3px] shadow-xl w-full">
          <a className="flex lg:flex-col justify-between flex-row rounded-2xl text-[#CCCCCC] bg-[#1E1E1E]" href="">
              <Image src="/topic-image.png" width="150" height="150" className="w-52 lg:w-full aspect-auto lg:rounded-t-2xl lg:rounded-b-none rounded-s-2xl" alt="image" />
              <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 lg:p-7">
                <h3 className="text-lg font-bold sm:text-2xl">
                  Artificial Intelligence
                </h3>
                
                <div className={`flex justify-between ${space_mono.variable} font-mono font-normal`}>
                  <div>
                    <p className='text-lg/[25px] text-[#979797]'>Blogs</p>

                    <p className='text-2xl text-white'>256</p>
                  </div>
                  <div className="text-right">
                    <p className='text-lg/[25px] text-[#979797]'>Viewers</p>

                    <p className='text-2xl text-white'>256</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc] p-[3px] shadow-xl w-full">
          <a className="flex lg:flex-col justify-between flex-row rounded-2xl text-[#CCCCCC] bg-[#1E1E1E]" href="">
              <Image src="/topic-image.png" width="150" height="150" className="w-52 lg:w-full aspect-auto lg:rounded-t-2xl lg:rounded-b-none rounded-s-2xl" alt="image" />
              <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 lg:p-7">
                <h3 className="text-lg font-bold sm:text-2xl">
                  Artificial Intelligence
                </h3>
                
                <div className={`flex justify-between ${space_mono.variable} font-mono font-normal`}>
                  <div>
                    <p className='text-lg/[25px] text-[#979797]'>Blogs</p>

                    <p className='text-2xl text-white'>256</p>
                  </div>
                  <div className="text-right">
                    <p className='text-lg/[25px] text-[#979797]'>Viewers</p>

                    <p className='text-2xl text-white'>256</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#FA71CD] to-[#C471F5] p-[3px] shadow-xl w-full">
          <a className="flex lg:flex-col justify-between flex-row rounded-2xl text-[#CCCCCC] bg-[#1E1E1E]" href="">
              <Image src="/topic-image.png" width="150" height="150" className="w-52 lg:w-full aspect-auto lg:rounded-t-2xl lg:rounded-b-none rounded-s-2xl" alt="image" />
              <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 lg:p-7">
                <h3 className="text-lg font-bold sm:text-2xl">
                  Artificial Intelligence
                </h3>
                
                <div className={`flex justify-between ${space_mono.variable} font-mono font-normal`}>
                  <div>
                    <p className='text-lg/[25px] text-[#979797]'>Blogs</p>

                    <p className='text-2xl text-white'>256</p>
                  </div>
                  <div className="text-right">
                    <p className='text-lg/[25px] text-[#979797]'>Viewers</p>

                    <p className='text-2xl text-white'>256</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full">
        <div
          className=" w-full rounded-2xl bg-gradient-to-r from-[#6157FF] to-[#EE49FD] p-[3px] shadow-xl"
        >
          <div className="w-full h-full bg-[#0A0118] rounded-2xl">
            <div className="flex rounded-2xl text-[#CCCCCC] bg-gradient-to-r from-[#6157ff33] to-[#ee49fd33] md:p-12 p-10 w-full flex-col justify-between gap-5">
              <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
                Join the News Letter!
              </h3>

              <p className={`${poppins.variable} font-sans sm:text-lg/[25px] text-base font-medium`}>
                Every week you will receive a best blog of that week. Included with some tech updates.
              </p>

              <form>
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 right-0 flex items-center">
                    <button type="submit" className={`${poppins.variable} font-sans font-normal md:text-base text-sm lg:text-lg bg-gradient-to-r from-[#6157FF] to-[#EE49FD] md:rounded-lg rounded-md w-20 md:w-28 lg:w-32 h-7 md:h-10 lg:h-12 md:mr-3 mr-2 lg:mr-5 tracking-tighter text-[#FFFFFF]`}>Subscribe</button>
                  </span>
                  <span className="sr-only">Search</span>
                  <input id="email" placeholder="tim@apple.com" type="email" name="email" className={`placeholder:${poppins.variable} font-sans placeholder:font-normal md:text-xl lg:text-2xl block bg-[#1E1E1E] w-full border rounded-md p-2 md:p-3 lg:p-5 shadow-sm placeholder:text-[#ffffff85] focus:outline-none ring-[#FFFFFF] ring-2`} />
                </label>
              </form>

              <p className={`${poppins.variable} font-sans lg:text-2xl md:text-xl text-lg font-normal tracking-normal`}>
                99 Subscribers
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl w-full flex flex-col gap-9">

        <hr className="border-t-[0.83px] border-solid border-[#252C39] w-full border-r-[0.83px]" />

        <footer className="pb-9">
          <p className={`${space_mono.variable} font-mono font-bold md:text-base text-sm text-center`}>
            No Copyright Issues. Feel free to Copy <span className={`${epilogue.variable} font-serif`}>:-)</span> <br />
            Design and built by Mohamed
          </p>
        </footer>
      </div>
    </main>
  );
}

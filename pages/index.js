import Image from "next/image";
import Link from "next/link";
import { Poppins, Epilogue, Space_Mono } from 'next/font/google'

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
  return (
    <main
      className={`${epilogue.variable} font-serif flex min-h-screen flex-col items-center justify-between px-20 pt-20 gap-20 overflow-x-hidden`}
    >
      <div className="max-w-6xl w-full">
        <header className="flex justify-between pb-5">
          <h1 className={`${space_mono.variable} font-mono font-bold text-4xl`}>
            Anonymous<span className="text-base"> </span>Blogger
          </h1>

          <nav className="flex font-normal">
            <ul className="flex items-end space-x-5 text-2xl">
              <Link href="/about">
                <li key="about">About</li>
              </Link>
              <Link href="/new-blog">
                <li key="new-blog" className="flex gap-x-1">
                  New Blog{" "}
                  <Image
                    src="/plus-square.svg"
                    width="25"
                    height="25"
                    alt="square-icon"
                  />
                </li>
              </Link>
              <Link href="/search">
                <li key="search" className="flex gap-x-1">
                  Search{" "}
                  <Image
                    src="/search-icon.svg"
                    width="25"
                    height="25"
                    alt="search-icon"
                  />
                </li>
              </Link>
            </ul>
          </nav>
        </header>
        <svg
          className="w-full"
          height="2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.182129"
            className="w-full"
            height="0.825671"
            rx="0.412835"
            fill="#252C39"
          />
        </svg>
      </div>

      <div className="max-w-6xl w-full">
        <h2 className="font-semibold text-4xl flex gap-3 z-10">
          Trending Blogs
          <img src="/arrow-right.svg"></img>
        </h2>
        <div className="w-[305px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-purple-900 to-fuchsia-900 rounded-2xl mb-9"></div>

        <div className="flex gap-9 justify-between">
          <div className="rounded-2xl bg-gradient-to-r from-[#B721FF] to-[#21D4FD] p-[3px] shadow-xl">
            <a className="flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-4 sm:p-6 lg:p-7" href="">
              <div className="flex flex-col justify-between gap-3">
                <h3 className="text-lg font-bold sm:text-2xl">
                  How To Defeat Browser
                </h3>

                <p className={`${poppins.variable} font-sans text-lg/[25px] font-normal`}>
                  Lorem ipsum dolor sit amet consectetur Lorem
                  ipsum dolor sit amet consectetur Lorem
                  iLorem ipsum dolor sit amet consecteturLore
                </p>

                <p className={`${space_mono.variable} font-mono text-xl font-normal tracking-normal`}>
                  999<span className="text-xs"> </span>Views • 2<span className="text-xs"> </span>days<span className="text-xs"> </span>ago
                </p>
              </div>
            </a>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc] p-[3px] shadow-xl">
            <a className="flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-4 sm:p-6 lg:p-7" href="">
              <div className="flex flex-col justify-between gap-3">
                <h3 className="text-lg font-bold sm:text-2xl">
                  How To Defeat Browser
                </h3>

                <p className={`${poppins.variable} font-sans text-lg/[25px] font-normal`}>
                  Lorem ipsum dolor sit amet consectetur Lorem
                  ipsum dolor sit amet consectetur Lorem
                  iLorem ipsum dolor sit amet consecteturLore
                </p>

                <p className={`${space_mono.variable} font-mono text-xl font-normal tracking-normal`}>
                  999<span className="text-xs"> </span>Views • 2<span className="text-xs"> </span>days<span className="text-xs"> </span>ago
                </p>
              </div>
            </a>
          </div>
          <div className="rounded-2xl bg-gradient-to-r from-[#FA71CD] to-[#C471F5] p-[3px] shadow-xl">
            <a className="flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-4 sm:p-6 lg:p-7" href="">
              <div className="flex flex-col justify-between gap-3">
                <h3 className="text-lg font-bold sm:text-2xl">
                  How To Defeat Browser
                </h3>

                <p className={`${poppins.variable} font-sans text-lg/[25px] font-normal`}>
                  Lorem ipsum dolor sit amet consectetur Lorem
                  ipsum dolor sit amet consectetur Lorem
                  iLorem ipsum dolor sit amet consecteturLore
                </p>

                <p className={`${space_mono.variable} font-mono text-xl font-normal tracking-normal`}>
                  999<span className="text-xs"> </span>Views • 2<span className="text-xs"> </span>days<span className="text-xs"> </span>ago
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl w-full">
        <h2 className="font-semibold text-4xl flex gap-3 z-10">
          Trending Blogs
          <img src="/arrow-right.svg"></img>
        </h2>
        <div className="w-[305px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-[#4facfe80] to-[#00f2fe80] rounded-2xl mb-9"></div>

        <div className="flex gap-9 justify-between">
          <div className="rounded-2xl bg-gradient-to-r from-[#B721FF] to-[#21D4FD] p-[3px] shadow-xl">
            <a className="flex flex-col rounded-2xl text-[#CCCCCC] bg-[#1E1E1E]" href="">
              <Image src="/topic-image.png" width="75" height="75" className="w-full" alt="image" />
              <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 lg:p-7">
                <h3 className="text-lg font-bold sm:text-2xl">
                  How To Defeat Browser
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
          <div className="rounded-2xl bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc] p-[3px] shadow-xl">
            <a className="flex flex-col rounded-2xl text-[#CCCCCC] bg-[#1E1E1E]" href="">
              <Image src="/topic-image.png" width="150" height="150" className="w-full" alt="image" />
              <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 lg:p-7">
                <h3 className="text-lg font-bold sm:text-2xl">
                  How To Defeat Browser
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
          <div className="rounded-2xl bg-gradient-to-r from-[#FA71CD] to-[#C471F5] p-[3px] shadow-xl">
            <a className="flex flex-col rounded-2xl text-[#CCCCCC] bg-[#1E1E1E]" href="">
              <Image src="/topic-image.png" width="75" height="75" className="w-full" alt="image" />
              <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 lg:p-7">
                <h3 className="text-lg font-bold sm:text-2xl">
                  How To Defeat Browser
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
            <div className="flex rounded-2xl text-[#CCCCCC] bg-gradient-to-r from-[#6157ff33] to-[#ee49fd33] p-4 sm:p-6 lg:p-10 lg:px-16 w-full flex-col justify-between gap-5">
              <h3 className="text-lg font-bold sm:text-2xl">
                Join the News Letter!
              </h3>

              <p className={`${poppins.variable} font-sans text-lg/[25px] font-medium`}>
                Every week you will receive a best blog of that week. Included with some tech updates.
              </p>

              <form>
                <label className="relative block">
                  <span className="sr-only">Search</span>
                  <span className="absolute inset-y-0 right-0 flex items-center">
                    <button type="submit" className={`${poppins.variable} font-sans font-normal text-lg bg-gradient-to-r from-[#6157FF] to-[#EE49FD] rounded-lg w-32 h-12 mr-5 tracking-tighter text-[#FFFFFF]`}>Subscribe</button>
                  </span>
                  <span className="sr-only">Search</span>
                  <input id="email" placeholder="tim@apple.com" type="email" name="email" className={`placeholder:${poppins.variable} font-sans placeholder:font-normal text-2xl block bg-[#1E1E1E] w-full border rounded-md py-5 px-5 shadow-sm placeholder:text-[#ffffff85] focus:outline-none ring-[#FFFFFF] ring-2`} />
                </label>
              </form>

              <p className="text-2xl font-normal tracking-normal">
                99 Subscribers
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl w-full flex flex-col gap-9">

        <svg
          className="w-full"
          height="2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="0.182129"
            className="w-full"
            height="0.825671"
            rx="0.412835"
            fill="#252C39"
          />
        </svg>

        <footer className="pb-9">
          <p className={`${space_mono.variable} font-mono font-bold text-lg text-center`}>
            No Copyright Issues. Feel free to Copy :) <br />
            Design and built by Mohamed
          </p>
        </footer>
      </div>
    </main>
  );
}

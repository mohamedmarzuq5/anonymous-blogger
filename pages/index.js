import Image from "next/image";
import Link from "next/link";
import { Poppins, Epilogue, Space_Mono } from 'next/font/google'
import { useState } from "react";
import BlogCard from "@/components/blog-card";
import TopicCard from "@/components/topic-card";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import NewsLetter from "@/components/news-letter";

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
  const date = `${new Date(1691009465599)}`.slice(4, 15);
  console.log(date);

  //content
  const blogContent = {
    title: 'How To Defeat Browser',
    para: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem iLorem ipsum dolor sit amet consecteturLore',
    date: date,
    views: 999
  }

  const count = { blog: '256', views: '256' }

  const font = { poppins: poppins.variable, space_mono: space_mono.variable }

  return (
    <main
      className={`${epilogue.variable} font-serif flex min-h-screen flex-col items-center justify-between px-5 lg:px-10 xl:px-20 pt-10 xl:pt-20 gap-20 overflow-x-hidden text-[#FFFFFF]`}
    >

      <NavBar isHome={true} isOpen={isOpen} eventIsOpen={setIsOpen} space_mono={space_mono.variable} />

      <div className="max-w-6xl w-full">
        <h2 className="font-semibold lg:text-3xl xl:text-4xl text-2xl flex gap-3 z-10">
          Trending Blogs
          <img className="w-[20px] lg:w-[30px]" src="/arrow-right.svg" />
        </h2>
        <hr className="xl:w-[305px] lg:w-[260px] w-[210px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-purple-900 to-fuchsia-900 rounded-2xl mb-9 border-t-0" />

        <div className="flex gap-9 lg:gap-5 xl:gap-9 justify-between lg:flex-row flex-col">
          <BlogCard color={"bg-gradient-to-r from-[#B721FF] to-[#21D4FD]"} content={blogContent} font={font} />
          <BlogCard color={"bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc]"} content={blogContent} font={font} />
          <BlogCard color={"bg-gradient-to-r from-[#FA71CD] to-[#C471F5]"} content={blogContent} font={font} />
        </div>
      </div>

      <div className="max-w-6xl w-full">
        <h2 className="font-semibold lg:text-3xl xl:text-4xl text-2xl flex gap-3 z-10">
          Explore Topics
          <img className="w-[20px] xl:w-[30px]" src="/arrow-right.svg" />
        </h2>
        <hr className="w-[205px] lg:w-[250px] xl:w-[305px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-[#4facfe80] to-[#00f2fe80] rounded-2xl mb-9 border-t-0" />
        <div className="flex justify-between lg:flex-row flex-col gap-9">
          <TopicCard color={"bg-gradient-to-r from-[#B721FF] to-[#21D4FD]"} topic={'Artificial Intelligence'} counts={count} space_mono={space_mono.variable} />
          <TopicCard color={"bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc]"} topic={'Artificial Intelligence'} counts={count} space_mono={space_mono.variable} />
          <TopicCard color={"bg-gradient-to-r from-[#FA71CD] to-[#C471F5]"} topic={'Artificial Intelligence'} counts={count} space_mono={space_mono.variable} />
        </div>
      </div>
      
      <NewsLetter poppins={poppins.variable} />

      <Footer font={{ space_mono: space_mono.variable, epilogue: epilogue.variable }} />
    </main>
  );
}

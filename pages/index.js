import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Epilogue, Space_Mono } from 'next/font/google';
import { useState } from 'react';
import BlogCard from '@/components/blog-card';
import TopicCard from '@/components/topic-card';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import NewsLetter from '@/components/home/news-letter';
import BgEffect from '@/components/bg-effect';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-poppins',
});

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-epilogue',
});

const space_mono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space_mono',
});

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  //content
  const blogContent = {
    title: 'How To Defeat Browser',
    content:
      'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem iLorem ipsum dolor sit amet consecteturLore',
    createdAt: 1691009465599,
    viewers: 0,
  };

  const count = { blog: '256', views: '256' };

  const font = { poppins: poppins.variable, space_mono: space_mono.variable };

  return (
    <main
      className={`${epilogue.variable} font-serif flex min-h-screen flex-col items-center justify-between px-5 lg:px-10 xl:px-20 pt-10 xl:pt-20 gap-20 overflow-x-hidden text-[#FFFFFF]`}
    >
      <BgEffect />

      <NavBar
        navData={{ link: ['/about', '/new-blog'], text: ['About', 'New Blog'] }}
        isOpen={isOpen}
        eventIsOpen={setIsOpen}
        space_mono={space_mono.variable}
      />

      <div data-aos="fade-in" className="max-w-6xl w-full">
        <Link href="/blogs" className="group inline-block">
          <h2 className="font-semibold lg:text-3xl xl:text-4xl text-2xl opacity-90 group-hover:opacity-100 flex gap-3 z-10">
            Trending Blogs
            <Image
              className="w-[20px] lg:w-[30px] transition-transform ease-in-out duration-300 group-hover:translate-x-1 lg:group-hover:translate-x-2"
              width={25}
              height={25}
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right_icon"
            />
          </h2>
          <hr className="xl:w-[305px] lg:w-[260px] w-[210px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-[#591c87da] to-[#701a75d7] group-hover:from-[#581c87] group-hover:to-[#701a75] rounded-2xl mb-9 border-t-0" />
        </Link>

        <div className="flex gap-9 md:gap-3 lg:gap-5 xl:gap-9 justify-between md:flex-row flex-col">
          <BlogCard
            color={'bg-gradient-to-r from-[#B721FF] to-[#21D4FD]'}
            blog={blogContent}
            font={font}
          />
          <BlogCard
            color={'bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc]'}
            blog={blogContent}
            font={font}
          />
          <BlogCard
            color={'bg-gradient-to-r from-[#FA71CD] to-[#C471F5]'}
            blog={blogContent}
            font={font}
          />
        </div>
      </div>

      <div data-aos="fade-in" className="max-w-6xl w-full">
        <Link href="/topics" className="group inline-block">
          <h2 className="font-semibold lg:text-3xl xl:text-4xl opacity-90 group-hover:opacity-100 text-2xl flex gap-3 z-10">
            Explore Topics
            <Image
              className="w-[20px] lg:w-[30px] transition-transform ease-in-out duration-300 group-hover:translate-x-1 lg:group-hover:translate-x-2"
              width={25}
              height={25}
              src="/assets/icons/arrow-right.svg"
              alt="arrow-right_icon"
            />
          </h2>
          <hr className="w-[205px] lg:w-[258px] xl:w-[305px] -mt-[5px] z-0 h-[5px] bg-gradient-to-r from-[#4facfe80] to-[#00f2fe80] group-hover:from-[#4facfe93] group-hover:to-[#00f1fe93] rounded-2xl mb-9 border-t-0" />
        </Link>

        <div className="flex justify-between lg:flex-row flex-col gap-9">
          <TopicCard
            color={'bg-gradient-to-r from-[#B721FF] to-[#21D4FD]'}
            topic={'Artificial Intelligence'}
            counts={count}
            space_mono={space_mono.variable}
          />
          <TopicCard
            color={'bg-gradient-to-r from-[#EB90FF] to-[#9a49e1cc]'}
            topic={'Artificial Intelligence'}
            counts={count}
            space_mono={space_mono.variable}
          />
          <TopicCard
            color={'bg-gradient-to-r from-[#FA71CD] to-[#C471F5]'}
            topic={'Artificial Intelligence'}
            counts={count}
            space_mono={space_mono.variable}
          />
        </div>
      </div>

      <NewsLetter poppins={poppins.variable} />

      <Footer
        font={{ space_mono: space_mono.variable, epilogue: epilogue.variable }}
      />
    </main>
  );
}

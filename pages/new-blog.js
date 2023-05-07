/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { Poppins, Epilogue, Space_Mono } from 'next/font/google'
import { useState } from "react";
import BlogCard from "@/components/blog-card";
import TopicCard from "@/components/topic-card";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import NewsLetter from "@/components/home/news-letter";

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

            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <NavBar navData={{ link: ['/', '/about'], text: ['Home', 'About'] }} isOpen={isOpen} eventIsOpen={setIsOpen} space_mono={space_mono.variable} />

            <div className="max-w-6xl w-full">
                <div className="isolate px-6 py-24 sm:py-10 lg:px-8">
                    <div className="mx-auto w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Write a New Blog!</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-400">
                            Let the world know about what's in your mind without publishing your name
                        </p>
                    </div>
                    <form action="#" method="POST" className="mx-auto mt-8 max-w-2xl sm:mt-9">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            
                            <div className="sm:col-span-2">
                                {/* <label htmlFor="message" className="block text-sm font-semibold leading-6">
                                    Message
                                </label> */}
                                <div className="mt-2.5">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={10}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button
                                type="submit"
                                className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer font={{ space_mono: space_mono.variable, epilogue: epilogue.variable }} />
        </main>
    );
}

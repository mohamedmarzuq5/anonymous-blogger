import Image from "next/image";

export default function TopicCard({color, topic, counts, space_mono}) {
    return (
        <div className={`rounded-2xl ${color} p-[3px] shadow-xl w-full`}>
            <a className="flex lg:flex-col justify-between flex-row rounded-2xl text-[#CCCCCC] bg-[#1E1E1E]" href="">
                <Image src="/assets/images/topic-image.png" width="150" height="150" className="w-40 sm:w-52 lg:w-full aspect-auto lg:rounded-t-2xl lg:rounded-b-none rounded-s-2xl" alt="topic-image" />
                <div className="flex flex-col justify-between gap-3 p-4 sm:p-6 lg:p-7">
                    <h3 className="text-base font-bold sm:text-2xl">
                        {topic}
                    </h3>

                    <div className={`flex justify-between ${space_mono} font-mono font-normal`}>
                        <div>
                            <p className='sm:text-lg/[25px] text-base/[25px] text-[#979797]'>Blogs</p>

                            <p className='sm:text-2xl text-xl text-white'>{counts.blog}</p>
                        </div>
                        <div className="text-right">
                            <p className='sm:text-lg/[25px] text-base/[25px] text-[#979797]'>Viewers</p>

                            <p className='sm:text-2xl text-xl text-white'>{counts.views}</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
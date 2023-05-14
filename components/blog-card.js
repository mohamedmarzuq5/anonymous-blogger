import Link from "next/link";

export default function BlogCard({ color, blog, font, blogs }) {
  const date = `${new Date(blog.createdAt)}`.slice(4, 15);

  return (
    <div 
    data-aos="zoom-in" data-aos-duration="1250">
      <div
        className={`rounded-2xl ${color ? color : 'bg-[#FFFFFF]'} p-[3px] shadow-xl transition-transform ease-in-out duration-300 hover:scale-[1.03]`}
      >
        <Link
          className={`w-full sm:h-48 lg:h-60 ${!blogs ? "md:h-64" : ""} flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-5 sm:p-5 md:p-4 lg:p-7`}
          href=""
        >
          <div className="flex flex-col justify-between gap-2 sm:gap-1 md:gap-1">
            <h2 className="text-xl font-bold xl:text-2xl">{blog.title}</h2>

            <p
              className={`${font.poppins} font-sans text-lg/[25px] font-normal`}
            >
              {blog.content.slice(0, 80)}...
            </p>

            <p
              className={`${font.space_mono} font-mono lg:text-lg  xl:text-xl font-normal tracking-normal`}
            >
              {blog.viewers} Views • {date}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}

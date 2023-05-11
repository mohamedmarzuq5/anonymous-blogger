export default function BlogCard({ color, content, font }) {
  // let bgColor;
  // if (color.to) {
  //      bgColor = `bg-gradient-to-r from-[#${color.from}] to-[#${color.to}]`
  // } else if(color.from) {
  //      bgColor = `bg-[${color.from}]`
  // } else {
  //      bgColor = "bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC]";
  // }

  return (
    <div 
    data-aos="zoom-in" data-aos-duration="1250">
      <div
        className={`rounded-2xl ${color} p-[3px] shadow-xl transition-transform ease-in-out duration-300 hover:scale-[1.03]`}
      >
        <a
          className="flex rounded-2xl text-[#CCCCCC] bg-[#1E1E1E] p-6 sm:p-6 lg:p-7"
          href=""
        >
          <div className="flex flex-col justify-between gap-3">
            <h2 className="text-xl font-bold xl:text-2xl">{content.title}</h2>

            <p
              className={`${font.poppins} font-sans text-lg/[25px] font-normal`}
            >
              {content.para}
            </p>

            <p
              className={`${font.space_mono} font-mono lg:text-lg  xl:text-xl font-normal tracking-normal`}
            >
              {content.views} Views • {content.date}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

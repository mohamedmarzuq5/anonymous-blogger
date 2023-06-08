import Link from "next/link";

export default function Footer({ font }) {
  return (
    <footer data-aos="fade-in" className="max-w-6xl w-full flex flex-col gap-9">
      <hr className="border-t-[0.83px] border-solid border-[#252C39] w-full border-r-[0.83px]" />

      <div className="pb-9">
        <p
          className={`${font.space_mono} font-mono font-bold md:text-base sm:text-sm text-xs text-center`}
        >
          No Copyright Issues. Feel free to Copy{' '}
          <span className={`${font.epilogue} font-serif`}>:-)</span> <br />
          Design and Built by <Link className="  hover:opacity-80" href={'https://twitter.com/mohamedmarzuq5'} target="blank"><span className="pb-[7px] underline underline-offset-2">Mohamed</span>👨‍💻</Link>
        </p>
      </div>
    </footer>
  );
}

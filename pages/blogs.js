import { Poppins, Epilogue, Space_Mono } from 'next/font/google';
import { useState } from 'react';
import BlogCard from '@/components/blog-card';
import NavBar from '@/components/navbar';
import BgEffect from '@/components/bg-effect';
import Footer from '@/components/footer';

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

export default function Home({blogs}) {
  const [isOpen, setIsOpen] = useState(false);
  // const [sort, setSort] = useState('trending');
  const [DOMBlogArr, SetDOMBlogArr] = useState([null]);

  console.log(blogs);

  const blogsFetcherFunction = async () => {

  };

  const count = { blog: '256', views: '256' };

  const font = { poppins: poppins.variable, space_mono: space_mono.variable };

  const DOMTempArr = [];
  for (let i = 0; i < blogs?.length; i++) {
    DOMTempArr.push(
      <BlogCard
        key={blogs[i]._id}
        // color={'bg-gradient-to-r from-[#B721FF] to-[#21D4FD]'}
        blog={blogs[i]}
        font={font}
        blogs={true}
      />
    );
  }

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

      <div data-aos="fade-in" className="max-w-6xl w-full flex flex-col gap-9">
        <div className="grid gap-6 lg:gap-5 xl:gap-9 justify-between lg:grid-flow-row lg:grid-cols-3 sm:grid-cols-2 items-center content-center grid-cols-1">
          {DOMTempArr}
        </div>
      </div>

      <Footer
        font={{ space_mono: space_mono.variable, epilogue: epilogue.variable }}
      />
    </main>
  );
}

export async function getStaticProps() {
  try {
    const blogsResponse = await fetch('http://localhost:5000/users/blogs');
    const blogsObj = await blogsResponse.json();

    if (blogsResponse.status === 500 || !blogsObj || blogsObj.error) {
      throw new Error('Problems with the server');
    }
    const blogs = blogsObj.blogs;
    if (blogs.length === 0) {
      throw new Error('No Blogs In the Server');
    }

    return {
      props: {
        blogs: blogs,
      },
    };
  } catch (error) {
    console.log('Error: ' + error.message);

    return {
      props: {
        error: error.message,
      },
    };
  }
}

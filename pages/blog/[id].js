import Image from 'next/image';
import Link from 'next/link';
import { Poppins, Epilogue, Space_Mono } from 'next/font/google';
import { useState } from 'react';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import BgEffect from '@/components/bg-effect';
import { useRouter } from 'next/router';
import { SERVER_URL } from '@/config/backend';

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '500'],
//   variable: '--font-poppins',
// });

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

export default function Home({ blog }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  console.log(blog);

  // const font = { poppins: poppins.variable, space_mono: space_mono.variable };

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

      <div data-aos="fade-in" className="max-w-6xl w-full flex flex-col gap-5">
        <h2 className='text-3xl font-semibold'>{blog[0].title}</h2>
        <p className="">{blog[0].content}</p>
      </div>

      <Footer
        font={{ space_mono: space_mono.variable, epilogue: epilogue.variable }}
      />
    </main>
  );
}

export async function getStaticPaths() {
  try {
    const blogsResponse = await fetch(`${SERVER_URL}/users/blogs?blogIds=true`);
    const blogsObj = await blogsResponse.json();

    if (blogsResponse.status === 500 || !blogsObj || blogsObj.error) {
      throw new Error('Problems with the server');
    }
    if (blogsObj.blogs.length === 0) {
      throw new Error('No Blogs In the Server');
    }

    const blogs = blogsObj.blogs.map((blog) => ({
      params: { id: blog._id }
    }));

    console.log(blogs);

    return {
      paths: [...blogs],
      fallback: false,
    };
  } catch (error) {
    console.log(error.message)
    return {
      paths: [],
      fallback: false,
    };
  }

}

export async function getStaticProps({ params }) {
  try {
    const blogsResponse = await fetch(`${SERVER_URL}/users/blog/${params.id}`);
    const blogsObj = await blogsResponse.json();

    if (blogsResponse.status === 500 || !blogsObj || blogsObj.error) {
      throw new Error('Problems with the server');
    }

    return {
      props: {
        blog: blogsObj.blogs,
        fallback: false,
      },
    };
  } catch (error) {
    console.log(error.message);
  }

}

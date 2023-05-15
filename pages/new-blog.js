/* eslint-disable react/no-unescaped-entities */
import { Poppins, Epilogue, Space_Mono } from 'next/font/google';
import Footer from '@/components/footer';
import NavBar from '@/components/navbar';
import { useState } from 'react';
import BgEffect from '@/components/bg-effect';
import toast, { Toaster } from 'react-hot-toast';

const blogRequestURL = 'https://anonymous-blogger-0xci.onrender.com/users/add-blog';

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

const addNewBlog = async (
  event,
  handleTextArea,
  handleTextInput,
  blog,
  setIsFetching
) => {
  event.preventDefault();
  if (blog.content.length < 99) {
    toast.error(
      `${blog.content.length} chars for a blog🤷‍♂️? \n Minimum 99 chars is required`
    );
  } else {
    setIsFetching(true);
    const toastId = toast.loading('Loading...');
    try {
      const addBlogToServer = await fetch(blogRequestURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ blog: blog }),
      });

      const response = await addBlogToServer.json();

      if (addBlogToServer.status === 500 || response.error !== false) {
        throw new Error();
      }

      handleTextInput('');
      handleTextArea('');
      setIsFetching(false);

      toast.success('Forwarded to Admin!', {
        id: toastId,
        duration: 5000,
      });
    } catch (error) {
      // console.error(error);
      toast.error('Something Error!', {
        id: toastId,
      });

      handleTextInput('');
      handleTextArea('');
      setIsFetching(false);
    }
  }
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [textArea, setTextArea] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  return (
    <main
      className={`${epilogue.variable} font-serif flex min-h-screen flex-col items-center justify-between px-5 lg:px-10 xl:px-20 pt-10 xl:pt-20 gap-20 overflow-x-hidden text-[#FFFFFF]`}
    >
      <BgEffect />

      <NavBar
        navData={{ link: ['/', '/about'], text: ['Home', 'About'] }}
        isOpen={isOpen}
        eventIsOpen={setIsOpen}
        space_mono={space_mono.variable}
      />

      <div className="max-w-6xl w-full" data-aos="fade-in">
        <div className="isolate sm:px-6 lg:px-8 py-3 sm:py-10 ">
          <div className="mx-auto w-3xl text-center">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-aos="fade-down"
            >
              Write a New Blog!
            </h2>
            <p
              className="mt-2 text-lg leading-8 text-gray-400"
              data-aos="fade-in"
            >
              Let the world know about what's in your mind without publishing
              your identity
            </p>
          </div>
          <form
            data-aos="fade-up"
            action=""
            onSubmit={(event) => {
              addNewBlog(
                event,
                setTextArea,
                setTitleInput,
                { title: titleInput, content: textArea },
                setIsFetching
              );
            }}
            method="POST"
            className="mx-auto mt-8 max-w-2xl sm:mt-9"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="company"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Title
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    required
                    minLength={3}
                    maxLength={21}
                    value={titleInput}
                    onChange={(event) => {
                      setTitleInput(event.target.value);
                    }}
                    disabled={isFetching}
                    className="block w-full disabled:opacity-75 disabled:shadow-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="blog"
                  className="block text-sm font-semibold leading-6 text-white"
                >
                  Content
                </label>
                {/* <label htmlFor="message" className="block text-sm font-semibold leading-6">
                  Message
                  </label> */}
                <div className="mt-2.5">
                  <textarea
                    name="blog"
                    id="blog"
                    rows={10}
                    minLength={99}
                    required
                    value={textArea}
                    disabled={isFetching}
                    onChange={(event) => {
                      setTextArea(event.target.value);
                    }}
                    className="block h-72 w-full disabled:opacity-75 disabled:shadow-none rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-fuchsia-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                disabled={isFetching}
                type="submit"
                className={`block w-full rounded-md ${
                  textArea.length < 99 || titleInput < 3
                    ? 'opacity-40 hover:opacity-40 bg-fuchsia-500  hover:bg-fuchsia-500'
                    : 'bg-fuchsia-500 hover:bg-fuchsia-400 focus:ring-3 '
                } disabled:opacity-40 disabled:hover:opacity-40 disabled:bg-fuchsia-500  disabled:hover:bg-fuchsia-500 disabled:cursor-not-allowed cursor-pointer ${
                  isFetching && 'cursor-progress'
                } hover:bg-fuchsia-400 ${
                  textArea.length === 0 && 'cursor-not-allowed'
                } px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer
        font={{
          space_mono: space_mono.variable,
          epilogue: epilogue.variable,
        }}
      />

      <Toaster position="bottom-right" />
    </main>
  );
}

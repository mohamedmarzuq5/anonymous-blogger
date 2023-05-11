import { useEffect } from 'react';
// ..
// AOS.init();
import Aos from "aos";
import "aos/dist/aos.css";
import '@/styles/globals.css' // You can also use <link> for styles

export default function App({ Component, pageProps }) {
console.log(pageProps)
useEffect(() => {
  Aos.init({
    easing: "ease-in-out",
    once: true,
    offset: 50,
    duration: 1000,
  });
}, []);
  return <Component {...pageProps} />
}

import Hero from "./hero";
import Header from "./header";
import Footer from "./Footer";
import About from "./About";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
export default function App(){
    useEffect(() => {
        Aos.init({
          duration: 400,
          delay:200,
          easing:"ease-in"
        });
      }, []);
      useEffect(()=>{
        const script = document.createElement('script');
        script.src = '/src/script.js';
        document.body.appendChild(script);
      },[])
    return(
        <main className="bg-white min-h-screen w-full">
            <Header />
            <Hero />
            <About/>
            <Footer/>
        </main>
    )
}
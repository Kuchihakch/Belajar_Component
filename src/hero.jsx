import Foto from "./assets/L.png"
import ReactLogo from "./assets/react.svg"
import NodeJsLogo from "./assets/Node.js.svg"
import MongoDBLogo from "./assets/MongoDB.svg"
import ExpressLogo from "./assets/Express.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faDownload, faNoteSticky } from "@fortawesome/free-solid-svg-icons"
export default function Body(){
    return(
        <section id="home" className="grid md:grid-cols-2 place-content-center md:place-items-center-safe w-full min-h-screen max-sm:gap-y-10 sm:gap-y-5 gap-x-10 font-[Poppins] p-20">
            <div className="image grid grid-cols-4 grid-rows-2 w-90 lg:w-120 gap-2 m-auto">
                <div className="row-span-2 flex flex-col justify-center gap-2">
                    <img src={Foto} alt="profile" data-aos="slide-left" className="w-fit self-end bg-gray-200 px-4 shadow-inner shadow-gray-500 border-3 border-black hover:drop-shadow-xl drop-shadow-black"/>
                    <img src={Foto} alt="profile" data-aos="slide-right" className="w-fit self-end bg-gray-200 px-4 shadow-inner shadow-gray-500 border-3 border-black hover:drop-shadow-xl drop-shadow-black"/>
                </div>
                <img src={Foto} alt="profile" data-aos="" className="w-fit col-span-2 row-span-2 self-end bg-gray-200 px-4 shadow-inner shadow-gray-500 border-3 border-black hover:drop-shadow-xl drop-shadow-black"/>
                <div className="row-span-2 flex flex-col justify-center gap-2">
                    <img src={Foto} alt="profile" data-aos="slide-right" className="w-fit self-end bg-gray-200 px-4 shadow-inner shadow-gray-500 border-3 border-black hover:drop-shadow-xl drop-shadow-black"/>
                    <img src={Foto} alt="profile" data-aos="slide-left" className="w-fit self-end bg-gray-200 px-4 shadow-inner shadow-gray-500 border-3 border-black hover:drop-shadow-xl drop-shadow-black"/>
                </div>
            </div>
            <div className="text-content text-black px-20 flex flex-col gap-3 lg:min-w-170 w-120">

             <p className="font-bold text-4xl text-blue-600">Hello, I am FelienZ!</p>
             <p>I Just start my web development journey in React-App.</p>
             <p>I'm a Unsri Student's that currently passionate in Web Development, I Explore Either Front-End and Back-End Technology.</p>
             <div className="info self-end flex justify-start max-sm:justify-center w-full items-center gap-3">
                <div className="Connect flex gap-3 text-2xl">
                    <a href="https://github.com/FelienZ" data-aos="fade" className="github rounded-full p-2 flex justify-center bg-white drop-shadow-lg items-center hover:drop-shadow-md hover:drop-shadow-gray-500">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-rajab-fadhly/" data-aos="fade" className="linkedin rounded-full p-2 text-blue-800 flex justify-center bg-white drop-shadow-lg items-center hover:drop-shadow-md hover:drop-shadow-blue-500">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://wa.me/6281229564138/" data-aos="fade" className="whatsapp rounded-full p-2 flex justify-center text-green-500 bg-white drop-shadow-lg items-center hover:drop-shadow-md hover:drop-shadow-green-500">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
             </div>
                <div className="button flex w-fit self-end gap-2">
                    <button id="more" className="btn btn-primary text-white w-fit hover:shadow-md hover:shadow-blue-500"><FontAwesomeIcon icon={faNoteSticky} /> More About Me</button>
                    <button className="btn btn-outline btn-primary text-blue-700 w-fit hover:bg-white"><FontAwesomeIcon icon={faDownload} /> My Cv</button>
                </div>
            </div>
        </section>
    )
}
import { faCalendarAlt, faLocationDot, faStore, faTrophy, faUser, faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dasar from './assets/BackEndDasar.png';
import Lanjut from './assets/CloudDasar.png';
export default function About(){
    return(
        <section className="tools flex flex-col items-center justify-center w-full min-h-screen font-[Poppins] text-black my-5 overflow-hidden">
            <div className="top text-center" data-aos="fade">
                <p className="AboutMe text-2xl font-bold text-blue-600">About Me</p>
                <p>Berikut Ini Adalah Beberapa Project dan Pencapaian yang Saya Miliki Saat ini</p> 
                <p className="italic">Here is My Project & My Achievement I've Reach.</p>   
            </div>
            <div className="card grid  lg:grid-cols-2 md:grid-rows-2 max-sm:scale-80 gap-3 place-content-center my-5 w-[80%]">
                <a href="https://felienz-resto-app.onrender.com/" className="card1 bg-white drop-shadow-md flex flex-col justify-between p-3 rounded-md w-fit hover:drop-shadow-blue-500 hover:drop-shadow-sm" data-aos="fade-up">
                    <div className="atas font-bold text-md flex gap-3 items-center">
                        <div className="logo rounded-full bg-blue-600 size-12 flex justify-center items-center">
                        <FontAwesomeIcon icon={faUtensils} className="text-white"/> 
                        </div>
                        <div className="text-content">
                            <p>Project 1 : Resto App</p>
                            <p className="text-sm text-blue-600 font-semibold">Full Stack Web</p>
                            <div className="data flex gap-3 text-gray-400 text-xs">
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt}/>2025</p>
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faUser}/>Felienz</p>
                            </div>
                        </div>
                    </div>
                    <div className="info text-sm font-light p-3 text-justify w-full">
                            <p className="h-15">"FelienZ Resto-App" adalah sebuah aplikasi layanan web yang menyediakan layanan pemesanan Menu secara Daring.
                                Pembuatan Web ini menggunakan beberapa tools yaitu:
                            </p>
                    </div>
                    <div className="tech-stack flex font-semibold flex-col w-full gap-3 p-3">
                            <p>Tech Stack: </p>
                                <ul className="list-none flex gap-2 font-normal">
                                    <li className="py-1 bg-gray-200 rounded-full px-2">MongoDB</li>
                                    <li className="py-1 bg-gray-200 rounded-full px-2">ExpressJs</li>
                                    <li className="py-1 bg-gray-200 rounded-full px-2">EJS</li>
                                    <li className="py-1 bg-gray-200 rounded-full px-2">NodeJs</li>
                                </ul>                                
                        </div>
                    <div className="features p-3 text-nowrap">
                            <p className="font-semibold text-md">Key Features: </p>
                            <ul className="list-none">
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>Basic Authentication</li>
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>Transaction Schema</li>
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>Live Search Box</li>
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>Interactive Comment Section</li>
                            </ul>
                        </div>
                </a>
                <div className="card2 bg-white drop-shadow-md flex flex-col justify-between p-3 rounded-md w-fit hover:drop-shadow-blue-500 hover:drop-shadow-sm" data-aos="fade-up">
                    <div className="atas font-bold text-md flex gap-3 items-center">
                        <div className="logo rounded-full bg-blue-600 size-12 flex justify-center items-center">
                        <FontAwesomeIcon icon={faStore} className="text-white"/> 
                        </div>
                        <div className="text-content">
                            <p>Project 2 : LokaStore</p>
                            <p className="text-sm text-blue-600 font-semibold">Full Stack Web</p>
                            <div className="data flex gap-3 text-gray-400 text-xs">
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt}/>2025</p>
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faUser}/>Felienz</p>
                            </div>
                        </div>
                    </div>
                    <div className="info text-sm font-light p-3 text-justify w-full">
                            <p className="h-15">"LokaStore" adalah sebuah aplikasi layanan web yang menyediakan layanan Belanja Online.
                                Pembuatan Web ini menggunakan beberapa tools yaitu:
                            </p>
                    </div>
                    <div className="tech-stack flex font-semibold flex-col w-full gap-3 p-3">
                            <p>Tech Stack: </p>
                                <ul className="list-none flex gap-2 font-normal">
                                    <li className="py-1 bg-gray-200 rounded-full px-2">MongoDB</li>
                                    <li className="py-1 bg-gray-200 rounded-full px-2">ExpressJs</li>
                                    <li className="py-1 bg-gray-200 rounded-full px-2">React</li>
                                    <li className="py-1 bg-gray-200 rounded-full px-2">NodeJs</li>
                                </ul>                                
                        </div>
                    <div className="features p-3">
                            <p className="font-semibold text-md">Key Features: </p>
                            <ul className="list-none">
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>OAuth Google Authentication</li>
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>Transaction Schema</li>
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>Live Search Box</li>
                                <li className="flex gap-2 items-center"><FontAwesomeIcon icon={faCircleCheck} className="text-green-500"/>Interactive Comment Section</li>
                            </ul>
                        </div>
                </div>
                <a href="https://www.dicoding.com/certificates/KEXL2E4Y0ZG2" className="card3 bg-white drop-shadow-md p-3 rounded-md flex flex-col justify-evenly hover:drop-shadow-blue-500 hover:drop-shadow-sm" data-aos="fade-up">
                    <div className="atas font-bold text-md flex gap-3 items-center">
                        <div className="logo rounded-full bg-blue-600 size-12 flex justify-center items-center">
                        <FontAwesomeIcon icon={faTrophy} className="text-white"/> 
                        </div>
                        <div className="text-content">
                            <p>Back-End Developer Beginner</p>
                            <p className="text-sm text-blue-600 font-semibold">Achievement</p>
                            <div className="data flex gap-3 text-gray-400 text-xs">
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt}/>2025</p>
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faUser}/>Felienz</p>
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot}/>Dicoding</p>
                            </div>
                        </div>
                    </div>
                    <div className="content flex justify-center w-full my-2">
                        <div className="image w-[80%]">
                            <img src={Dasar} alt="E-Certificate" className="size-fit"/>
                        </div>
                    </div>
                </a>
                <a href="https://www.dicoding.com/certificates/0LZ0RKNG3P65" className="card4 bg-white drop-shadow-md p-3 rounded-md flex flex-col justify-evenly hover:drop-shadow-blue-500 hover:drop-shadow-sm" data-aos="fade-up">
                    <div className="atas font-bold text-md flex gap-3 items-center">
                        <div className="logo rounded-full bg-blue-600 size-12 flex justify-center items-center">
                        <FontAwesomeIcon icon={faTrophy} className="text-white"/> 
                        </div>
                        <div className="text-content">
                            <p>Cloud Engineer Beginner</p>
                            <p className="text-sm text-blue-600 font-semibold">Achievement</p>
                            <div className="data flex gap-3 text-gray-400 text-xs">
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt}/>2025</p>
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faUser}/>Felienz</p>
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot}/>Dicoding</p>
                            </div>
                        </div>
                    </div>
                    <div className="content flex justify-center w-full my-2">
                        <div className="image w-[80%]">
                            <img src={Lanjut} alt=""  className="size-fit"/>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}
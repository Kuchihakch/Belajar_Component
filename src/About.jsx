import { faCalendarAlt, faFile, faLocationDot, faTrophy, faUser } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataAchieve, dataProjects } from "./script/data";
export default function About(){
    return(
        <section className="tools flex flex-col items-center justify-center w-full min-h-screen font-[Poppins] text-black my-5 overflow-hidden">
            <div className="top text-center" data-aos="fade">
                <p className="AboutMe text-2xl font-bold text-blue-600">About Me</p>
                <p>Berikut Ini Adalah Beberapa Project dan Pencapaian yang Saya Miliki Saat ini</p> 
                <p className="italic">Here is My Project & My Achievement I've Reach.</p>   
            </div>
            <div className="card grid  lg:grid-cols-2 md:grid-rows-2 max-sm:scale-80 gap-3 place-content-center my-5 w-[80%]">
                {dataProjects.map(item => (
                <a key={item.id} href={item.href} className="card1 bg-white drop-shadow-md flex flex-col justify-between p-3 rounded-md w-fit hover:drop-shadow-blue-500 hover:drop-shadow-sm" data-aos="fade-up">
                    <div className="atas font-bold text-md flex gap-3 items-center">
                        <div className="logo rounded-full bg-blue-600 size-12 flex justify-center items-center">
                        <FontAwesomeIcon icon={faFile} className="text-white"/> 
                        </div>
                        <div className="text-content">
                            <p>Project {item.id} : {item.name}</p>
                            <p className="text-sm text-blue-600 font-semibold">{item.genre}</p>
                            {item.tags.map(it=>(
                            <div className="data flex gap-3 text-gray-400 text-xs">
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt}/>{it.year}</p>
                                <p className="flex items-center gap-1"><FontAwesomeIcon icon={faUser}/>{it.dev}</p>
                            </div>    
                            ))}
                            
                        </div>
                    </div>
                    <div className="info text-sm font-light p-3 text-justify w-full">
                            <p className="h-15">{item.description}
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
                ))}
                {dataAchieve.map(item => (
                    <a href="https://www.dicoding.com/certificates/KEXL2E4Y0ZG2" className="card3 bg-white drop-shadow-md p-3 rounded-md flex flex-col justify-evenly hover:drop-shadow-blue-500 hover:drop-shadow-sm" data-aos="fade-up">
                        <div className="atas font-bold text-md flex gap-3 items-center">
                            <div className="logo rounded-full bg-blue-600 size-12 flex justify-center items-center">
                            <FontAwesomeIcon icon={faTrophy} className="text-white"/> 
                            </div>
                            <div className="text-content">
                                <p>{item.title}</p>
                                <p className="text-sm text-blue-600 font-semibold">Achievement</p>
                                {item.tags.map(it => (
                                <div className="data flex gap-3 text-gray-400 text-xs">
                                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faCalendarAlt}/>{it.year}</p>
                                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faUser}/>{it.dev}</p>
                                    <p className="flex items-center gap-1"><FontAwesomeIcon icon={faLocationDot}/>{it.prov}</p>
                                </div>    
                                ))}
                            </div>
                        </div>
                        <div className="content flex justify-center w-full my-2">
                            <div className="image w-[80%]">
                                <img src={item.src} alt="E-Certificate" className="size-fit"/>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    )
}
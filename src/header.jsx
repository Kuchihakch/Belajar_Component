import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHouse, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header(){
    return(
        <nav className="flex top-5 fixed left-0 right-0 z-40 w-[90%] justify-between h-fit p-4 px-5 bg-linear-45 from-blue-400 to-blue-700 rounded-full shadow-lg text-shadow-md items-center m-auto text-white drop-shadow-lg" data-aos="slide-down">
            <p className="font-black text-2xl font-[Bebas_Neue] text-nowrap max-sm:text-lg flex items-center gap-3"><FontAwesomeIcon icon={faCode} />Welcome To my React Dev!</p>
            <ul className="flex gap-2 list-none max-sm:hidden font-[Poppins]">
                <li id="homeTrigger" className="btn bg-transparent hover:bg-white hover:text-blue-600 border-none shadow-none w-fit"><a href=""><FontAwesomeIcon icon={faHouse} /> Home</a></li>
                <li id="aboutTrigger" className="btn bg-transparent hover:bg-white hover:text-blue-600 border-none shadow-none w-fit"><a href=""><FontAwesomeIcon icon={faUser} /> About Me</a></li>
                <li id="contactTrigger" className="btn bg-transparent hover:bg-white hover:text-blue-600 border-none shadow-none w-fit"><a href=""><FontAwesomeIcon icon={faPhone} /> Contact</a></li>
            </ul>

            <div className="hamburger sm:hidden flex flex-col gap-1">
                <span className="h-1 w-6 bg-white rounded-md"></span>
                <span className="h-1 w-6 bg-white rounded-md"></span>
                <span className="h-1 w-6 bg-white rounded-md"></span>
            </div>
        </nav>
    )
}
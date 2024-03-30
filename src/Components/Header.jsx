import { useState } from "react";
import MenuResponsive from "./MenuResponsive";

const Header = () => {

    const [menuVisible, setMenuVisible] = useState(false);
    const handleMenu = () =>{
        setMenuVisible(!menuVisible);
    }

    return (
        <>
            <header className="absolute top-8 bg-transparent flex w-full h-10 content-center justify-between px-10 z-50">
                <nav className="">
                    <ul className="hidden md:flex space-x-10">
                        <li><a href="aboutMe">About Me</a></li>
                        <li><a href="gallery">Gallery</a></li>
                        <li><a href="projects">Projects</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                    <a href="#" className={`md:hidden uppercase ${menuVisible ? 'text-gray-200' : 'text-black'} tracking-wide text-xl z-50`}>Vyshnevets</a>
                </nav>
                <div className="hidden md:space-x-5 md:block">
                    <a href="#">ENG</a>
                    <a href="#">ESP</a>
                </div>
                <div className={`flex md:hidden cursor-pointer gap-x-1 z-50 ${menuVisible ? 'text-gray-200' : 'text-black'}`} onClick={handleMenu}>
                    <span className="text-xl">Menu</span>
                    {
                        menuVisible ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>
                       :
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    }
                    

                </div>
            </header>
            {menuVisible && <MenuResponsive onClose={handleMenu} />}
        </>
    )
}

export default Header;
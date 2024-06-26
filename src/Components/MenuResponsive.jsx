import { useState } from "react";

const MenuResponsive = ({onClose }) => {

    return (
        <>
            <div className={`fixed h-full w-full bg-black z-40`}>
                <nav className="h-full w-full relative">

                    <ul className="grid justify-center content-center space-y-12 text-center h-full">
                        <li className="bg-transparent border-2 border-white w-60 h-14 grid content-center" onClick={onClose}>
                            <a href="#aboutMe" className="text-gray-200 active:text-black active:bg-gray-200 text-xl">Sobre mí</a>
                        </li>

                        <li className="bg-transparent border-2 border-white w-60 h-14 grid content-center text-xl" onClick={onClose}>
                            <a href="#gallery" className="text-gray-200">Galería</a>
                        </li>

                        <li className="bg-transparent border-2 border-white w-60 h-14 grid content-center text-xl" onClick={onClose}>
                            <a href="#projects" className="text-gray-200">Proyectos</a>
                        </li>

                        <li className="bg-transparent border-2 border-white w-60 h-14 grid content-center text-xl" onClick={onClose}><a href="#contact" className="text-gray-200">Contactos</a>
                        </li>
                        <li className="flex justify-between text-gray-200 gap-x-10">
                            <a href="" className="text-5xl" onClick={onClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                                </svg>
                            </a>
                            <a href="" onClick={onClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="" onClick={onClose}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-10 w-10"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        </li>
                        <li className="flex content-center justify-center text-gray-200 gap-x-32 text-2xl">
                            <a href="#" onClick={onClose}>ENG</a>
                            <a href="#" onClick={onClose}>ESP</a>
                        </li>
                    </ul>
                        
                    <div className="">
                   
                </div>
                </nav>
               
            </div>
        </>
    )
}

export default MenuResponsive
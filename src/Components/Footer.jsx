

const Footer = () =>{
    return(
        <>
             <footer id="contact" className="grid md:grid-cols-2 gap-4 w-full degrade md:bg-black sm:h-96">
                <div className="grid grid-cols-1 p-10 content-center bg-black text-center w-full md:text-start md:justify-between space-y-8 order-2 md:order-1 text-gray-200">
                    <h2 className="uppercase text-gray-200 text-xl">Zoreslava Vyshnevets</h2>
                    <ul className="text-sm space-y-2">
                        <li><a href="#aboutMe">Sobre mí</a></li>
                        <li><a href="#gallery">Galería</a></li>
                        <li><a href="#projects">Proyectos</a></li>
                        <li><a href="#contact">Contactos</a></li>
                    </ul>
                    <ul className="flex justify-center w-full md:justify-start">
                        <li className="flex justify-between gap-x-2 w-28">
                            <a href="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="" className="text-5xl">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
                                </svg>
                            </a>
                            <a href="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="grid md:flex gap-5 w-full md:w-auto">
                        <span className="text-sm order-2 md:order-1">© {new Date().getFullYear()} Todos los derechos reservados.
                        </span>
                        <span className="text-sm order-1 md:order-2"><a href="#">Politicas de privacidad.</a></span>
                    </div>
                </div>
                <div className="space-y-2 text-center order-1 md:order-2 bg-transparent p-10">
                    <h2 className="uppercase text-2xl text-center md:hidden text-gray-200 tracking-wider mb-5">Contact</h2>
                    <h2 className="text-gray-200 text-sm">¿Alguna pregunta? Déjame una petición y me pondré en contacto contigo.</h2>
                    <div className="container mx-auto sm:py-4 space-y-3 text-gray-200 sm:space-y-0">
                        <div className="sm:flex sm:mb-3 mt-10 sm:mt-3 space-y-3 sm:space-y-0">
                            <input
                            type="text"
                            placeholder="e-mail"
                            className="w-full sm:w-1/2 p-2 sm:mr-2 border rounded bg-transparent border-gray-300 h-10"
                            />
                            <input
                            type="text"
                            placeholder="name"
                            className="w-full sm:w-1/2 p-2 sm:ml-2 border rounded bg-transparent border-gray-300 h-10"
                            />
                        </div>
                        <textarea
                            placeholder="message"
                            className="w-full p-2 border rounded border-gray-300 bg-transparent h-32"
                        ></textarea>
                        <div className="relative flex w-full justify-center">
                            <button className="bg-white absolute rounded-sm w-full sm:w-56 h-10 text-black top-2 cursor-pointer">contactame</button>
                        </div>

                        
                    </div>
                </div>
             </footer>
        </>
    )
}

export default Footer;
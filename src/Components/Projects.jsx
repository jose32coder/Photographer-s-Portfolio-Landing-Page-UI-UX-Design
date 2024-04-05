const Projects = () => {
    return(
        <>
            <section id="projects" className="py-10 px-5 md:p-10 bg-custom-gray">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-200">
                    <div>
                    <h2 className="text-center md:text-start uppercase text-2xl mb-5 tracking-wider">Proyectos</h2>
                        <p className="mb-12 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente libero ad expeditaptio pariatur, sit odit!</p>
                        <img src="/img/gallery/image5.jpg" alt="" />
                        <p className="mt-6 mb-3 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ullam, quis provident, magni, ab dolorum culpa quisquam totam iure tenetur molestiae quaerat atque sapiente ipsam.</p>
                        <p className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi fugit asperiores commodi porro nisi odio!</p>
                    </div>
                    <div className="space-y-5">
                        <img src="/img/gallery/image5.jpg" alt="" />
                        <img src="/img/gallery/image5.jpg" alt="" className="hidden md:block" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects
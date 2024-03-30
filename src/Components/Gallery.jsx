

const Gallery = () =>{
    
    return(
        <>
            <section id="gallery" className="degrade galleryGrid p-10">
                <h2 className="uppercase text-2xl text-center md:text-start text-gray-200 tracking-wider mb-8">Gallery</h2>
                
                <div class="masonry">
                    <div className="relative gallery-item">
                        <img src="/img/gallery/image1.jpg" alt="Imagen 1" className="object-cover w-full h-auto"/>
                    </div>
                    <div className="relative gallery-item">
                        <img src="/img/gallery/image2.jpg" alt="Imagen 2" className="object-cover w-full h-auto"/>
                    </div>
                    <div className="relative gallery-item">
                        <img src="/img/gallery/image3.jpg" alt="Imagen 2" className="object-cover w-full h-auto"/>
                    </div>
                    <div className="relative gallery-item">
                        <img src="/img/gallery/image4.jpg" alt="Imagen 2" className="object-cover w-full h-auto"/>
                    </div>
                    <div className="relative gallery-item">
                        <img src="/img/gallery/image5.jpg" alt="Imagen 2" className="object-cover w-full h-auto"/>
                    </div>
                    <div className="relative gallery-item">
                        <img src="/img/gallery/image6.jpg" alt="Imagen 2" className="object-cover w-full h-auto"/>
                    </div>

                    <button className="flex gap-2 bg-white rounded-sm h-8 p-1 w-full justify-center lg:gap-5">See all my photographs 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </section>
        </>
    )
}


export default Gallery
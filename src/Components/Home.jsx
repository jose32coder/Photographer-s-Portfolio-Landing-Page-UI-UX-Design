const Home = () =>{
    
    return(
        <>
            <section id="home" className="min-h-screen w-full flex justify-center bg-cover bg-center h-screen imageBackgroundResponsive md:imageBackground">
            <div className="absolute inset-0 bg-black opacity-10 imageDegrade"></div>
                <div className="text-center flex flex-col content-center mt-40 text-gray-100 z-10 w-full space-y-12 md:space-y-2">
                    <h1 className="uppercase text-5xl md:text-6xl text-center tracking-wide px-8 md:px-0">Zoreslava Vyshnevets</h1>
                    <span className="text-black text-2xl px-14 mt-4 w-26 md:w-auto">Ukranian photographer & wandering soul</span>
                </div>
                <button className="bg-white rounded-sm mt-4 w-56 h-10 text-black absolute bottom-1/4 md:bottom-56 md:right-10 cursor-pointer z-20">Discover my work</button>
            </section>

        </>
    )

}



export default Home;
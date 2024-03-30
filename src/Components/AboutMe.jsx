const AboutMe = () =>{

    return(
        <>
            <section id="aboutMe" className="grid md:grid-cols-5 gap-4 p-10 degrade">
                <div className="md:col-span-3 text-gray-200 space-y-4">
                    <h2 className="text-center md:text-start uppercase text-2xl mb-8 tracking-wider">About Me</h2>
                    <p className="w-5/5 md:w-4/5 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quiteligendi ipsum sequi ducimus consectetur aperiam sit eos at!</p>
                    <p className="text-sm"> Ipsum, quasi! Beatae nesciunt magni id ipsam incidunt.</p>
                    <img src="/img/aboutMe/about1.jpg" alt="About Me" />
                </div>
                <div className="col-span-2 hidden md:block">
                    <img src="/img/aboutMe/about2.jpg" alt="" />
                </div>
            </section>
            
        </>
    )

}



export default AboutMe;
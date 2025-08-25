import RevealOnScroll from "./effect"
import telkomsel from "./assets/telkomsel.jpg"

function Project(){
    return(
        <>
        <RevealOnScroll>
        <div className="top">
           <h3 className="textjudul">Portofolio<span className="JudulNama">Angga</span> </h3>
            <nav>
                <a href="/Home">Home</a>
                <a href="/Card">Program Language</a>
                <a href="/">Project</a>
            </nav>
        </div>
        </RevealOnScroll>
        <RevealOnScroll>
        <h2 className="judul3">Project</h2>
        </RevealOnScroll>
        <RevealOnScroll>
        <div className="projek1">
        <div className="cardprojek1">
            <div className="Telkomselimg">
                <img src={telkomsel} className="imgtelkom" alt="telkomsel"/>
            </div>
            <h2 className="NamaProjek">UI Aplikasi MyTelkomsel</h2>
            <div className="BoxBahasa">
                <p className="BahasaProgram">Flutter</p>
            </div>
        </div>
        </div>
        </RevealOnScroll>
        </>
    )
}

export default Project
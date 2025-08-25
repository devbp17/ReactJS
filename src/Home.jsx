import discord from "./assets/Discord.png"
import github from "./assets/Github.png"
import whatsapp from "./assets/Whatsapp.png"
import RevealOnScroll from "./effect.jsx";
import video from "./assets/video.mp4"

function Home(){
    return(
        <>
        <div className="video">
            <video autoPlay muted loop id="video-bg">
                <source src= {video} type="video/mp4"/>
            </video>
        </div>
        <body>
        <div className="top">
           <h3 className="textjudul">Portofolio<span className="JudulNama">Angga</span> </h3>
            <nav>
                <a href="./">Home</a>
                <a href="./Card">Program Language</a>
                <a href="./Project">Project</a>
            </nav>
        </div>
        <section id="Home">
        <RevealOnScroll>
        <div className="Part1">
        <div className="text">
        <h1>
            Hallo nama saya<span>Mahangga Wahyu Wisesa</span>
        </h1>
        <p className="description">saya adalah <div className="dev">Web</div> dan <div className="dev">Mobile</div> developer yang masih pemula, saya tertarik dengan dunia developer karena saya ingin membuat sesuatu hal dengan coding dan ini adalah website portofolio saya yang nantinya akan saya isi dengan project saya, program language yang saya kuasai dll</p>
        <div className="social">
            <p>Social Media</p>
        </div>
        <div className="logo">
            <a href="https://discordapp.com/users/978473614498234368"><img src={discord} alt="" /></a>
            <a href="https://github.com/devbp17"><img src={github} alt="" /></a>
            <a href="https://Wa.me/+6282139019321"><img src={whatsapp} alt="" /></a>
        </div>
        </div>
        </div>
        </RevealOnScroll>
        </section>
        </body>
        </>
    );
}

export default Home
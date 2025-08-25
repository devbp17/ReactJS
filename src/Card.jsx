import react from './assets/React.svg'
import flutter from './assets/flutter.svg'
import dart from './assets/dart.svg'
import HTML from './assets/HTML.svg'
import CSS from './assets/CSS3.svg'
import java from './assets/Java.svg'
import javascript from './assets/JavaScript.svg'
import RevealOnScroll from "./effect.jsx";

function Card(){

    return(
        <>
        <div className="top">
           <h3 className="textjudul">Portofolio<span className="JudulNama">Angga</span> </h3>
            <nav>
                <a href="/Home">Home</a>
                <a href="/">Program Language</a>
                <a href="/Project">Project</a>
            </nav>
        </div>
        <RevealOnScroll>
        <h2 className="judul2">
            Program Language
        </h2>
        </RevealOnScroll>
        <div>
        <section id="Program">
        <div className="part2">
            <RevealOnScroll>
            <h2>ProgramLanguage</h2>
            </RevealOnScroll>
            <RevealOnScroll>
            <div className='cardpos'>
            <div className="card">
                <h2>Flutter</h2>
                <img src={flutter} alt="Flutter" />
                <div className="progress">
                    <div className="progressFlutter"></div>
                </div>
                    <p>70%</p>
                </div>
            <div className="card">
                <h2>Dart</h2>
                <img src={dart} alt="dart" />
                <div className="progress">
                    <div className="progressDart"></div>
                </div>
                <p>90%</p>
                </div>
            <div className="card">
                <h2>HTML5</h2>
                <img src={HTML} alt="HTML" />
                <div className="progress">
                    <div className="progressHTML"></div>
                </div>
                <p>60%</p>
                </div>
            <div className="card">
                <h2>CSS3</h2>
                <img src={CSS} alt="CSS" />
                <div className="progress">
                    <div className="progressCSS"></div>
                </div>
                <p>55%</p>
                </div>
            </div>
            </RevealOnScroll>
            <RevealOnScroll>
            <div className='cardpos'>
                <div className="card">
                <h2>JavaScript</h2>
                <img src={javascript} alt="JavaScript" />
                <div className="progress">
                    <div className="progressJavaScript"></div>
                </div>
                <p>30%</p>
                </div>
            <div className="card">
                <h2>React</h2>
                <img src={react} alt="React" />
                <div className="progress">
                    <div className="progressReact"></div>
                </div>
                <p>60%</p>
                </div>
            <div className="card">
                <h2>Java</h2>
                <img src={java} alt="Java" />
                <div className="progress">
                    <div className="progressJava"></div>
                </div>
                <p>20%</p>
                </div>
            </div>
            </RevealOnScroll>
        </div>
        </section>
        </div>
        </>
    )
}

export default Card
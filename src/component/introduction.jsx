import removebg from '../picture/P-removebg-preview.png';
import facebook from '../picture/face.png';
import twitter from '../picture/twit.png'
import instagram from '../picture/ig.png'
import telegram from '../picture/tele.png'
import bullet from '../picture/Bullet Points.png'
import '../style/introduction.css'

function IntroductionPart () {
    return (
        <section className='whole-page'>
            <summary className='subsection-1'>
                <h2>Hi!</h2>
                <h1>
                    I'm Mohammad Reza. <br />
                    a Frontend developer.
                </h1>
                <p className='small-fraction-1'>
                    Frontend developer based in tehran, Iran. <br /> 
                    I am coding with a clean and beautiful problem <br />
                    solving in mind.
                </p>
                <div className='contact-section'>
                    <p className='small-fraction-2'>Follow me</p>
                    <img className='social1' src={facebook} />
                    <img className='social2' src={twitter} />
                    <img className='social3' src={instagram} />
                    <img className='social4' src={telegram} />
                </div>
                <div className='button-part'>
                    <button className='button-1'>Send Request</button>
                    <button className='button-2'>Download CV</button>
                </div>
            </summary>
            <div className='subsection-2'>
                <img src={removebg} />
                <img className='bullet1' src={bullet} />
                <img className='bullet2' src={bullet} />
            </div>

        </section>
    )
} 

export default IntroductionPart
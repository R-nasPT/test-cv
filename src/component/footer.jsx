import '../style/footer.css'
import squircle from '../picture/Squircle.png'
import ig from '../picture/ig2.png'
import tele2 from '../picture/tele2.png' 

function FooterPart () {
    return (
        <footer className='manage'>
            <div className='box'>
                <img src={squircle}/>
                <p>mmr315@gmail.com</p>
            </div>
            
            <p >© Copyright 2021 | mmrz315</p>
            
            <div className='box'>
                <img src={ig}/>
                <img src={tele2}/>
            </div>
            
        </footer>
    )
}

export default FooterPart
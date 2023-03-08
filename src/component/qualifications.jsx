import '../style/qualifications.css'
import group from '../picture/Group.png'
import layer from '../picture/Layer_65.png'
import jubmue from '../picture/jubmue.png'
import star from '../picture/star.png'

function QualificationsPart () {
    return (
        <section className="comprehensive">
            <h1>Why Hire Me?</h1>
            <div className='skill-part' >
                <div className='sub-skill'>
                    <img className='img-background' src={group} />
                    <p className='skill-title'>Communicative</p>
                    <p className='explain'>
                        Amet minim mollit non <br />
                        deserunt ullamco est sit <br />
                        aliqua dolor do amet sint. 
                    </p>
                </div>
                <div className='sub-skill'>
                    <img className='img-background' src={layer} />
                    <p className='skill-title'>Professional</p>
                    <p className='explain'>
                        Amet minim mollit non <br />
                        deserunt ullamco est sit <br />
                        aliqua dolor do amet sint. 
                    </p>
                </div>
                <div className='sub-skill'>
                    <img className='img-background1' src={jubmue} />
                    <p className='skill-title'>Collaborative</p>
                    <p className='explain'>
                        Amet minim mollit non <br />
                        deserunt ullamco est sit <br />
                        aliqua dolor do amet sint. 
                    </p>
                </div>
                <div className='sub-skill'>
                    <img className='img-background' src={star} />
                    <p className='skill-title'>Client's Favourite</p>
                    <p className='explain'>
                        Amet minim mollit non <br />
                        deserunt ullamco est sit <br />
                        aliqua dolor do amet sint. 
                    </p>
                </div>
                
            </div>
        </section>
    )
}

export default QualificationsPart
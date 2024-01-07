import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
    return (
<section id='intro'>
    <div className='introContent'>
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Tejashri</span> <br />Fullstack Software <br></br> Developer</span>
        <p className="introPara">I am a skilled S/W developer with 4 months of experience in <br></br>creating real time projects and applications</p>
   <Link> <button className="btn"><img src={btnImg} alt="hire me" className='btnImg'/>Hire Me! </button></Link>
    </div>
 <img src={bg} alt="Profile" className="bg" />    
</section>

    );
}
export default Intro;
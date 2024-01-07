import React from 'react'
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from'../../assets/app-design.png';
const Skills = () => {
  return (
   <section id='skills'>
     <span className="skillTitle">What I do</span>
     <span className="skillDescription">I am a skilled and passionate full stack developer with experience in creating visually appealing and user-friendly websites and apps. I have a strong understanding of development ,design and a keen eye for detail. I am proficient in java,reactjs,HTML, CSS and JavaScript, as well as design web applications such as portfolio,Emotion based Music recommendation system,phishing website detector.</span>
     <div className="skillBars">
     <div className="skillBar">
     <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
     <div className="skillBarText">
     <h2>UI/UX Design</h2>
     <p>Learning new skills of UI and UX design </p>
     </div>
     </div>
     <div className="skillBar">
     <img src={WebDesign}alt="WebDesign" className="skillBarImg" />
     <div className="skillBarText">
     <h2>WebDesign</h2>
     <p>I have Created an interactive and user friendly websites.</p>
     </div>
     </div>
     <div className="skillBar">
     <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
     <div className="skillBarText">
     <h2>AppDesign</h2>
     <p>This is app design section</p>
     </div>
     </div>
     </div>
   </section>
   );
}

export default Skills
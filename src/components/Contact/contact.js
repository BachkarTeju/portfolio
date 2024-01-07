import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
const Contact = () => {
  
    const form = useRef();
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_cmtitj5', 'template_v98k0dm', form.current, '3XhNP6yiKMVMP2VQ7')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('email sent');
        }, (error) => {
            console.log(error.text);
        });
      };
      return (
    <section id="contactPage">
<div id="clients">
<h1 className="contactpageTitle">Languages known</h1>
<p className="clientDesc">I have good understanding of following languages and database.</p>
<div className="clientImgs">
  <img src={Walmart} alt="Client" className="clientImg" />
  <img src={Facebook} alt="Client" className="clientImg" />
  <img src={ Adobe} alt=" Client" className="clientImg" />
  <img src={Microsoft } alt="Client" className="clientImg" />
</div>

</div>

<div id="contact">
<h1 className="contactpageTitle">Contact Me</h1>
<span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
<form className='contactForm' ref={form} onSubmit={sendEmail}>
    
    <input type="text" className="name" placeholder='Your name'name="your_name"/>
    <input type="email" className="email" placeholder='Your Email'name="your_email" />
    <textarea className='msg' name="msg"  rows="5" placeholder='Message'></textarea>
    <button type='submit' value='send' className="submitBtn">Submit</button>

<div className="links">
<img src={FacebookIcon} alt="Facebook" className="link" />
<img src={TwitterIcon} alt="Twitter" className="link" />
<img src={YoutubeIcon} alt="Youtube" className="link" />
<img src={InstagramIcon} alt="Instagram" className="link" />

</div>
</form>
 
 </div> 

    </section>
  );
}
export default Contact

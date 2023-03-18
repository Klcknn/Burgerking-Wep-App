import React from 'react';
import BannerImage from "../images/banner.png";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
      <div className='left_side' style={{ backgroundImage: `url(${BannerImage})`}}></div>
      <div className='right_side'>
        <h1>Bizimle İletişime Geçin</h1>
        <form action="">
          <label htmlFor="">Ad soyad</label>
          <input type="text" name='name' placeholder='Lütfen adınızı soyadınızı giriniz...'/>
          <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='Lütfen emailinizi giriniz...'/>
          <label htmlFor="">Mesajınız</label>
          <textarea rows={8} name='message' placeholder='Lütfen mesajınızı giriniz...'/>
        </form>
      </div>
    </div>
  )
}

export default Contact;
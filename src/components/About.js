import React from 'react';
import BannerImage from "../images/banneryeni.jpg";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1>Hakkımzda</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius soluta repellendus nostrum maxime consequuntur eaque, atque, 
          consectetur harum inventore est alias, unde ipsum totam dolore amet nemo aspernatur blanditiis? Cupiditate reprehenderit dolor
          saepe ducimus, enim nulla aperiam cum, libero perspiciatis maiores dolore? Voluptas itaque sapiente corporis eaque. Sed autem 
          distinctio quis ab. Obcaecati asperiores fugiat recusandae illum fugit ut dicta dignissimos, aut nisi eligendi, 
          tenetur perspiciatis corrupti sequi consequuntur doloribus deleniti. Fugit, eaque officiis. Aliquam, corporis, quam tenetur
          debitis unde blanditiis quas quisquam, facilis animi dicta eos sequi quis. Animi facere commodi officia pariatur, nihil aspernatur 
          odio perferendis dolore iste!
        </p>
      </div>
    </div>
  )
}

export default About;
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import Resume from '../../assets/Resume.pdf'
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Im Abhishek Singh,</span> Full stack developer based in INDIA.</h1>
        <p>I am a full stack developer for Delhi,INDIA with 1 year of experience in careernet technologies pvt ltd. </p>
        <div className="hero-acton"> 
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
          <div className="hero-resume"  href={Resume}>My Resume </div>

         
        </div>
    </div>
  )
}

export default Hero

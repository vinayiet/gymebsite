import React from 'react'
import Header from '../Header/header'
import './hero.css'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCounter from 'number-counter'
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">

        <Header />
        {/* the best ad starts */}

        <div className="the-best-ad">
          <div></div>
          <span>The best Gym in the Town</span>
        </div>


        {/* hero heading starts */}
        <div className="hero-text">
          <div><span className='stroke-text'>Sculpting</span><span> Your</span>
          </div>
          <div><span> ideal Body</span>
          </div>
          <div>  <span>Here we will help you the reshapre your body</span></div>

        </div>
        {/* figures */}
        <div className="figures">
        <div>
            <span><NumberCounter end={140} start={100} delay='4' prefix="+"></NumberCounter></span>
            <span>Experienced Coaches</span>
          </div>
          <div>
            <span><NumberCounter end={900} start={500} delay='4' prefix="+"></NumberCounter></span>
            <span>Members</span>
          </div>
          <div>
            <span><NumberCounter end={50} start={20} delay='4' prefix="+"></NumberCounter></span>
            <span>Plans</span>
          </div>
        
        </div>
        {/* hero buttons */}
        <div className="hero-buttons">
          <buttons className="btn">Get Started</buttons>
          <buttons className="btn">Learn more</buttons>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>


        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="" className='hero_image'/>
        <img src={hero_image_back} alt="" className='hero_image_back' />
       {/* calories */}
       <div className="calories">
        <img src={Calories} alt=""  />
        <div>
        <span>Calories burned </span><span> 200 kcal</span>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Hero

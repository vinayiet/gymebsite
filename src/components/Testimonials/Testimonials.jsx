import React, { useState } from 'react'
import './Testimonials.css'
import {testimonialsData} from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
const Testimonials = () => {
    const [selected, setSelected] = useState(0);
    const tLength = testimonialsData.length;
  return (
    <div className="testimonials">
        <div className="left-t">
       <span >Testimonials</span>
       <span className='stroke-text'> what they</span>
       <span > say</span>
       <span>
        {testimonialsData[selected].review}
       </span>
       <span>
        {testimonialsData[selected].name}
       </span>{" "}
       - {testimonialsData[selected].status}
        </div>


        <div className="right-t">
            <div>
            </div>
            <div></div>
    <img src={testimonialsData[selected].image} alt="" />
    <div className="arrows">
        <img onClick={()=>
         selected===0?setSelected(tLength-1):
         setSelected((prev)=> prev - 1)
        } src={leftArrow}/>
        
        <img  
          onClick={() =>
           selected===tLength-1 
           ? setSelected(0)
           : setSelected((prev)=> prev + 1) 
        }
        src={rightArrow} alt="" />
    </div>
        </div>
    </div>
  )
}

export default Testimonials

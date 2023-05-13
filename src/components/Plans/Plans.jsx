import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="program-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">READY TO JOIN</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">WITH US</span>
      </div>
      {/* plan cards */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, j) => (
                <div className="feature" key={j}>
                  <img src={whiteTick} alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>See more benefits</div>
            <div>
                <button className='btn'>Join Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;

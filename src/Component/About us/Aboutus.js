import './Aboutus.css';
import React, { useEffect, useRef, useState } from 'react';
import mysvg from './cool-background.svg';
import aboutimg from './aboutback.jpg';
import person1 from './p1.svg';

const About = ()=>{

    return (
        <div className='about' style={{ 
            backgroundImage: `url(${aboutimg})`,
            opacity: `0.9`,
            height: "100vh",
            marginTop: "-6px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}>
            {/* <img src={aboutimg} alt="Logo" /> */}
            <div className='about-team'>
                <div className='about-des'>
                    <div className='title-small'>
                        <p>MEET OUR TEAM</p>
                    </div>
                    <div className='title-big'>
                        <h2>Meet the Visionaries<br/>
                            Behind <span>BriefedIn</span><br/>
                            Where Imagination Meets Innovation.</h2>
                    </div>
                </div>
                <div className='about-member'>
                    <div className='title-short'>
                        <p>Shorya Gupta and Siddharth Mantri, the creative powerhouses behind Distem Studios, combine their expertise in 3D CGI and design to bring your brand to life with innovative visuals and captivating storytelling.</p>
                    </div>
                </div>
            </div>
            <div className='about-img'>
                <div className='card'>
                    <div className='person'>
                        <img src={person1} alt="Logo" />
                    </div>
                    <div className='info'>
                        <div className='name'>Anuj</div>
                        <div className='social'></div>
                    </div>
                    <div className='desc'>Website Developer</div>
                </div>

                <div className='card'>
                    <div className='person'>
                        <img src={person1} alt="Logo" />
                    </div>
                    <div className='info'>
                        <div className='name'>Anuj</div>
                        <div className='social'></div>
                    </div>
                    <div className='desc'>Website Developer</div>
                </div>

                <div className='card'>
                    <div className='person'>
                        <img src={person1} alt="Logo" />
                    </div>
                    <div className='info'>
                        <div className='name'>Anuj</div>
                        <div className='social'></div>
                    </div>
                    <div className='desc'>Website Developer</div>
                </div>

                <div className='card'>
                    <div className='person'>
                        <img src={person1} alt="Logo" />
                    </div>
                    <div className='info'>
                        <div className='name'>Anuj</div>
                        <div className='social'></div>
                    </div>
                    <div className='desc'>Website Developer</div>
                </div>
            </div>
        </div>
    ) 
}

export default About
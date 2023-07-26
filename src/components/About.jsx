import React from 'react'
import pr from "../assets/pr.png"
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';


const About = () => {
  return (
   <>

<div className='image ' id='About'>
<RubberBand>
   <h1>All you want to Know</h1>
   </RubberBand>
    </div>
    <div className='about'>
    <Fade left duration={2000}>
        <div className='ab'>
            <div>
            <h1>About me</h1>
            </div>
            <div>
            <p>
                Hello, my name is Arden you can call me denden for short, I became a full stack web developer because I always and enjoy interesting things in life, becoming a full pledged web developer makes me strive even further about the IT Industry. My friends and collegues told me that i was a curious and dependable person and i think that is true beacause when i do something i always want to see what is the end of it.
            </p>
            </div>
        </div>
        </Fade>


 <Fade left duration={1500}>
        <div className='ab'>
            <div>
                <h1>Academics</h1>
            </div>
            <div>
                <p>
                    I finished my high school at DSSF, Davao del Sur School of fisheries, and after that in the span of 2 years  i studied theology. And I also Studied BSED Bachelor of Science in Education in 3 years, I am always seeking new oppurtunity to make me stand for myself so the time that I saw the adds of kodego bootcamp I prayed to God that it is the right path of career for me, and thanks to God that I graduated last May 17, 2023 and receive the certificate of completion given by Mam Queza and Sir Von and the Kodego.
                </p>
            </div>
        </div>
        </Fade>

        <Fade left duration={1000}>
        <div className='ab'>
            <div>
                <h1>Qualification and Skills</h1>
            </div>
            <div>
                <h6>Hard Skills</h6>
                <li>HTML Hypertext Markup Language</li>
                <li>JAVASCRIPT</li>
                <li>CSS Cascading Style Sheets </li>
                <li>MYSQL</li>
                <li>LARAVEL</li>
                <h6>Soft Skills</h6>
                <li>Communication</li>
                <li>Critical Thingking</li>
                <li>Teamwork</li>
                <li>Adaptability</li>
                <li>Time Management</li>
               
                
            </div>         
        </div>
        </Fade>
    </div>
   
   </>
  )
}

export default About
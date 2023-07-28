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
            Hello there!

Hey, I'm Arden, and I'm thrilled to introduce myself as a passionate web developer. With a strong foundation in programming and an eye for design, I love creating beautiful and functional websites that leave a lasting impact on users.

My journey as a web developer started several months ago when I first dabbled in HTML and CSS . Since then, my curiosity and fascination for web development have only grown stronger. I expanded my skill set to include JavaScript, which enabled me to add interactivity and dynamic elements to my projects, making them more engaging and user-friendly.
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
                    I finished my high school at DSSF, Davao del Sur School of fisheries, and after that in the span of 2 years  i studied theology. And I also Studied BSED Bachelor of Secondary Education in 3 years, I am always seeking new oppurtunity to make me stand for myself so the time that I saw the adds of kodego bootcamp I prayed to God that it is the right path of career for me, and thanks to God that I graduated last May 17, 2023 and receive the certificate of completion given by Mam Queza and Sir Von and the Kodego.
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
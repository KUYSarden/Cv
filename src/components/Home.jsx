import React from 'react'
import profile1 from '../assets/profile1.png'
import atom from '../assets/atom.png'
import Typed from "react-typed"
import c1 from '../assets/c1.png'

const Home = () => {
  return (
    <div className='Homepage'>
        <div className='sect1'>
          <h1>Hello, I am</h1>
          <h3>
            Arden Flores
          </h3>
          <h4>
            Im a <span >
              <Typed  
              strings={[
                " Full Stack Web Developer",
                "Frontend Developer",
                "Backend Developer",
              ]}
              typeSpeed={100}
              backSpeed={100}
              loop
            />
            </span>
          </h4>
          <p>
            “I have a motto on my bedroom wall: ‘Obstacles are what you see when you take your eye off the goal.‘ Giving up is not my style. I just want to do something that's worthwhile.” — Chris Burke
          </p>
          <div className='lihome'>
            <a href=""><i class='bx bxl-facebook-circle'></i></a>
            <a href="https://github.com/KUYSarden"><i class='bx bxl-github' ></i></a>
            <a href=""><i class='bx bxl-gmail' ></i></a>
            <a href=""><i class='bx bxl-instagram' ></i></a>
            <a href="https://www.linkedin.com/in/arden-flores-a29681278/"><i class='bx bxl-linkedin'></i></a>
          </div>
          <div className='download'>
            <a href={c1} download>Download CV</a>
          </div>
          
        </div>
        <div className='home-image'>
          <img className='
          profile' src={profile1} alt="" srcset="" />
        </div>

        <div>
          <img className='atom' src={atom} alt="" />
        </div>

      
    </div>
  )
}

export default Home
import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='social'> 
        <a href=""><i class='bx bxl-facebook-circle'></i></a>
            <a href="https://github.com/KUYSarden"><i class='bx bxl-github' ></i></a>
            <a href=""><i class='bx bxl-gmail' ></i></a>
            <a href=""><i class='bx bxl-instagram' ></i></a>
            <a href="https://www.linkedin.com/in/arden-flores-a29681278/"><i class='bx bxl-linkedin'></i></a>
        </div>
        <div className='links'>
            <a href="">Info.</a>*
            <a href="">Support.</a>*
            <a href="">Marketing</a>
        </div>
        <div>
            <p>@ 2023 Arden.o.Flores</p>
        </div>
    </div>
  )
}

export default Footer
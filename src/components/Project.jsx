import React, { useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png'
import a3 from '../assets/a3.png'
import a4 from '../assets/a4.png'
import a5 from '../assets/a5.png'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import c5 from '../assets/c5.png'
import c6 from '../assets/c6.png'
import c7 from '../assets/c7.png'
import c8 from '../assets/c8.png'
import c9 from '../assets/c9.png'

const Project = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showp1, setShowp1] = useState(false);
    const handleClosep1 = () => setShowp1(false);
    const handleShowp1 = () => setShowp1(true);

    const [showc1, setShowc1] = useState(false);
    const handleClosec1 = () => setShowc1(false);
    const handleShowc1 = () => setShowc1(true);





  return (
   <>
   <div className='project-body' id='Project'>
   <div>
    <h3>PROJECTS</h3>
   </div>
   <div className='project'>
   <div className='cards'>
   <Card style={{ width: '25rem' }}>
      <Card.Img onClick={handleShowp1} variant="top" src={a1} />
      <div class="middle">
    <div onClick={handleShowp1} class="text">Show more</div>
  </div>
      <Card.Body>
        <Card.Title>Food is Life</Card.Title>
        <Card.Text>
        <li>This is the first project I made during the bootcamp.</li>
        <li>It contains html, css, scss, bootstap .</li>
        <li>Mobile Responsive</li>
        </Card.Text>
        <div className='card-links'>
      <a href=" https://kuysarden.github.io/mini-project-1/">Visit Site</a>
       <a href="https://github.com/KUYSarden/mini-project-1.git">Github</a>
      </div>
      </Card.Body>
    </Card>
    
   </div>


   <div className='cards'>
   <Card style={{ width: '25rem' }}>
      <Card.Img onClick={handleShow} variant="top" src={b1} />
      <div class="middle">
    <div onClick={handleShow} class="text">Show more</div>
  </div>
      <Card.Body>
        <Card.Title>Blog Website</Card.Title>
        <Card.Text>
         <li>
         This is the second project I made in the bootcamp, we have 3 persons in ours team. We did planning and helping each other through sharing ideas and collaborating.
         </li>
        </Card.Text>
      <div className='card-links'>
      <a href="https://mini-project-2-duoa.onrender.com">Visit Site</a>
       <a href="https://github.com/KUYSarden/miniproject2.git">Github</a>
      </div>
      </Card.Body>
    </Card>

   </div>

   <div className='cards'>
   <Card style={{ width: '25rem' }}>
      <Card.Img  variant="top" src={c8} />
      <div class="middle">
    <div onClick={handleShowc1} class="text">Show more</div>
  </div>
      <Card.Body>
        <Card.Title>Buy and Sell</Card.Title>
        <Card.Text>
         <li>This is the last project I made in the bootcamp.</li>
         <li>We only had 2 person in ours team,</li>
         <li>I mainly work in the backend while my partner work in the frontend and sometimes I help in the frontend.</li>
         <li>We use laravel project, php for database, and javascript, html, css, react botstrap.</li>
        </Card.Text>
       <a style={{color: '#0b415a', textDecoration: 'none'}} href="https://github.com/OwenXV/Capstone-_FE.git">Live Demo</a>
      
      </Card.Body>
    </Card>
   </div>
   </div>
   </div>













  

   <Modal show={show} onHide={handleClose}>
   <Carousel>
   <Carousel.Item>
        <img
          className="d-block w-100"
          src={b1}
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b3}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={b4}
          alt="Third slide"
        />

        
      </Carousel.Item>
     
    </Carousel>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>











      <Modal show={showp1} onHide={handleClosep1}>
   <Carousel>
   <Carousel.Item>
        <img
          className="d-block w-100"
          src={a1}
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={a3}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={a2}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={a4}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={a5}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosep1}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>









      <Modal show={showc1} onHide={handleClosec1}>
   <Carousel>
   <Carousel.Item>
        <img
          className="d-block w-100"
          src={c1}
          alt="First slide"
        />
       
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c2}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c3}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c4}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c5}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c6}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c7}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c8}
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={c9}
          alt="Third slide"
        />

        
      </Carousel.Item>
    </Carousel>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosec1}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>





   
   </>
  )
}

export default Project
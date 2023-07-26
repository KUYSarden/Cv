import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Wobble from 'react-reveal/Wobble';


const Result =() => {
    return (
        <p>
            Your message has been successfully sent.
        </p>
    )
}

const Contact = () => {


    const form = useRef();
    const [result, showResult] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_yd7asck', 'template_0iwiobt', form.current, '436L1pF7ntKGC52Ky')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };



  return (
    <div className='contact' id='Contact'>

    <div>
      <div>
      <Wobble>
        <h1>Get in touch</h1>
        </Wobble>
      </div>
      <div className='hcontact'>
        <h4>
          Got a question, proposal or project or want to work together on something? Feel free to reach out.
        </h4>    
      </div>
      </div>

   <form ref={form} onSubmit={sendEmail}>


   <div  className='input'>
    <div className="form__group field">
       <input type="text" className="form__field" placeholder="Name" name="from_name" id='name' required />
      <label for="name" className="form__label">Name</label>
      </div>
      <div className="form__group field">
       <input type="email" className="form__field" placeholder="Email" name="email" id='email' required />
      <label for="email" className="form__label">Email Adress</label>
      </div>
      </div>

   <div className='input2'>
   <div className="form__group1 field">
       <input type="text" className="form__field1" placeholder="Text" name="message" id='text' required />
      <label for="text" className="form__label1">Message</label>
      </div>
   </div>

   <div className='button'>
   <input type="submit" value="Send" />
   </div>

   <div className='row'>{result ? <Result /> : null}</div>
     
    

   </form>
    
     
      
    </div>
  )
}

export default Contact
import React from 'react'


const Contact=() =>{  
  
  return (
    <section className="Contact">
      <form >
      <h2>Contact Form</h2>
        <div className='input-box'>
        <label for="name">Name:</label>
        <input type="text" className="field" placeholder ="enter your name" required/><br/><br/>
        </div>

        <div className='input-box'>
        <label for="name">Email:</label>
        <input type="email" className="field"  placehoder="Enter your Email" required/><br/><br/>
        </div>

        <div className='input-box'>
       <label for="text">Message:</label>
        <textarea name=""  placehoder="Enter your message" required></textarea><br/><br/>
        </div>
        <button type="submit">Send Message</button>
</form>
</section>
      
      
  
  )
}

export default Contact

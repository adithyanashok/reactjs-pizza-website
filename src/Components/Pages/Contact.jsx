import React from 'react'
import PizzaLeft from '../../assets/pizzaLeft.jpg'
import './Contact.css'
function Contact() {
    return (
        <div className='contact' >
            <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}> 

            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>

                <form action="" id='contact-form' method='POST'>
                    <label htmlFor="name">Full Name</label>
                    <input name='name' placeholder='Enter Your Full Name' type="text" />

                    <label htmlFor="email">Enter Email</label>
                    <input name='email' placeholder='Enter Your Email' type="email" />

                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="" cols="30" rows="10"></textarea>
                    <button type='submit' >Send Message</button>

                </form>
            </div>
        </div>
    )
}

export default Contact

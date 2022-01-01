import React from 'react'
import MultiplePizza from '../../assets/multiplePizzas.jpeg'
import './About.css'
function About() {
    return (
        <div className='about' >
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizza})` }} ></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                     Fugit eaque voluptas nisi nobis accusantium, quaerat sapiente
                      fugiat ducimus deleniti exercitationem quia consequuntur in.
                       Temporibus ipsum nostrum explicabo tempora tempore dignissimos,
                        itaque iure numquam labore rerum eius odio optio minus! Libero 
                        nobis id veritatis dicta possimus doloribus qui! Sunt perspiciatis
                         dignissimos optio, iusto qui repellat adipisci quibusdam exercitationem
                        in amet enim repellendus maiores sapiente necessitatibus quisquam quasi
                </p>
            </div>
        </div>
    )
}

export default About

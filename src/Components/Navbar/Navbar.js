import React, { useState } from 'react'
import Logo from '../../assets/pizzaLogo.png'
import './Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import {Link} from 'react-router-dom'
function Navbar() {
    const [state, setstate] = useState(false)
    const toggleLinks = () =>{
        setstate(!state) 
    }
    return (
        <div className='navbar' >
            <div className="leftSide" id={!state ? "close" : "open"}>
                <img className="logo" src={Logo} alt="" />
                <div className="hiddenLinks">
                    <Link to='/' >Home</Link>
                    <Link to='/menu' >Menu</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/contact' >Contact</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to='/' >Home</Link>
                <Link to='/menu' >Menu</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact</Link>           
                <button onClick={toggleLinks} >
                   { !state ? <ReorderIcon/> : <CloseIcon/>  } 
                </button>

            </div>
        </div>
    )
}

export default Navbar

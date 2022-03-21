import React from "react";
import './style.css'
import {Link} from 'react-router-dom'

export default () => {

    return(
        <header >
            <div className="header--logo">
                <Link to='/'><img src="https://images.vectorhq.com/images/previews/cd8/marvel-logo-psd-444569.png" alt="Logo Marvel"/></Link>
            </div>
        </header>
    )
}
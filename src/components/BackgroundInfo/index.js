import React from "react";
import './style.css'

export default ({items}) => {
    return(
        <section className="background" style={{
            backgroundSize: 'center',
            backgroundImage: `url(${items.thumbnail.path}.jpg)`,
        }}>
           <div className="background--vertical">
                <div className="background--horizontal">
                <img src={`${items.thumbnail.path}.jpg`}/>

                </div>
            </div>
        </section>
    )
}
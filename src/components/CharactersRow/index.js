import React from "react";
import './style.css'
import {Link} from 'react-router-dom'

export default ({title, items}) => {

    return(    
        <div className="characterRow--item">
            <h2>{items.data.results[0].name}</h2>
            <h3>({title})</h3>                           
                {items.data.results.map((item, key)=>(
                <div className="box">
                    <div  className="characterRow--img">
                        <Link to={`/info/${items.data.results[0].id}`}><img key={key} src={`${item.thumbnail.path}/portrait_incredible.jpg`}/></Link>
                        </div>
                    </div>
                ))}                                
        </div>
        
    )
}


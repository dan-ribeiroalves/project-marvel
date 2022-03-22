import React, {useState} from "react";
import './style.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default ({comics ,items}) => {

    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () =>{
        let x = scrollX + Math.round(window.innerWidth / 2)
        if(x > 0){
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () =>{
        let x = scrollX - Math.round(window.innerWidth / 2)
        let listW = comics.results.length * 300
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW)
        }
        setScrollX(x)
    }
    
    return(
        <div className="info">
            <h1>{items.name}</h1>
            <div className="description">
                {items.description.length === 0 ? 'Without description...' : items.description}
            </div>
            <div className="area">
            <div className="icon--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="icon--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>
                <div className="list" style={{
                    marginLeft: scrollX,
                    width: comics.results.length * 300
                }}>
            {comics.results.map((item, key)=>(
                <div className="comics">
                <img key={key} src={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
            </div>
            ))} 
            </div>
            </div>
        </div>
    )
} 
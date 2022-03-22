import React, {useEffect, useState} from "react";
import './style.css'
import {useParams, useHistory} from 'react-router-dom'
import Marvel from "../../services/Marvel";
import BodyInfo from "../../components/BodyInfo";
import BackgroundInfo from "../../components/BackgroundInfo";
import Loading from "../../components/Loading";

export default () => {

    const {id} = useParams()
    const history = useHistory()
    const [character, setCharacter] = useState([])
    const [listStories, setListStories] = useState([])
    const [loading, setLoading] = useState(true)
      
    useEffect(()=>{
        const loadAll = async () =>{
        const infoCharacter = await Marvel.getCharacter(id)
        const stories = await Marvel.getComics(id)
        
        if(infoCharacter.items.code === 404){
            history.replace('/')
            return
        }

        setCharacter(infoCharacter)
        setListStories(stories)
        setLoading(false)
        }

        loadAll()
    },[history ,id])

    if(loading){
        return(
           <div>
               <Loading/>
           </div> 
        )
    }

    return(
        <div>
            <section className="background--info">
            <BackgroundInfo items={character.items.data.results[0]}/>
            </section>
            <section className="body--info">
            <BodyInfo comics={listStories.comics.data} items={character.items.data.results[0]}/>
            </section>
        </div>
    )
}
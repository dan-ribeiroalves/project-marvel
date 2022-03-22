import React,{useEffect, useState} from "react";
import Marvel from "../../services/Marvel";
import CharactersRow from "../../components/CharactersRow";
import Background from "../../components/Background";
import './style.css'
import Loading from "../../components/Loading";

export default () => {

  const [charactersList, setCharactersList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      const loadAll = async () => {
      let list = await Marvel.getList()
      setCharactersList(list)
      setLoading(false)

    }
    loadAll()
  },[])


  if(loading){
    return(
      <div>
        <Loading/>
      </div>
    )
  }
  
  return(    
    <div className="page">  
        <Background/>
          <section className="lists">
          {charactersList.map((item,key)=>(
          <CharactersRow key={key} title={item.title} items={item.items}/>          
        ))}
          </section>
    </div>
  )
}
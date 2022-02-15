import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './CharacterDetail.css'
import {Link} from 'react-router-dom'


function CharacterDetail() {
    const {id} = useParams()
    

    const [rickAndMortyDeets, setRickAndMortyDeets] = useState([])

    const handleFetch = async() => {
        const URL = "https://rickandmortyapi.com/api/character/"+id
            fetch(URL)
            .then((res) => res.json())
            .then((json) => {
            
            setRickAndMortyDeets(json)
         } )
            .catch(error=> {
            console.log(error)
         })
  
     }
  useEffect(() => {
    handleFetch()
  }, [])

  return (
      <div className='details-page'>
            <ul className='character-image'>
                <img src={rickAndMortyDeets.image} alt="faceOfCharacter"></img>
            </ul>
            
            <ul className='character-details'>
               <Link to="/locations/"><button className='burb-button'>Burb</button></Link> 
                <li>{rickAndMortyDeets.name}</li>
                <li>Status:{rickAndMortyDeets.status}</li>
                <li>Species:{rickAndMortyDeets.species}</li>
                <li>Gender:{rickAndMortyDeets.gender}</li> </ul>
                
             
            
            
           
      </div>
      
                                           
  )
}
  


export default CharacterDetail
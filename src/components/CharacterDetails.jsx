import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './CharacterDetail.css'
// import {Link} from 'react-router-dom'


function CharacterDetail() {
    const {id} = useParams()
    console.log("Morty! this is the characters detail #", id)

    const [rickAndMortyDeets, setRickAndMortyDeets] = useState([])

    const handleFetch = async() => {
        const URL = "https://rickandmortyapi.com/api/character/"+id
            fetch(URL)
            .then((res) => res.json())
            .then((json) => {
            console.log(json)
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
      <div>
          <h2>Rick! Tell me this is the individual character details page </h2>
              
          
            <ul>
                <img src={rickAndMortyDeets.image} alt="faceOfCharacter"></img>
                <li>{rickAndMortyDeets.name}</li>
                <li>Status:{rickAndMortyDeets.status}</li>
                <li>Species:{rickAndMortyDeets.species}</li>
                <li>Gender:{rickAndMortyDeets.gender}</li>
                {/* <li>Location:{rickAndMortyDeets.location.name}</li> */}

            </ul> 
        <button>Location</button>
      </div>
      
                                           
  )
}
  


export default CharacterDetail
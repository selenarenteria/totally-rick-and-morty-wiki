import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'




function LocationDetail() {
    const {id} = useParams()
   

    const [locationDeets, setLocationDeets] = useState([])

    const handleFetch = async() => {
        const URL = "https://rickandmortyapi.com/api/location/"+id
            fetch(URL)
            .then((res) => res.json())
            .then((json) => {
            console.log(json)
            setLocationDeets(json)
         } )
            .catch(error=> {
            console.log(error)
         })
  
     }
  useEffect(() => {
    handleFetch()
  }, [])
    return(
        <div>
          
           <p>Rick and Morty Worlds:</p>
           <ul>
               <li>Name:{locationDeets.name}</li>
               <li>Type:{locationDeets.type}</li>
               <li>Dimension:{locationDeets.dimension}</li>
               
           </ul>

           <Link to="/locations/"><button>Rick and Morty World</button></Link>
           
            
        </div>
        
       
    )
}


export default LocationDetail
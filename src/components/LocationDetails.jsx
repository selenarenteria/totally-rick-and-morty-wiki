import {useParams, Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import './LocationDetails.css'



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
    return(<div className='everything'>
          <ul className='world-details'>
           <p>Rick and Morty Worlds:</p>
           
               <li>Name: {locationDeets.name}</li>
               <li>Type: {locationDeets.type}</li>
               <li>Dimension: {locationDeets.dimension}</li>
               
           </ul>

           <Link to="/locations/"><button className='world-button'>Rick and Morty World</button></Link>
           
        <style>
         @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap');
         </style>
        </div>
        
       
    )
}


export default LocationDetail
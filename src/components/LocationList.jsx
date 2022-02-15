import {Link} from 'react-router-dom'
import './LocationList.css'


function LocationList(props) {
   
    
    return(<div className='whole-thing'>
      <Link to="/character/"><button className="rick-and_morty">Rick and Morty Characters</button></Link>  
    <section className="container-world">    
    {props.rickAndMortyLocation.map((allLocations, index) =>{
       
        return(
            <Link to={`/locations/${allLocations.id}`} key={index}>
                <div className="rick-morty_world">
                    <ul>
                        <li>{allLocations.name}</li>
                    </ul>
                      
                    </div>     
                 </Link>
             )
         })}  
        </section>

        
    </div>
        
        
        
    )
}


export default LocationList
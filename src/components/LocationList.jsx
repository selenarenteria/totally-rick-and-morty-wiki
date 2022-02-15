import {Link} from 'react-router-dom'


function LocationList(props) {
   
    
    return(<div>
      <Link to="/character/"><button>Rick and Morty Characters</button></Link>  
    <section className="container">
         
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
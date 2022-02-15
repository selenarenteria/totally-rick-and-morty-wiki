import React from 'react'
import {Link} from 'react-router-dom'
import './CharacterList.css'

function CharacterList(props){
    return(
    <div>
        <Link to="/"><button className='take-me'>Take Me Home Morty</button></Link>
       
        <section className="container">
        
        {props.character.map((allRickandMortyChar, index) =>{
            
               return(
                    <Link to={`/characters/${allRickandMortyChar.id}`}key={index}>
                    <div className="card" key={index}>
                        <div className="image-card" >
                        <img src={allRickandMortyChar.image} alt="characterPic"/>
                        </div>
                        <div className="title-card" >
                            {allRickandMortyChar.name}
                            
                        </div>
                            
                    </div>   
                    </Link>
                    )
            })}
            </section>

        </div>  
        
    )
}

export default CharacterList
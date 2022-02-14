import React from 'react'
import {Link} from 'react-router-dom'
import './CharacterList.css'

function CharacterList(props){
    
    
    // console.log('Morty show me the characters list', props)

    return(
    <div>

        <h2>Character List page </h2>
        <section className="container">
        
        {props.character.map((allRickandMortyChar, index) =>{
            console.log(props.character)
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
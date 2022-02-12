import {Link} from 'react-router-dom'

function CharacterList(props){
    
    console.log('Morty show me the characters list', props)

    return(
    <div>

        <h2>Character List page </h2>
        <section className="container">
        
        {props.character.map((allRickandMortyChar, index) =>{
               return(
                    <Link to={`/characters/${allRickandMortyChar.results}`}key={index}>
                    <div className="card" key={index}>
                    <div className="image-card" >
                        <img src={allRickandMortyChar.image} alt="characterPic"/>
                        </div>
                        <div className="title-card" >
                            {allRickandMortyChar.name}
                        </div>
                            {/* <li>    
                                Name:{allRickandMortyChar.name}
                                Status: {allRickandMortyChar.status}
                                Species: {allRickandMortyChar.species}
                                Gender: {allRickandMortyChar.gender}
                                Origin: {allRickandMortyChar.origin.name}
                            </li> */}
                    </div>   
                    </Link>
                    )
            })}
            </section>

        </div>

        
    
        
    )
}

export default CharacterList
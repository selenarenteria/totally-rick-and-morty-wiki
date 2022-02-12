

function CharacterList(props){
  

    console.log('Morty show me the characters list', props)

    return(
    <div>

        <h2>Character List page </h2>
           {props.allCharacter.map((allRickandMortyChar, index) =>{
               return(
                <section className="container" key={index}>
                    <div className="card" >
                        <div className="image-card" >
                            <img src={allRickandMortyChar.image} alt="character pic"/>
                            
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
                       
               </section>        

                    )
            })}
           

        </div>

        
    
        
    )
}

export default CharacterList
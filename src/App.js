import './App.css';
import {useEffect, useState} from 'react'
import React from 'react'


// components
import CharacterList from './components/CharacterList';




function App() {
  const [rickandmorty, setRickAndMorty] = useState([])

   const URL = "https://rickandmortyapi.com/api/character"

   useEffect(() => {

      fetch(URL)
      .then((res) => res.json())
      .then((json) => {
      console.log('fetching Rick and Morty Characters with useEffect', json.results)
      setRickAndMorty(json.results)
    } )
      .catch(error=> {
        console.log(error)
      })

    }, [])

  //  if (!rickandmorty){
  //    <h2> Ricks voice "Today has been a total Morty"</h2>
  //  }

return (
    <div className="App">
      <h1>This is the Welcome page!</h1>
      <div>
       
        <CharacterList 
        
          character={rickandmorty}
        
        />
        
      </div>
       
    </div>
  );
}

export default App;

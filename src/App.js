import './App.css';
import {useEffect, useState} from 'react'


// components
import CharacterList from './components/CharacterList';




function App() {
   const [characterlist, setCharacterList] = useState([])

   const URL = "https://rickandmortyapi.com/api/character"

   useEffect(() => {

    fetch(URL)
    .then((res) => res.json())
    .then((json) => {
      console.log('fetching Rick and Morty Characters', json.results)
      setCharacterList(json.results)
    } )
    .catch(console.error)

   }, [])

   if (!characterlist){
     <h2> Ricks voice "Today has been a total Morty"</h2>
   }

return (
    <div className="App">
      <h1>This is the Welcome page!</h1>
      <CharacterList />
    </div>
  );
}

export default App;

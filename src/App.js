import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import {Routes, Route}  from 'react-router-dom'


// components

import CharacterList from './components/CharacterList'
import Home from './Home'
import CharacterDetail from './components/CharacterDetails';


function App() {
  const [character, setCharacter] = useState([])
    
    const handleFetch = async() => {
      const URL = "https://rickandmortyapi.com/api/character/"
          fetch(URL)
          .then((res) => res.json())
          .then((json) => {
          
          setCharacter(json.results)
       } )
          .catch(error=> {
          console.log(error)
       })

   }
useEffect(() => {
  handleFetch()
}, [])


return (
  <div className="App">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character/" element={ <CharacterList setCharacter={setCharacter} character={character}/> } />
      <Route path="/characters/:id" element= {<CharacterDetail />} /> 
     
     </Routes>
    
  </div>
  );
}

export default App;

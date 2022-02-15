import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import {Routes, Route}  from 'react-router-dom'


// components

import CharacterList from './components/CharacterList'
import Home from './Home'
import CharacterDetail from './components/CharacterDetails';
import LocationList from './components/LocationList';
import LocationDetail from './components/LocationDetails';


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
},[])

const [rickAndMortyLocation, setRickAndMortyLocation] = useState([])

    const manageFetch = async() => {
    const URL = "https://rickandmortyapi.com/api/location/"
        fetch(URL)
        .then((res) => res.json())
        .then((json) => {
        setRickAndMortyLocation(json.results)
    } )
        .catch(error=> {
        console.log(error)
     })
          
    }
    useEffect(() => {
        manageFetch()
 }, [])


return (
  <div className="App">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/character" element={ <CharacterList setCharacter={setCharacter} character={character}/> } />
      <Route path="/characters/:id" element= {<CharacterDetail />} /> 
      <Route path="/locations/:id" element= {<LocationDetail />} />
      <Route path="/locations/" element= {<LocationList setRickAndMortyLocation={setRickAndMortyLocation} rickAndMortyLocation={rickAndMortyLocation} />} />
     
     </Routes>
    
  </div>
  );
}

export default App;

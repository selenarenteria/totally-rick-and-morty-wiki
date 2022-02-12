import './App.css';
import React from 'react'
import {useState, useEffect} from 'react'
import {Routes, Link, Route}  from 'react-router-dom'


// components
import CharacterList from './components/CharacterList'


function App() {
  const [character, setCharacter] = useState([])
    
    const handleFetch = async() => {
      const URL = "https://rickandmortyapi.com/api/character"
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

function Home(){
 return(
   <h2>This is the welcome page</h2>

) 
}
return (
  <div className="App">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/characterlist" element={ <CharacterList setCharacter={setCharacter} character={character}/> } />
     
     </Routes>
     <Link to="/characterlist"><button>Click me!</button></Link>
  </div>
  );
}

export default App;

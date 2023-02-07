import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import About from './components/About';
import Detail from './components/Detail';

function App () {
  const [characters, setCharacters] = useState([])

  const onClose = (id)=>{
    setCharacters(
      characters.filter(character => character.id !== id)
    )

 }

  
  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)

       .then((response) => response.json())
       .then((data) => {

          if (data.name) {
            var exist = characters.find((e)=> e.id === data.id )
            if(exist){
              alert('Ese id ya lo agregaste')
            }else{
              setCharacters((oldChars) => [...oldChars, data]);  
            }

          } else {
             window.alert('No hay personajes con ese ID');

          }
       });
 }

 
  return ( 
    <div className="App">
          <div>
              <Nav onSearch={onSearch}/>
          </div>
        <Routes>
            <Route path='/' element={<Login/>} /> 
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            <Route path='/about' element={<About/>} /> 
            <Route path='/detail/:detailId' element={<Detail/>} /> 
  
      
        </Routes>
      </div>
  )
}

export default App

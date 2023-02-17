import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import React, { useState, useEffect} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form.jsx';
import About from './components/About';
import Detail from './components/Detail';

function App () {

  const [access, setAccess] = useState(false)
  const username = 'adrian@hotmail.com'
  const password = '309411Adrian'
  const navigate = useNavigate()
  const location = useLocation() 
  const [characters, setCharacters] = useState([])

  function login(userData) {
    if (userData.password === password && userData.username === username) {
       setAccess(true);
       navigate('/home');
       alert("Bienvenido")
    }else{
      alert('TU USERNAME O PASSWORD NO SON INCORRECTOS')
    }
 }
  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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
              {location.pathname === '/' ? null:<Nav onSearch={onSearch}/> }
          </div>
        <Routes>
            <Route path='/' element={<Form login={login}/>} /> 
            <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
            <Route path='/about' element={<About/>} /> 
            <Route path='/detail/:detailId' element={<Detail/>} /> 
  
      
        </Routes>
      </div>
  )
}

export default App

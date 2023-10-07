import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import Nav from "./components/Navbar.jsx"
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import About from './views/About.jsx';
import Detail from "./views/Detail.jsx"
import { useLocation } from 'react-router-dom';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/favorites';


function App() {
  

   const[character, setCharacters] = useState([])
   const {pathname} = useLocation()
   const navigate = useNavigate()
   const [access, setAccess] = useState(false)
   const email = "sofia@mail.com"
   const password = "espiritusanto7"
   const login = (useData) => {
      if(useData.email === email && useData.password === password){
      setAccess(true)
   navigate("/home")
      } else{
         alert("Usuario o Contraseña incorrectos")
      }
   }
   

      function onSearch(id) {
         axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         });
      }

      const onclose = (id) => {
         setCharacters(
            character.filter((char) => {
               return char.id !==  Number(id)
            })
         )

      }


      useEffect(() => {
         !access && navigate('/');
      }, [access]);
   
   return (
      <div className='App'>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
         <Route path='/' element ={<Form login={login}/>}/>
         <Route path={'/home'} element = {<Cards character={character} onclose={onclose}/>} />
         <Route path={'/about'} element = {<About/>}/>
         <Route path={"/detail/:id"} element= {<Detail/>}/>
         <Route path={"/favorites"} element= {<Favorites/>}/>
         <Route path={'/*'} element = {<About/>}/>
         

         </Routes>
      </div>
   );
}

export default App;

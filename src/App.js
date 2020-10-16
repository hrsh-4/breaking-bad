import React, { useState, useEffect } from 'react'
import axios from 'axios';
import logo from './logo.png';
import './App.css';

import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/Search'


function App() {

  const [items, setItems ] = useState([]);

  const [query, setQuery ] = useState('')

  useEffect (() => {

      const fetchItems = async() => {
        const result = await axios(
              `https://www.breakingbadapi.com/api/characters?name=${query}`
          )
        console.log(result.data)
        setItems(result.data);
        

      }

      fetchItems()
    },[query])





  return (
    <div align='center' className="App">
     <header>
       <img src={logo} />
       <Search getQuery ={ (q) => setQuery(q)} />
     </header>

     <div className="center">
     <br/><br/><br/>
    
        <CharacterGrid items = {items}  /> 




     </div>
    </div>
  );
}

export default App;

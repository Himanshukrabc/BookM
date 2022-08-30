import React, { useState, useEffect } from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';

function Home(){
  const [suggestions,setSuggestions]=useState([]);
  const [display,setDisplay]=useState(false);
  const [movie,setMovie]=useState({});

  useEffect(() => {
    const fetch = async()=>{
      const suggestion = await axios.get(`https://omdbapi.com/?apikey=76e83c0b&s="the"`);
      setSuggestions(suggestion.data.Search);
    };
    fetch();
  }, []);
  const openModal=(obj)=>{
    setMovie(obj);
    console.log(movie);
    setDisplay(true);
  }
  return (
    <>
      <div className="content">
        {display?<Modal closeModal={()=>setDisplay(false)} movie={movie}/>:<></>}
        <Header/>
        <div className='suggestions'>
          <div className="theading">Upcoming Movies...</div>
          <div className="tile-list">
          {suggestions.map((val,ind)=><Tile movie={val} key={ind} openModal={openModal}/>)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home
import React, { useState, useEffect } from 'react';
import './Search.css'
import Header from '../../components/Header/Header';
import Tile from '../../components/Tile/Tile';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Modal from '../../components/Modal/Modal';

function Search(){
  const [display,setDisplay]=useState(false);
  const [Movies,setMovies]=useState([]);
  const [movie,setMovie]=useState();
  const val=useParams().val;

  useEffect(() => {
    const fetchrecipe = async()=>{
      const searchMovies = await axios.get(`https://omdbapi.com/?apikey=76e83c0b&s="${val}"`);
      if(searchMovies.data.Response==='True')setMovies(searchMovies.data.Search);
      else setMovies([]);
      console.log(searchMovies);
    };
    fetchrecipe();
  }, [val]);
  const openModal=(obj)=>{
    setMovie(obj);
    console.log(movie);
    setDisplay(true);
  }
  return (
    <>
      {display?<Modal closeModal={()=>setDisplay(false)} movie={movie}/>:<></>}
      <Header/>
      <div className='suggestions'>
        <div className="theading">Search Results</div>
        <div className="subheading">{Movies.length} results found</div>
        <div className="tile-list">
        {Movies.map((val,ind)=><Tile movie={val} key={ind} openModal={openModal}/>)}
        </div>
      </div>
    </>
  );
}

export default Search
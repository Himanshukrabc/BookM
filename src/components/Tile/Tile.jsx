import React from 'react';
import './Tile.css'
import { useState } from 'react';


function Tile({movie,openModal}){
  return (
    <div className="tile-container" onClick={()=>openModal(movie)}>
        <img src={movie.Poster} alt={movie.Title} className="tile-img"/>
        <div className="name">{movie.Title}</div>
    </div>
  )
}

export default Tile;
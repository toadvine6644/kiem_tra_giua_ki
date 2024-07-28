import React from 'react'
import { useState, useContext } from 'react';
import './CSS/Card.css'
import Store from '../Store'

function Card(props) {
  const movieContext = useContext(Store);

  const handleOnClick = (item) => {
    movieContext.setMovieName(item.movieName);
    movieContext.setDescription(item.description);
  }
 
  return (
    <div onClick={() => handleOnClick(props)}  className='card'>
        <div className='movieImg'>
            <img className='img' src={props.image} alt="" />
        </div>
        <div className='text'>
          <div className='movieEp'>Episode {props.episode}</div>
          <div className='movieName1'>{props.movieName}</div>
        </div>
    </div>
  )
}

export default Card
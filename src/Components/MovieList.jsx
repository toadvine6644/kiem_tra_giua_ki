import React, { useContext } from 'react'
import Card from './Card'
import data from '../data'
import './CSS/MovieList.css'
import Store from '../Store'

function MovieList() {



  return (
    <div className='movie'>
      {
        data.map((item, index) => {
          return(
            <Card image={item.image} episode={item.episode} movieName={item.movieName} description={item.description}></Card>
          )
        })
      }
    </div>
  )
}

export default MovieList
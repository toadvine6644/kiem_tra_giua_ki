import React from 'react'
import './CSS/Header.css'

function Header() {
  return (
    <>
        <div className='navBar'>
            <h2>Anonime</h2>
            <ul className='menu'>
                <li>Home</li>
                <li>List Anime</li>
            </ul>
            <input className='searchBar' type="text" placeholder='Search anime or movie'/>
        </div>
        <div>
            <h3>Explore</h3>
            <div className='hi'>What are you gonna watch today ?</div>
        </div>
    </>
  )
}

export default Header
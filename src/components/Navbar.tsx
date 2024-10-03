import React from 'react'
import { Link } from 'react-router-dom'
import '../style/components/Navigation.scss'

export default function Navbar() {
  return (
    <div className='navigation'>
      <div className='profileContr'>
        <div className='profileImgContr'>
          <img src='assets/ProfileBW.jpg'/>
        </div>
        <div className='profileInfoContr'>
          <p>Đorđe Elesin</p>
          <span>Frontend Developer</span>
        </div>
      </div>
      <span className='break'></span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/stack">Stack</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

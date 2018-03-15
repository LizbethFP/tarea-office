import React  from 'react'
import NavBar from './NavBar'

const spanish = ['Inicio', 'Conóceme', 'Contactame']
const ingles = ['Home', 'About Me', 'Contact']

const Header = () => (
  <header>
    <NavBar arrayOfString = {spanish}/>
  </header>
)

export default Header
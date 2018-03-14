import React  from 'react'
import NavBar from './NavBar'

const spanish = ['Inicio', 'Conóceme', 'Contactame']
const ingles = ['Home', 'About Me', 'Contact']

const Header = () => (
  <div>
    <NavBar arrayOfString = {spanish}/>
  </div>
)

export default Header
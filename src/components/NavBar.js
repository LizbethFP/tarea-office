import React  from 'react'
import NavBarItem from './NavBarItem'
import PropTypes from 'prop-types'
// const spanish = ['Inicio', 'Conóceme', 'Contactame']
// const ingles = ['Home', 'About Me', 'Contact']

// const NavBar = () => {
//   // const list = spanish.map((el, index) => <span key={index}>{el}</span>)
//   return (
//   <navbar className="navbar">
//     {/* /* {list} */ }
//       <NavBarItem arrayStrings={spanish}/>
//   </navbar>
// )}

const NavBar = ({arrayOfString}) => (
  <div className="navbar">
  {arrayOfString.map(el=><NavBarItem datos={el}
      key={el}/>)}
  </div>
)

NavBar.PropTypes = {
  arrayOfString:PropTypes.arrayOf(PropTypes.string)
}

export default NavBar
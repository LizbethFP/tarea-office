import React from 'react'
import PropTypes from 'prop-types'

const NavBarItem = ({datos}) => (
  <a>
  {datos}
  </a>
  // arrayStrings.map((el) => <span key={el}>{el}</span>)
)

NavBarItem.PropTypes = {
  datos:PropTypes.string.isRequerid
}

export default NavBarItem
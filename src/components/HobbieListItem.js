import React from 'react';
import PropTypes from 'prop-types'

const HobbieListItem = ({hobbiesArray}) => (
  <ul>
    <li>{hobbiesArray}</li>
  </ul>
)

HobbieListItem.PropTypes = {
  datohobbie: PropTypes.string.isRequired
}

export default HobbieListItem;
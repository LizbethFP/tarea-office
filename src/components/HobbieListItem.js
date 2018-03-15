import React from 'react';
import PropTypes from 'prop-types'

const HobbieListItem = ({hobbiesArray}) => (
  <li>
    {hobbiesArray}
  </li>
)

HobbieListItem.PropTypes = {
  hobbiesArray: PropTypes.arrayOf(PropTypes.string)
}

export default HobbieListItem;
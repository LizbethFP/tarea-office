import React from 'react';
import PropTypes from 'prop-types'

const HobbieListItem = ({hobbiesArray}) => (
  <div>
    {hobbiesArray.map(el => (<li key={el}>{el}</li>))}
  </div>
)

HobbieListItem.PropTypes = {
  hobbiesArray: PropTypes.arrayOf(PropTypes.string);
}

export default HobbieListItem;
import React from 'react';
import PropTypes from 'prop-types'

const HobbieListItem = ({data}) => (
  <ul>
    <li>{data}</li>
  </ul>
)

HobbieListItem.PropTypes = {
  datohobbie: PropTypes.string.isRequired
}

export default HobbieListItem;
import React from 'react';
import HobbieListItem from './HobbieListItem';
import PropTypes from 'prop-types';


const HobbieList = ({hobbiesArray}) => (
  <ul>
    {hobbiesArray.map(el => <HobbieListItem  key={el}/>)}
  </ul>
)

HobbieList.PropTypes = {
  hobbiesArray:PropTypes.arrayOf(PropTypes.string)
}

export default HobbieList
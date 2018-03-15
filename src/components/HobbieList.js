import React from 'react';
import HobbieListItem from './HobbieListItem';
import PropTypes from 'prop-types';


const HobbieList = ({hobbiesArray}) => (
  <div>
    {hobbiesArray.map(el=><HobbieListItem hobbiesArray={el} key={el}/>)}
    {/* {hobbiesArray.map(el => <HobbieListItem  key={el}/>)} */}
  </div>
)

HobbieList.PropTypes = {
  hobbiesArray: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default HobbieList
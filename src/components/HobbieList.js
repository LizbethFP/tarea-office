import React from 'react';
import HobbieListItem from './HobbieListItem';


const hobbiesArray = ['comer', 'ir al cine', 'asistir a un concierto', 'leer cómics'];

const HobbieList = () => (
  <ul>
    <HobbieListItem hobbiesprop = {hobbiesArray}/>
  </ul>
)

export default HobbieList;
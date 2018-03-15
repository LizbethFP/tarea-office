import React from 'react'
import HobbieList from './HobbieList'
import Section from './Section'


const hobbiesArray = ['comer', 'ir al cine', 'asistir a un concierto', 'leer cómics'];

const Main = (hobbieData) => (
  <main>
  <HobbieList hobbieData = {hobbiesArray}/>
  <Section/>
  </main>
)

export default Main
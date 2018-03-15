import React from 'react'
import PropTypes from 'prop-types'

const Section = () => (
  <section>
    <p>Subtítulo</p>
    <img src="http://www.giftsofcompassion.org.uk/wp-content/uploads/Chick-300x300.jpg" alt="imagen de prueba"/>
  </section>
)

export default Section;

/*
const AboutMe = ({descripción, imagen, hobbies}) => (
    <section>
      <img src={imagen}/>
      <br/>
      {descripción}
     <br/>
     <ul>
     {hobbies.map((el, index) => (
     <li key={index}>{el}</li>))
    }
    </ul>
    </section>
  )

export default AboutMe

AboutMe.propTypes = {
  hobbies: PropTypes.array.isRequired
}
*/
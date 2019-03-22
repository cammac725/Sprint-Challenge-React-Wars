import React from 'react';

import './Character.css';

const Character = props => {
  return (
    <div className='char-card'>

      <h3>{props.character.name}</h3>
      <p>Birth Year: {props.character.birth_year}</p>
      <a href={props.character.homeworld}>Homeworld</a>
      <a href={props.character.url}>More info</a>

    </div>
  )
}

export default Character;
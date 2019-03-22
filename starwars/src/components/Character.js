import React from 'react';

const Character = props => {
  // console.log('character:', props)
  return (
    <p>{props.character.name}</p>
  )
}

export default Character;
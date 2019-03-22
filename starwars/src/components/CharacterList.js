import React from 'react';
import Character from './Character';

const CharacterList = props => {
  // console.log(props)
  return (
    <div className='char-list'>
      <h2>List of Characters</h2>

      {props.starwarsChars.map(item => (
        <Character key={item.name} character={item} />
      ))}

    </div>
  )
}

export default CharacterList;
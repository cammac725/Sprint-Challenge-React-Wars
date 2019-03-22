import React from 'react';

import Character from './Character';
import './CharacterList.css';

const CharacterList = props => {
  return (
    <div className='char-list'>
      <h2>List of Characters</h2>
      <div className='content'>
        {props.starwarsChars.map(item => (
          <Character key={item.name} character={item} />
        ))}
      </div>


    </div>
  )
}

export default CharacterList;
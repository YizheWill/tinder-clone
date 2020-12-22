import TinderCard from 'react-tinder-card';
import React, { useState } from 'react';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: 'Elon Musk',
      url:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Mark Twin',
      url:
        'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
    {
      name: 'Jeff Bezos',
      url:
        'https://images.unsplash.com/photo-1600267185296-f7dc4efe939c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    },
  ]);
  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ', nameToDelete);
  };
  return (
    <div className='tinderCards'>
      <div className='tinderCards__cardContainer'>
        {people.map((person) => (
          <TinderCard
            className='swipe'
            key={person.name}
            preventSwipe={['up, down']}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div className='card' style={{ backgroundImage: `url(${person.url})` }}>
              <h2>{person.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

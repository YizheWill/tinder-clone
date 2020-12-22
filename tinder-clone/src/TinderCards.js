import TinderCard from 'react-tinder-card';
import React, { useState, useEffect } from 'react';
import axios from './axios';
import './TinderCards.css';

function TinderCards() {
  const [people, setPeople] = useState([]);
  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ', nameToDelete);
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get('/cards');
      console.log('request', request);
      setPeople(request.data);
    }
    fetchData();
  }, []);
  console.log('people', people);
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
            <div className='card' style={{ backgroundImage: `url(${person.imgUrl})` }}>
              <h2>{person.name}</h2>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://images.pexels.com/photos/2781540/pexels-photo-2781540.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 3.8
  },
  {
    id: 2,
    name: "Bacon",
    image: "https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 6.2
  }, 
  {
    id: 3,
    name: "Bibimbap",
    image: "https://images.pexels.com/photos/4551971/pexels-photo-4551971.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5.0
  },
  {
    id: 4,
    name: "Pork Cutlet",
    image: "https://images.pexels.com/photos/4639336/pexels-photo-4639336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 5.5
  },
  {
    id: 5,
    name: "Rice Roll",
    image: "https://images.pexels.com/photos/684965/pexels-photo-684965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    rating: 4.7
  }
];

// function renderFood(dish) {
//   console.log(dish);
//   return <Food name={dish.name} picture={dish.image}/>;
// }

function Food({name, picture, rating}) {
  return <div>
    <h2>I love {name}</h2>
    <h4>{rating} / 5.0</h4>
    <img src={picture} alt={name}/>
    </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>))}
    </div>
  );
}

export default App;

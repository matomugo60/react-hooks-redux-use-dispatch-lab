import React from 'react'
import { useSelector } from 'react-redux'

function Restaurants() {
  const restaurants = useSelector((state) => state.restaurants)

  return (
    <div>
      <ul>
        {restaurants.map((restaurant, index) => (
          <li key={index}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Restaurants
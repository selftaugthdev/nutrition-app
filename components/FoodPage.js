// components/FoodPage.js
'use client'

import { useState } from 'react'
import { getNutritionData } from '@/lib/api'
import { foodInfo } from '@/data/foodInfo'

export function FoodPage({ foodName }) {
  const [amount, setAmount] = useState('')
  const [nutritionData, setNutritionData] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await getNutritionData(foodName, Number(amount))
    setNutritionData(data)
  }

  return (
    <div className="p-4">
      <h1 className="mb-4 text-2xl font-bold">Nutrition Information for {foodName}</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="amount" className="mr-2">
          Enter amount (in grams):
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          max="5000"
          required
          className="p-1 text-black border placeholder-grey-500" placeholder="100"
        />
        <button type="submit" className="px-2 py-1 ml-2 text-white bg-blue-500 rounded">
          Get Nutrition Info
        </button>
      </form>
      {nutritionData && (
        <div>
          <p>{amount} grams of {foodName} contains:</p>
          <ul>
            <li>Sugar: {nutritionData.sugar}g</li>
            {/* Add more nutritional information as needed */}
          </ul>
        </div>
      )}
      <div className="mt-8">
        <h2 className="mb-2 text-xl font-semibold">About {foodName}</h2>
        <p>{foodInfo[foodName]}</p>
      </div>
    </div>
  )
}
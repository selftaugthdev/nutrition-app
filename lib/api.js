// lib/api.js
import axios from 'axios'

const EDAMAM_APP_ID = process.env.NEXT_PUBLIC_EDAMAM_APP_ID
const EDAMAM_APP_KEY = process.env.NEXT_PUBLIC_EDAMAM_APP_KEY

export async function getNutritionData(food, amount) {
  try {
    const response = await axios.get(`https://api.edamam.com/api/nutrition-data`, {
      params: {
        app_id: EDAMAM_APP_ID,
        app_key: EDAMAM_APP_KEY,
        ingr: `${amount} g ${food}`
      }
    })
    
    return {
      sugar: response.data.totalNutrients.SUGAR.quantity.toFixed(2),
      // Add more nutritional information as needed
    }
  } catch (error) {
    console.error('Error fetching nutrition data:', error)
    return null
  }
}
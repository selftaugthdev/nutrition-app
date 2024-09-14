import { FoodPage } from '@/components/FoodPage'

export default function Page({ params }) {
  return <FoodPage foodName={params.name} />
}
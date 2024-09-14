// app/page.js
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1 className="text-4xl font-bold">Food Nutrition App</h1>
      <p>Select a food to get nutrition information:</p>
      <ul>
        <li><Link href="/food/strawberries">Strawberries</Link></li>
        <li><Link href="/food/ground-beef">Ground Beef</Link></li>
        {/* Add more food links as needed */}
      </ul>
    </main>
  )
}
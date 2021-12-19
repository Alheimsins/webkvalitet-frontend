export default function Card ({ name }) {
  return (
    <li className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
      <h1>{name}</h1>
    </li>
  )
}
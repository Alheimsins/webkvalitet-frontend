export default function Score({ title, score }) {
  return (
    <div className="flex flex-col">
      <div>{title}</div>
      <div>{score}</div>
    </div>
  )
}
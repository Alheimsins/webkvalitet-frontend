import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

function getColor(score) {
  if (score < 50) {
    return '#ff0000';
  } else if (score < 90) {
    return '#ffa500';
  } else {
    return '#008000';
  }
}

export default function Score({ title, score }) {
  return (
    <div className="flex flex-col">
      <CircularProgressbarWithChildren
        value={score}
        text={score}
        className="w-24 h-24"
        strokeWidth={10}
        styles={buildStyles({
          pathColor: getColor(score),
          textColor: 'black',
          trailColor: '#d6d6d6',
        })}
      />
      <div className='text-center mt-2'>{title}</div>
    </div>
  )
}
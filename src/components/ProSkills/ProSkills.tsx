import './proSkills.css'

interface circleProps {
  changeClassName: string;
  percentage: string;
  text: string;
}

export const ProSkills:React.FC<circleProps> = ({changeClassName, percentage,text}) => {
  return (
    <div className="radial-bar">
      <svg x="0px" y="0px" viewBox="0 0 200 200">
        <circle className="progressive-bar" cx="100" cy="100" r="80"></circle>
        <circle
          className={`path ${changeClassName}`}
          cx="100"
          cy="100"
          r="80"
        ></circle>
      </svg>
      <div className="percentage">{percentage}%</div>
      <div className="text">{text}</div>
    </div>
  );
}
 
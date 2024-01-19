import React from 'react'

interface BarsProps {
  nameSkills: string,
  changeClassName: string,
  iconElement: React.ReactElement,
  iconColor: string,
}

export const Bars:React.FC<BarsProps> = ({iconElement,iconColor, nameSkills, changeClassName}) => {

    const iconWithColor = React.cloneElement(iconElement, {style: {color: iconColor}})

  return (
    <div className="technical-bars">
      {iconWithColor}
      <div className="bars">
        <div className="info">
          <span>{nameSkills}</span>
        </div>
        <div className={`progression-line ${changeClassName}`}>
          <span></span>
        </div>
      </div>
    </div>
  );
}


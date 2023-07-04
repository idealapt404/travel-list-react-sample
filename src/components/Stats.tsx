import React, { ReactNode } from 'react';
import { StatsProps } from './App';

interface StatViewProps {
  children: ReactNode;
}

const Stats: React.FC<StatsProps> = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = numItems === 0 ? 0 : Math.round(numPacked / numItems * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 0
          ? <Stat>Start adding some items to your packing list 🚀</Stat>
          : percentage === 100
            ? <Stat>You got everything! Ready to go ✈️</Stat>
            : <Stat>
                💼 You have {numItems} items on your list,
                and you already packed {numPacked} ({percentage}%)
              </Stat>
        }
      </em>
    </footer>
  )
}

const Stat: React.FC<StatViewProps> = ({children}) => {
  return (
    <em>{children}</em>
  )
}

export default Stats;

import React from 'react';
import { StatsProps } from './App';

interface StatViewProps {
  numItems: number;
  numPacked: number;
  percentage: number;
}

const Stats: React.FC<StatsProps> = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = numItems === 0 ? 0 : Math.round(numPacked / numItems * 100);

  return (
    <footer className="stats">
        {percentage === 0
        ? <EmptyStat />
        : percentage === 100
          ? <FullStat />
          : <Stat numItems={numItems} numPacked={numPacked} percentage={percentage} />
        }
    </footer>
  )
}

const EmptyStat: React.FC = () => {
  return (
    <em>Start adding some items to your packing list 🚀</em>
  )
}

const FullStat: React.FC = () => {
  return (
    <em>"You got everything! Ready to go ✈️"</em>
  )
}

const Stat: React.FC<StatViewProps> = ({numItems, numPacked, percentage}) => {
  return (
    <em>
      💼 You have {numItems} items on your list,
      and you already packed {numPacked} ({percentage}%)
    </em>
  )
}

export default Stats;

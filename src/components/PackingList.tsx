import React from 'react';
import { ItemProps } from './items';
import { ListProps } from './App';

const PackingList: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list">
      {
        items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            description={item.description}
            quantity={item.quantity}
            packed={item.packed} />
          )
        )
      }
    </ul>
  )
}

const Item: React.FC<ItemProps> = ({id, description, quantity, packed}) => {
  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  )
}

export default PackingList;

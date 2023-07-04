import React from 'react';
import { ItemProps } from './items';
import { ListProps } from './App';

export interface ItemViewProps {
  item: ItemProps;
  onDeleteItem: (id: number) => void;
}

const PackingList: React.FC<ListProps> = ({ items, onDeleteItem }) => {
  return (
    <ul className="list">
      {
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
          />
          )
        )
      }
    </ul>
  )
}

const Item: React.FC<ItemViewProps> =
  ({item, onDeleteItem}) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default PackingList;

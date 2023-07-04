import React from 'react';
import { ItemProps } from './items';
import { ListProps } from './App';

export interface ItemViewProps {
  item: ItemProps;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const PackingList: React.FC<ListProps> = ({ items, onDeleteItem, onToggleItem }) => {
  return (
    <ul className="list">
      {
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
          )
        )
      }
    </ul>
  )
}

const Item: React.FC<ItemViewProps> =
  ({item, onDeleteItem, onToggleItem}) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

export default PackingList;

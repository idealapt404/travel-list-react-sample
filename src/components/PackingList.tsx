import React, { useState } from 'react';
import { ItemProps } from './items';
import { ListProps } from './App';

export interface ItemViewProps {
  item: ItemProps;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

const PackingList: React.FC<ListProps> = ({ items, onDeleteItem, onToggleItem, onClearList }) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === 'input')
    sortedItems = items;
  else if (sortBy === 'description')
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  else
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {
          sortedItems.map((item) => (
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
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
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

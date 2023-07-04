import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
import { initialItems, ItemProps } from './items';

export interface FormProps {
  onAddItems: (item: ItemProps) => void;
}

export interface ListProps {
  items: ItemProps[];
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export interface StatsProps {
  items: ItemProps[];
}

function App() {
  const [items, setItems] = useState(initialItems);

  const onAddItems = (item: ItemProps) => {
    setItems((items) => [...items, item]);
  }

  const onDeleteItem = (id: number) => {
    setItems(items => items.filter(item => item.id !== id));
  }

  const onToggleItem = (id: number) => {
    setItems(items => items.map((item) =>
      item.id === id ? {...item, packed: !item.packed } : item))
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={onAddItems} />
      <PackingList items={items} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
      <Stats items={items} />
    </div>
  );
}

export default App;

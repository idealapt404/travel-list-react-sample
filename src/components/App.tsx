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
}

function App() {
  const [items, setItems] = useState(initialItems);

  const onAddItems = (item: ItemProps) => {
    setItems((items) => [...items, item]);
  }

  const onDeleteItem = (id: number) => {
    setItems(items => items.filter(item => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={onAddItems} />
      <PackingList items={items} onDeleteItem={onDeleteItem}/>
      <Stats />
    </div>
  );
}

export default App;

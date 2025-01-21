import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState([]); 

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]); 
  };

  return (
    <div>
      <h1>Item List</h1>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
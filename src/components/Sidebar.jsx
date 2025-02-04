import { useState, useCallback } from "react";

export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("");
  let [filter, setFilter] = useState("");
  let [menuItems, setMenuItems] = useState(initialMenuItems);

  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim() === "") return;
    setMenuItems([newMenuItem, ...menuItems]); 
    setNewMenuItem("");
  }, [newMenuItem, menuItems]);

  return (
    <div>
      <ul>
        {menuItems
          .filter(item => item.toLowerCase().includes(filter.toLowerCase()))
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>

      {/* new item input */}
      <div style={{ textAlign: "center" }}>
        <input
          type="text"
          id="newMenuItemValue"
          value={newMenuItem}
          onChange={(event) => setNewMenuItem(event.target.value)}
          placeholder="New menu item"
          style={{ display: "block", margin: "0 auto 10px auto" }}
        />

        <button 
          onClick={addMenuItem} 
          style={{ display: "block", margin: "0 auto 10px auto" }}>
          Add Item
        </button>

        <input
          id="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Filter by..."
          style={{ display: "block", margin: "0 auto" }}
        />
      </div>
    </div>
  );
}

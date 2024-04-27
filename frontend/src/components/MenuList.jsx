import { useState } from "react";

function MenuList({ heading, items, emoji, filterState, setFilterState }) {
  //console.log(props);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [filter, onFilterChange] = [{ filter }, { onFilterChange }];

  return (
    <>
      <h1>
        {heading} {emoji}
      </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group menu-list">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item menu-list-item active"
                : "list-group-item menu-list-item"
            }
            onClick={() => {
              if (selectedIndex == index) {
                setFilterState(null);
                setSelectedIndex(-1);
              } else {
                setFilterState(item.category.toLowerCase());
                setSelectedIndex(index);
              }
              console.log(index, selectedIndex, item, filterState);
            }}
            key={item.category}
          >
            {item.category}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MenuList;

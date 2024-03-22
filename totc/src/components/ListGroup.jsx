import { useState } from "react";

function ListGroup({ heading, items, emoji, filterState, setFilterState }) {
  //console.log(props);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //const [filter, onFilterChange] = [{ filter }, { onFilterChange }];

  return (
    <>
      <h1>
        {heading} {emoji}
      </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setFilterState(item);
              setSelectedIndex(index);
              console.log(index, selectedIndex, item, filterState);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

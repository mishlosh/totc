import { useState } from "react";

function NavList({ heading, items, selectionState, setSelectionState }) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group navList">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectionState(index);
              setSelectedIndex(index);
            }}
            key={item.categoryName}
          >
            {item.categoryName}
          </li>
        ))}
      </ul>
    </>
  );
}

export default NavList;

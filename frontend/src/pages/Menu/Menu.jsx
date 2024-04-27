import MenuList from "../../components/MenuList";
import NavList from "../../components/NavList";
import MenuItem from "../../components/MenuItem";
import MenuCategoryHeader from "../../components/MenuCategoryHeader";
import MenuItemCard from "../../components/MenuItemCard";
import React, { useState, useContext, useRef } from "react";
import { QueryContext } from "../../context/query-context";
import "./Menu.css";

export default function Menu() {
  const [selectionState, setSelectionState] = useState(null);
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const {
    menuItems: items,
    menuItemsLoading: itemsLoading,
    menuCategories: categories,
    menuCategoriesLoading: catsLoading,
  } = useContext(QueryContext);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-2 menuList">
            <NavList
              heading="Menu"
              items={categories}
              selectionState={selectionState}
              setSelectionState={setSelectionState}
            />
          </div>
          <div className="col col-10 menuBody">
            <div className="scroll">
              {categories.map((category) => (
                <>
                  <MenuCategoryHeader header={category.categoryName} />
                  {items.map((item) =>
                    item.categoryName == category.categoryName ? (
                      <div className="col" key={item.menuName}>
                        <MenuItemCard
                          itemID={item.menuID}
                          itemName={item.menuName}
                          description={item.description}
                          dietaryTags={item.dietTags}
                          price={item.price}
                          category={item.category}
                          imagepath={item.imagepath}
                        />
                      </div>
                    ) : (
                      ""
                    )
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

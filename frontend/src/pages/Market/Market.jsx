import ListGroup from "../../components/ListGroup";
import FoodItemCard from "../../components/FoodItemCard";
import React, { useEffect, useState, useContext } from "react";
import { QueryContext } from "../../context/query-context";
import "./Market.css";

export default function Market() {
  const [filter, setFilter] = useState(null);
  const {
    marketItems: items,
    marketItemsLoading: itemsLoading,
    marketCategories: categories,
    marketCategoriesLoading: catsLoading,
  } = useContext(QueryContext);

  console.log(items);
  console.log(categories);

  if (itemsLoading || catsLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-sm-2">
            <ListGroup
              heading="Categories"
              items={categories}
              filterState={filter}
              setFilterState={setFilter}
            />
            <div className="vr"></div>
          </div>
          <div className="col col-sm-10">
            <div className="row row-cols-4">
              {items?.map((item) =>
                item.categoryName.toLowerCase() == filter || filter == null ? (
                  <FoodItemCard
                    itemID={item.itemID}
                    itemName={item.itemName}
                    price={item.price}
                    category={item.categoryName}
                    filter={filter}
                  />
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

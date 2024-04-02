import ListGroup from "../components/ListGroup";
import MenuItem from "../components/MenuItem";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getItems, getCategories } from "../api/items";

export default function Menu() {
  const [filter, setFilter] = useState(null);

  const { data: items, itemsError } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
  });

  const { data: categories, catsError } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });
  let oldcategories = ["Appetizers", "Lunch", "Fish", "Entree", "Dessert"];
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col-sm-2">
            <ListGroup
              heading="Menu"
              items={categories}
              filterState={filter}
              setFilterState={setFilter}
            />
            <div class="vr"></div>
          </div>
          <div className="col col-sm-10">
            <MenuItem filter={filter} />
          </div>
        </div>
      </div>
    </>
  );
}

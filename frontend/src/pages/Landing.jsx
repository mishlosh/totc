import { useContext } from "react";
import { QueryContext } from "../context/query-context";

export default function Landing() {
  const {
    marketItems: items,
    itemsStatus,
    marketCategories,
    catsStatus,
  } = useContext(QueryContext);

  console.log(items.length);
  return <h1>Landing</h1>;
}

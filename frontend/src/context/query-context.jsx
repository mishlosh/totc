import React, { createContext, useEffect, useState } from "react";
import { getItems, getCategories } from "../api/items";

import { useQuery } from "@tanstack/react-query";

export const QueryContext = createContext(null);

export const QueryContextProvider = (props) => {
  const {
    data: marketItems,
    error: marketItemsError,
    status: marketItemsStatus,
    isLoading: marketItemsLoading,
  } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems(),
  });

  const {
    data: marketCategories,
    error: marketCategoriesError,
    status: marketCategoriesStatus,
    isLoading: marketCategoriesLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  const contextValue = {
    marketItems,
    marketItemsStatus,
    marketItemsError,
    marketItemsLoading,
    marketCategories,
    marketCategoriesError,
    marketCategoriesStatus,
    marketCategoriesLoading,
  };

  return (
    <QueryContext.Provider value={contextValue}>
      {props.children}
    </QueryContext.Provider>
  );
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

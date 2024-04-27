import React, { createContext, useEffect, useState } from "react";
import {
  getItems,
  getCategories,
  getMenu,
  getMenuCategories,
} from "../api/items";

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

  const {
    data: menuItems,
    error: menuItemsError,
    status: menuItemsStatus,
    isLoading: menuItemsLoading,
  } = useQuery({
    queryKey: ["menuItems"],
    queryFn: () => getMenu(),
  });

  const {
    data: menuCategories,
    error: menuCategoriesError,
    status: menuCategoriesStatus,
    isLoading: menuCategoriesLoading,
  } = useQuery({
    queryKey: ["menuCategories"],
    queryFn: () => getMenuCategories(),
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
    menuItems,
    menuItemsError,
    menuItemsLoading,
    menuItemsStatus,
    menuCategories,
    menuCategoriesError,
    menuCategoriesLoading,
    menuCategoriesStatus,
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

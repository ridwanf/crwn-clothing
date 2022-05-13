import { CategoryState } from "./categories.reducer";
import {CategoryMap } from "./categories.types";

export const selectCategoriesMap = (state: CategoryState) : CategoryMap =>
  state.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CategoryMap);
 
import {
  ActionWithPayload,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPE, Category } from "./categories.types";

export type SetCategories = ActionWithPayload<
  CATEGORIES_ACTION_TYPE.SET_CATEGORIES,
  Category[]
>;

export const setCategories = withMatcher(
  (categories: Category[]) =>
    createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES, categories)
);

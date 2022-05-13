import { AnyAction } from "redux";
import { setCategories } from "./categories.action";
import { Category } from "./categories.types";

export type CategoryState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {} as AnyAction
): CategoryState => {
  console.log(action)
  if (setCategories.match(action)) {
    return { ...state, isLoading: true };
  }
  return state;

  // switch (type) {
  //   case CATEGORIES_ACTION_TYPE.SET_CATEGORIES:
  //     return { ...state, categories: payload };
  //   default:
  //     return state;
  // }
};

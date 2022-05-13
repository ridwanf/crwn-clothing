import { AnyAction } from "redux";
import { USER_ACTIONS_TYPES } from "../../contexts/user.context";
import { UserData } from "../../utils/firebase/firebase.utils";
import { setCurrentUser } from "./user.action";

export interface UserState {
  readonly currentUser: UserData | null
}

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action: AnyAction): UserState => {
 
  if(setCurrentUser.match(action)) {
          return {
        ...state,
        currentUser: action.payload,
      };
  }
  return state;
  // const { type, payload } = action;

  // switch (type) {
  //   case USER_ACTIONS_TYPES.SET_CURRENT_USER:
  //     return {
  //       ...state,
  //       currentUser: payload,
  //     };
  //   default:
  //     return state;
  // }
};


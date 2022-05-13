import { UserData } from "../../utils/firebase/firebase.utils";
import { UserState } from "./user.reducer";

export const selectCurrentUser = (state: UserData): UserState => state.user.selectCurrentUser
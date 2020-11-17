import { FETCH_USER } from "../action/types";

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // the user model (if logged in), if not it returns "". Remember: ('' || false) === false
    default:
      return state;
  }
}

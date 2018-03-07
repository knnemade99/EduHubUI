import {ActionReducer, Action} from "@ngrx/store";
import { AuthToken } from "../actions/action";

export const mainStoreReducer: ActionReducer<State> =
  (state = intitialState, action: Action) => {

  console.log('Action came in! ' + action.type);
debugger;

    switch (action.type) {

      case AuthToken: {
        console.log('AuthToken action being handled!');
        return {
          debugger;
          counter: state.counter + 1
        }
      }

      default: {
        return {};
      }
    }
  };

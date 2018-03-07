export const ActionTypes = {
  AuthToken: type('AuthToken')
};

export class AuthToken implements Action {
  type = ActionTypes.AuthToken;

  constructor(payload: { AuthToken:string }) { }
}

export type Actions =
  AuthToken;

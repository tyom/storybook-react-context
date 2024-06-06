import * as React from 'react';

type AuthAction = { type: 'authenticate' } | { type: 'deauthenticate' };
type AuthState = { authenticated: boolean };

export const AuthContext = React.createContext<
  [state: AuthState, dispatch: (action: AuthAction) => void] | undefined
>(undefined);

export const CountContext = React.createContext<
  { count: number; increment: (count: number) => void } | undefined
>(undefined);

export function authReducer(state: AuthState, action: AuthAction) {
  switch (action.type) {
    case 'authenticate':
      return { ...state, authenticated: true };
    case 'deauthenticate':
      return { ...state, authenticated: false };
    default:
      return state;
  }
}

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a ExampleAuthContext Provider');
  }
  return context;
};

export const useCount = () => {
  const context = React.useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountContext Provider');
  }
  return context;
};

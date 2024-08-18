import * as React from 'react';
import { useAuth } from '../context';

const AuthStatusComponent = ({
  children,
  authenticated,
}: {
  children: React.ReactNode;
  authenticated?: boolean;
}) => {
  return (
    <>
      <div className="font-sans max-w-sm rounded shadow-lg bg-white p-4 space-y-2">
        {children}
        <h1
          id="auth-status"
          className={`text-xl text-center p-4 m-0 ${authenticated === true ? 'text-green-400' : 'text-red-400'}`}
        >
          {authenticated === true ? 'Authenticated' : 'Unauthenticated'}
        </h1>
      </div>
    </>
  );
};

export const AuthStatus = ({ children }: { children: React.ReactNode }) => {
  const [state] = useAuth();
  return (
    <AuthStatusComponent authenticated={state.authenticated}>
      {children}
    </AuthStatusComponent>
  );
};

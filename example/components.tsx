import * as React from 'react';
import { useAuth, useCount } from './context';

const AuthDisplayStatus = ({
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

export const CountContainer = () => {
  const { count } = useCount();
  return (
    <div className="p-4 text-lg text-center" id="count-status">
      Count: {count}
    </div>
  );
};

export const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  const [state] = useAuth();
  return (
    <AuthDisplayStatus authenticated={state.authenticated}>{children}</AuthDisplayStatus>
  );
};

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className="border-none bg-gray-500 active:bg-gray-700 text-white rounded px-4 py-2"
    {...props}
  />
);

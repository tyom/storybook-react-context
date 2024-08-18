import * as React from 'react';

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className="border-none bg-gray-500 active:bg-gray-700 text-white rounded px-4 py-2"
    {...props}
  />
);

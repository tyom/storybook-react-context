import * as React from 'react';

import { useCount } from '../context';

export const Counter = () => {
  const { count } = useCount();
  return (
    <div className="p-4 text-lg text-center" id="count-status">
      Count: {count}
    </div>
  );
};

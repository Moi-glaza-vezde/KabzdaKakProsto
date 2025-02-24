import React, { useMemo, useState } from 'react';
import { action } from '@storybook/addon-actions';

export default {
   title: 'UseState demo',
};

function generateData() {
   return 1;
}

export const Example = () => {
   //const initValue = useMemo(generateData, []);

   const [counter, setCounter] = useState(generateData);
   const changer = (state: number) => {
      console.log(state);
      return state + 1;
   };

   return (
      <div>
         <button onClick={() => setCounter(changer)}>+</button>
         {counter}
      </div>
   );
};

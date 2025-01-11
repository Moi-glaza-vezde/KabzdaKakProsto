import React, { useState } from 'react';
type RatingPropsType = {
   value: 0 | 1 | 2 | 3 | 4 | 5;
};
export const UnControlledReating = () => {
   let [value, setValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
   return (
      <div>
         <Star selected={value > 0} setValue={() => setValue(1)} />
         <Star selected={value > 1} setValue={() => setValue(2)} />
         <Star selected={value > 2} setValue={() => setValue(3)} />
         <Star selected={value > 3} setValue={() => setValue(4)} />
         <Star selected={value > 4} setValue={() => setValue(5)} />
      </div>
   );
};

type StarPropsType = {
   selected: boolean;
   setValue: () => void;
};
function Star(props: StarPropsType) {
   return props.selected ? (
      <span onClick={props.setValue} style={{ cursor: 'pointer' }}>
         <b>star </b>
      </span>
   ) : (
      <span onClick={props.setValue} style={{ cursor: 'pointer' }}>
         star{' '}
      </span>
   );
}

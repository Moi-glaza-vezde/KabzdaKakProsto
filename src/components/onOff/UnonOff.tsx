import React, { useState } from 'react';

type PropsType = {
   //on: boolean;
   onChange: (on: boolean) => void;
};

export const UnonOff = (props: PropsType) => {
   let [on, setOn] = useState(false);

   const onStyle = {
      cursor: 'pointer',

      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: 'inline-block',
      padding: '5px',
      backgroundColor: on ? 'green' : 'white',
      transitionDuration: '0.2s',
   };
   const offStyle = {
      cursor: 'pointer',
      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: 'inline-block',
      margin: '0px 15px 0px 5px',
      padding: '5px',
      backgroundColor: on ? 'white' : 'red',
      transitionDuration: '0.2s',
   };
   const indicatorStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: '1px solid black',
      display: 'inline-block',
      backgroundColor: on ? 'green' : 'red',
      transitionDuration: '0.3s',
   };

   const onClicked = () => {
      setOn(true);
      props.onChange(true);
   };
   const offClicked = () => {
      setOn(false);
      props.onChange(false);
   };
   return (
      <div style={{ padding: '10px' }}>
         <div style={onStyle} onClick={onClicked}>
            On
         </div>
         <div style={offStyle} onClick={offClicked}>
            Off
         </div>
         <div style={indicatorStyle}></div>
      </div>
   );
};

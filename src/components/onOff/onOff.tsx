import React, { useState } from 'react';

type PropsType = {
   setOn: (value: boolean) => void;
   on: boolean;
};

export const OnOff = (props: PropsType) => {
   const onStyle = {
      cursor: 'pointer',

      width: '30px',
      height: '20px',
      border: '1px solid black',
      display: 'inline-block',
      padding: '5px',
      backgroundColor: props.on ? 'green' : 'white',
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
      backgroundColor: props.on ? 'white' : 'red',
      transitionDuration: '0.2s',
   };
   const indicatorStyle = {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      border: '1px solid black',
      display: 'inline-block',
      backgroundColor: props.on ? 'green' : 'red',
      transitionDuration: '0.3s',
   };
   return (
      <div style={{ padding: '10px' }}>
         <div
            style={onStyle}
            onClick={() => {
               props.setOn(true);
            }}>
            On
         </div>
         <div
            style={offStyle}
            onClick={() => {
               props.setOn(false);
            }}>
            Off
         </div>
         <div style={indicatorStyle}></div>
      </div>
   );
};

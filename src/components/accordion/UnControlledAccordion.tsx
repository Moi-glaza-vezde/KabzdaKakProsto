import React, { useState } from 'react';

type AccordionPropsType = {
   title: string;
   closed?: boolean;
};
export const UnControlledAccordion = (props: AccordionPropsType) => {
   let [closed, setClosed] = useState(true);
   return (
      <div>
         <AccordionTitle
            title={props.title}
            onClickTitle={() => {
               setClosed(!closed);
            }}
         />

         {!closed && <AccordionBody />}
      </div>
   );
};

type AccordionTitlePropsType = {
   title: string;
   onClickTitle: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
   return (
      <h3
         onClick={() => {
            props.onClickTitle();
         }}>
         {props.title}
      </h3>
   );
}

function AccordionBody() {
   return (
      <ul>
         <li>1</li>
         <li>2</li>
         <li>3</li>
      </ul>
   );
}

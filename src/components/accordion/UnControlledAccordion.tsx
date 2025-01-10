import React, { useState } from 'react';

type AccordionPropsType = {
   title: string;
   closed?: boolean;
};
export const UnControlledAccordion = (props: AccordionPropsType) => {
   let [closed, setClosed] = useState(true);
   return (
      <div>
         <AccordionTitle title={props.title} />
         <button
            onClick={() => {
               setClosed(!closed);
            }}>
            TOGGLE
         </button>
         {!closed && <AccordionBody />}
      </div>
   );
};

export function Accordion2(props: AccordionPropsType) {
   if (props.closed === true) {
      return (
         <div>
            {true}
            <AccordionTitle title={props.title} />
         </div>
      );
   } else {
      return (
         <div>
            <AccordionTitle title={props.title} />
            <AccordionBody />
         </div>
      );
   }
}

type AccordionTitlePropsType = {
   title: string;
};
function AccordionTitle(props: AccordionTitlePropsType) {
   return <h3>{props.title}</h3>;
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

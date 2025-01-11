import React, { useState } from 'react';

type AccordionPropsType = {
   title: string;
   closed?: boolean;
};
export const UnControlledAccordion = (props: AccordionPropsType) => {
   let [closed, setClosed] = useState(true);
   return (
      <div>
         <AccordionTitle title={props.title} closed={closed} setClosed={setClosed} />

         {!closed && <AccordionBody />}
      </div>
   );
};

// export function Accordion2(props: AccordionPropsType) {
//    if (props.closed === true) {
//       return (
//          <div>
//             <AccordionTitle title={props.title} />
//          </div>
//       );
//    } else {
//       return (
//          <div>
//             <AccordionTitle title={props.title} />
//             <AccordionBody />
//          </div>
//       );
//    }
// }

type AccordionTitlePropsType = {
   title: string;
   closed: boolean;
   setClosed: (isActive: boolean) => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
   return (
      <h3
         onClick={() => {
            props.setClosed(!props.closed);
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

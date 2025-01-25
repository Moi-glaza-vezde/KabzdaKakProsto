import React from 'react';
type AccordionPropsType = {
   title: string;
   closed?: boolean;
   setClosed: (value: boolean) => void;
};

export function Accordion(props: AccordionPropsType) {
   return (
      <div>
         <AccordionTitle title={props.title} setClosed={() => props.setClosed(!props.closed)} />
         {!props.closed && <AccordionBody />}
      </div>
   );
}

type AccordionTitlePropsType = {
   title: string;
   setClosed: () => void;
};
function AccordionTitle(props: AccordionTitlePropsType) {
   return <h3 onClick={(event) => props.setClosed()}>{props.title}</h3>;
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

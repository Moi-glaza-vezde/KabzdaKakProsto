import React from 'react';
import './App.css';
import { Accordion1, Accordion2 } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';
import { OnOff } from './components/onOff/onOff';
import { UnControlledAccordion } from './components/accordion/UnControlledAccordion';
import { UnControlledReating } from './components/rating/UnControlledReating';

function hellow() {
   debugger;

   alert('Hellow it kamasutra');
}

// hellow();

function App() {
   return (
      <div>
         <OnOff />
         <OnOff />
         <OnOff />
         <UnControlledAccordion title={'Users'} />
         <UnControlledAccordion title={'Menu'} />
         <UnControlledReating />
         {/* <Accordion1 closed={true} title={'Users'} /> */}
         {/* <Accordion1 title={'Menu'} /> */}
         {/* <Rating value={1} />
         <Rating value={2} />
         <Rating value={3} />
         <Rating value={4} />
         <Rating value={5} /> */}
      </div>
   );
}

type PageTitlePropsType = {
   title: string;
};
function PageTitle(props: PageTitlePropsType) {
   return <h1> {props.title}</h1>;
}

export default App;

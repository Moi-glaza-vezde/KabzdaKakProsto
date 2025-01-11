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
   const value = 0 | 1 | 2 | 3 | 4 | 5;
   return (
      <div className="app">
         <OnOff />

         <UnControlledAccordion title={'Menu'} />
         <Accordion1 closed={false} title={'Users'} />

         <UnControlledReating />
         <Rating value={3} />
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

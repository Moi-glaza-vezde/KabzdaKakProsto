import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import { Rating, RetingValueType } from './components/rating/Rating';
import { OnOff } from './components/onOff/onOff';
import { UnControlledAccordion } from './components/accordion/UnControlledAccordion';
import { UnControlledReating } from './components/rating/UnControlledReating';
import { UnonOff } from './components/onOff/UnonOff';

function App() {
   let [reatingValue, setReatingValue] = useState<RetingValueType>(0);
   let [closed, setClosed] = useState(true);
   let [on, setOn] = useState(false);
   return (
      <div className="app">
         <Rating value={reatingValue} onClick={setReatingValue} />
         <Accordion closed={closed} title={'Users'} setClosed={setClosed} />
         <OnOff setOn={setOn} on={on} />
         <UnonOff onChange={setOn} />
         {on.toString()}
         {/* <UnControlledAccordion title={'Menu'} /> */}
         {/* <UnControlledReating /> */}
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

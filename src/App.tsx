import React from 'react';
import './App.css';
import { Accordion1, Accordion2 } from './components/accordion/Accordion';
import { Rating } from './components/rating/Rating';

function hellow() {
   debugger;

   alert('Hellow it kamasutra');
}

// hellow();

function App() {
   return (
      <div>
         <Accordion1 closed={false} title={'Users'} />
         <Accordion1 title={'Menu'} />
         <Rating value={1} />
         <Rating value={2} />
         <Rating value={3} />
         <Rating value={4} />
         <Rating value={5} />
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

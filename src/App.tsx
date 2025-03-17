import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/accordion/Accordion';
import {Rating, RetingValueType} from './components/rating/Rating';
import {OnOff} from './components/onOff/onOff';
import {UnControlledAccordion} from './components/accordion/UnControlledAccordion';
import {UnControlledReating} from './components/rating/UnControlledReating';
import {UnonOff} from './components/onOff/UnonOff';
import {Clock} from './components/Clock/Clock';

function App() {
    let [reatingValue, setReatingValue] = useState<RetingValueType>(0);
    let [closed, setClosed] = useState(true);
    let [on, setOn] = useState(false);
    const items = [

        {
            id: 1,
            title: 'Dima',
            value: '',
        },
        {
            id: 2,
            title: 'Paha',
            value: '',
        },

        {
            id: 3,
            title: 'Peta',
            value: '',
        }

    ]
    return (
        <div className="app">
            <Clock mode={'digital'} />
            <Clock mode={'analog'}/>

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

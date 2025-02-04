import React from 'react';

type ItemType = {
    id: number,
    title: string
    value: string
}
type AccordionPropsType = {
    title: string;
    closed?: boolean;
    setClosed: (value: boolean) => void;
    items:ItemType[];
};

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} setClosed={() => props.setClosed(!props.closed)}/>
            {!props.closed && <AccordionBody items={props.items}/>}
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


type AccordionBodyPropsType = {
    items:ItemType[];
};
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map(item => (<li onClick={()=>{alert(item.id)}} key={item.id}>{item.title}</li>))}
        </ul>
    );
}

import React, {useState, KeyboardEvent, useEffect} from 'react';
import s from './Select.module.css'

type ItemsType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}


export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false);

    const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value]);

    const selectedItem = props.items.find((i => i.value === props.value));
    const hoveredItem = props.items.find((i => i.value === hoveredElementValue));
    const toggleItems = () => {
        setActive(!active)
    }
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()

    }


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {

            for (let i = 0; i < props.items.length; i++) {

                if (props.items[i].value === hoveredElementValue) {

                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false);
        }
    }
    return (

        <div>

            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={s.items}>
                        {props.items.map(i =>
                            <div
                                onMouseEnter={() => {
                                    setHoveredElementValue(i.value)
                                }}
                                className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                                key={i.value}
                                onClick={() => onItemClick(i.value)}>
                                {i.title}
                            </div>)}
                    </div>}
            </div>
        </div>
    );
};


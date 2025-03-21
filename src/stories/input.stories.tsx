import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'input'
}
export const UnInput = () => <input/>



export const TarckValueOfUnInput = () => {
    const [value, setValue] = useState('');
    const onChange = (e:ChangeEvent<HTMLInputElement> ) => {
        setValue(e.currentTarget.value)


    }
    return (
        <>
            <input onChange={onChange}/> --{value}
        </>
    )
}
export const GetValueOfUnInput = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = (e: React.MouseEvent<HTMLButtonElement>) => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            actual value: {value}
        </>
    )
}



export const ControlledInput=()=>{

const[parentValue, setParentValue] = useState('');

const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

    setParentValue(e.currentTarget.value)
}


    return (<input value={parentValue} onChange={onChangeHandler}/>)

}
export const ControlledCheckBox=()=>{
    const[parentValue, setParentValue] = useState(true);

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {

        setParentValue(e.currentTarget.checked)
    }


    return (<input type={'checkbox'} checked={parentValue} onChange={onChangeHandler}/>)

}
export const ControlledSelect=()=>{

    const[parentValue, setParentValue] = useState<string|undefined>('2');

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>) => {

        setParentValue(e.currentTarget.value)
    }


    return (<select value={parentValue} onChange={onChangeHandler}>

        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>)
}




export const ControlInputFixedValue = () => <input value={'incubator'}/>
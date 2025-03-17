// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';
import {DigitalClockView} from './DigitalClockView';
import {AnalogClockView} from './AnalogClockView';

type PropsType = {
    mode?: 'digital' | 'analog'
};
export const Clock: React.FC<PropsType> = (props) => {
    const [data, setData] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {

            setData(new Date());
        }, 1000)

        return () => {

            clearInterval(intervalID)
        }
    }, []);

    // const second = getString(data.getSeconds())
    // const minutes = getString(data.getMinutes())
    // const hours = getString(data.getHours())



    return (
        <div>  {
            props.mode === 'digital' ?
                <DigitalClockView date={data} />

                : <AnalogClockView date={data}/>

            // <>ANALOG</>
        }</div>


    );
};
export type ClockViewPropsType = {
     date:Date
}


import * as React from 'react';
import {ClockViewPropsType} from './Clock';

export const DigitalClockView: React.FC<ClockViewPropsType> = ({date, }) => {


    const getString = (num: number) => num < 10 ? '0' + num : num
    return (

        <>
            <span>{getString(date.getHours())}</span>
            :
            <span>{getString(date.getMinutes())}</span>
            :
            <span>{getString(date.getSeconds())}</span>

        </>
    )
}
// @flow
import * as React from 'react';
import {useEffect, useState} from 'react';

type PropsType = {};
export const Clock: React.FC<PropsType> = (props) => {
    const [data, setData] = useState(new Date());

    useEffect(() => {
       const intervalID= setInterval(() => {

            setData(new Date());
        }, 1000)

        return ()=>{

            clearInterval(intervalID)
        }
    }, []);
    const getString = (num: number) => num < 10 ? '0' + num : num

    const second = getString(data.getSeconds())
    const minutes = getString(data.getMinutes())
    const hours = getString(data.getHours())


    return (
        <div>
            <span>{hours}</span>
            :
            <span>{minutes}</span>
            :
            <span>{second}</span>
        </div>
    );
};
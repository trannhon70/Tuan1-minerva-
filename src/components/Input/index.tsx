import { ChangeEvent, FC, useEffect, useState } from "react";

export interface inputProps{
    onChange?(value: string): void;
}

const Input: FC<inputProps> = props =>{
    const {onChange}= props;
    const [currentValue, setCurrentValue] = useState('acb');

    useEffect(() =>{
        console.log('useEffect', {CurrentValue});
        onChange && onChange(currentValue)
    },[currentValue])

    const changeInput = (e: ChangeEvent<HTMLInputElement>) =>{
        setCurrentValue(e.target.value)
        onChange && onChange(e);
    };
    console.log(currentValue);
    
    return (
        <input value={currentValue} onChange={onChange} />
    )
}

export default Input
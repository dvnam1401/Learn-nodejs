import React from 'react';
import { useController } from 'react-hook-form';

const RadioHook = (props) => {
    const { field } = useController({
        name: props.name,
        control: props.control // Pass control from props
    });

    return (
        <label className=" flex-grow items-center cursor-pointer  custom-radio"> 
            <input type="radio" {...field} {...props}  />
            <span>{props.label}</span> {/* Display label for the radio button */}
            <div className=" w-full h-full rounded-full"></div>
        </label>
    );
};

export default RadioHook;

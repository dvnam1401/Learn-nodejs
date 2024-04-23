import React from 'react';
import { useController } from 'react-hook-form';

const CheckboxHook = (props) => {
    const { field } = useController({
        name: props.name,
        control: props.control // Pass control from props
    });

    return (
        <label className="flex-grow items-center cursor-pointer custom-checkbox"> 
        <input type="checkbox" {...field} {...props} />
        <span>{props.label}</span> {/* Display label for the checkbox */}
        <div className="flex items-center gap-x-3">
            <div className="w-full h-full rounded-md flex items-center justify-center">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7453 4.89733L5.93178 12.7109L2.25482 9.03391L3.17132 8.11741L5.93178 10.8714L12.8288 3.98083L13.7453 4.89733Z" fill="white"/>
                </svg>
            </div>
            <label htmlFor={props.name} className="text-sm cursor-pointer"></label> {/* Add a label for the checkbox */}
        </div>
    </label>
    
    );
};

export default CheckboxHook;

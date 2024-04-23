import React from 'react';
import useClickOutSide from '../../hooks/useClickOutSide';
import { useWatch } from 'react-hook-form';

const DropdownHook = (control,setValue,name) => {
    const { show, setShow, nodeRef } = useClickOutSide();
    const jobValue = useWatch({
        control,
        name: "job",
        defaultValue: ""
    });
    console.log("DropdownHook ~ jobValue",jobValue);
    const handleClickDropdown = (e) => {
        setValue(name, e.taget.value);
        setShow(false);
    };

    return (
        <div className="relative" ref={nodeRef}>
            <div
                className="p-5 rounded-lg border border-gray-100 bg-white flex items-center justify-between cursor-pointer"
                onClick={() => setShow(!show)}
            >
                <span>{jobValue || "Select your job"}</span>
            </div>
           
            <div className={`absolute top-full left-0 w-full rounded-lg bg-white ${show ? "" : "opacity-0 invisible"}`}>
                <div className="p-5 cursor-pointer hover:bg-gray-100" onClick={handleClickDropdown}>Teacher</div>
                <div className="p-5 cursor-pointer hover:bg-gray-100" onClick={handleClickDropdown}>Doctor</div>
                <div className="p-5 cursor-pointer hover:bg-gray-100" onClick={handleClickDropdown}>Developer</div>
                <div className="p-5 cursor-pointer hover:bg-gray-100" onClick={handleClickDropdown}>Grab</div>
            </div>
        </div>
    );
};
export default DropdownHook;
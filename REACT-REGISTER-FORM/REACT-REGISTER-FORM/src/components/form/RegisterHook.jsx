import React from 'react';
import { useForm } from 'react-hook-form';
import InputHook from '../input/InputHook';
import RadioHook from '../radio/RadioHook';
import CheckboxHook from '../checkbox/CheckboxHook';
import DropdownHook from '../dropdown/DropdownHook';
const RegisterHook = () => {
    const {
        // register,
        handleSubmit,
        //  formState:{},
        control,
        setValue,
        // getValues,

    } =useForm();
    const onSubmitHandle = (values) =>{
        console.log(values);
    };
    return (
        <form onSubmit={handleSubmit(onSubmitHandle)} className="max-w-[300px] mx-auto my-10">
        <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="username" className='cursor-pointer'>Username</label>
                <InputHook name="username" placeholder="Enter your username" id="username" control={control } type="text"></InputHook>
                

                <p className="text-red-500 text-sm">Please enter your username</p>
                </div>
             
                <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="email" className='cursor-pointer'>Email Address</label>
                <InputHook name="email" placeholder="Enter your email" id="email" control={control } type="email"></InputHook>
                 <p className="text-red-500 text-sm">Please enter your email</p>
                </div>
               
               
                <div className="flex flex-col gap-3 mb-5">
                <label htmlFor="password" className='cursor-pointer'>Password</label>
                <InputHook name="password" placeholder="Enter your password" id="password" control={control } type="password"></InputHook>
               
                <p className="text-red-500 text-sm">Please enter your password</p>
                </div>
               

                            <div className="flex flex-col gap-3 mb-5">
                <label className="cursor-pointer">Gender</label>
                <div className="flex items-center gap-5">
                    <RadioHook control={control} name="gender" label=" Male"  value="Male"/>
                    <RadioHook control={control} name="gender" label=" Female" value="Female" />
                </div>
            </div>
            <div className="flex flex-col gap-3 mb-5">
                <label className="cursor-pointer">Are you</label>
                <DropdownHook control={control} name="gender" setValue={setValue} />
                </div>

            <div>
            <CheckboxHook control={control} name="gender" label=" I accept the terms and conditions" />
                    </div>



                <button className="w-full p-5 bg-blue-500 text-white rounded-lg  font-semibold" >Submit</button>
        
        </form>
    );
};

export default RegisterHook;
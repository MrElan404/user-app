import './SignUp.css';
import { useNavigate } from 'react-router-dom';
// import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SignupModel } from '../models/signupModels';
import axios from 'axios';
// import axios from 'axios';
import staticText from './../staticData.json';


export const SignUp = () => {

    const navigate = useNavigate()

    const { register, formState: { errors }, handleSubmit, reset} = useForm<SignupModel | any>(
        {mode: "onChange"}
    )

    const config = {     
        headers: { 'content-type': 'application/json' }
    }

    const onsubmit: SubmitHandler<SignupModel> = (data: any): void => {
        axios.post(staticText.INPUT_DATA_API, JSON.stringify(data), config).then(res => {
            console.log('new data added')
        }).catch(err => console.log(err));

        console.log(data);
        reset();
        navigate('/login',{replace:true})
    }

    return (
        <>
            <div className="signup-page">
                <div className="signup-content">
                    <div className="signup-card">
                        <h1>Sign Up</h1>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <div className="form-sec">
                                <div className="form-sec-1">
                                    <div className="form-field">
                                        <label>Name <span style={{color:'tomato', fontSize:18}}>*</span>:</label>
                                        <input type="text"
                                            id="name"
                                            {...register('name', { required: true, minLength: 3, maxLength: 20 })} />
                                        {errors?.name?.type === 'required' && <small>Name is required.</small>}
                                        {errors?.name?.type === 'minLength' && <small>Name is Minimum 3 characters required.</small>}
                                        {errors?.name?.type === 'maxLength' && <small>Name is only between the 20 characters.</small>}
                                    </div>
                                    <div className="form-field">
                                        <label>Age <span style={{color:'tomato', fontSize:18}}>*</span>:</label>
                                        <input type="number"
                                            id="age"
                                            {...register('age', { required: true, min: 18 })} />
                                            {errors?.age?.type === 'required' && <small>Age is required.</small>}
                                            {errors?.age?.type === 'min' && <small>Age is 18 years or above required.</small>}
                                    </div>
                                    <div className="form-field">
                                        <label>Email <span style={{color:'tomato', fontSize:18}}>*</span>:</label>
                                        <input type="email"
                                            id="email"
                                            {...register('email', { required: true })} />
                                            {errors.email && <small>email is required.</small>}
                                    </div>
                                    <div className="form-field">
                                        <label>Mobile No <span style={{color:'tomato', fontSize:18}}>*</span>:</label>
                                        <input type="text"
                                            id="mobile" maxLength={10}
                                            {...register('mobile', { required: true, pattern: /\d{10}/,})} />
                                            {errors?.mobile?.type ==='required' && <small>Mobile number is required.</small>}
                                            {errors?.mobile?.type === 'pattern' && <small>Enter valid mobile number .</small>}
                                    </div>
                                </div>
                                <div className="form-sec-2">
                                    <div className="form-field">
                                        <label>Password <span style={{color:'tomato', fontSize:18}}>*</span>: </label>
                                        <input type="password"
                                            id="password"
                                            {...register('password', { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/,})} />
                                            {errors?.password?.type === 'required' && <small>Password is required.</small>}
                                            {errors?.password?.type === 'pattern' && <small>1. Password must be 8 to 15 characters<br />
                                                2. At least one Uppercase<br />3. At least one lowercase<br />4. One numeric digit<br />
                                                5. One special character.</small>}
                                    </div>
                                    <div className="form-field">
                                        <label>Confrim Password <span style={{color:'tomato', fontSize:18}}>*</span>:</label>
                                        <input type="password"
                                            id="conPassword"
                                            {...register('conPassword', { required: true, })} />
                                            {errors.conPassword && <small>Confrim Password is required.</small>}
                                    </div>
                                    <div className="form-field">
                                        <label>Address <span style={{color:'tomato', fontSize:18}}>*</span>:</label>
                                        <textarea
                                            id="address" rows={6}
                                            {...register('address', { required: true })} ></textarea>
                                            {errors.address && <small>Address is required.</small>}
                                    </div>
                                </div>
                            </div>
                            <button className='signup-btn' type='submit'>SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
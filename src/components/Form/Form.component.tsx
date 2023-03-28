import React, { SyntheticEvent, useReducer } from 'react';
import styles from './Form.module.css';
import { signIn } from 'next-auth/react';
function FormComponent() {
    const handleFormSubmit = async (e: SyntheticEvent)=>{
        e.preventDefault();
        const { password, ...others } = state;
        if (password !==others['confirm-password']) {
            dispatch({name:'response',value:{code:401,message:"Passwords don't match!!"}})
        }
        type sentResponse = Omit<FormComponents,'confirm-password'|'response'| 'passwordType'>
        const sendingResp: sentResponse = {
            name: state.name,
            email: state.email,
            password: state.password,
            phone: state.phone,
            age: state.age,
            location: state.location,
            dob: state.dob,
            sex: state.sex
        }
        console.log(sendingResp);
        const res = await fetch('/api/auth/sign-up',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...sendingResp})
        })
        const data = await res.json();
        console.log(data.message,res.status);
        if (res.status===(200| 201)) {
            //sign in the user
            const status = await signIn('credentials', {
                redirect: false,
                email: state.email,
                password: state.password
            })
            console.log(status);
        }
        
        dispatch({name:'response',value:{code:res.status,message:data.message}})
        console.log(data);
    }
    type FormComponents={
        name: string
        email: string
        phone: string
        password: string
        age: number
        location: string
        dob: string
        sex: 'MALE' | 'FEMALE' | '',
        passwordType: boolean,
        'confirm-password': string,
        response: {
            code: number,
            message: string
        }
    }
    const formVals: FormComponents={
        name: '',
        email: '',
        age:0,
        phone: '',
        password: '',
        location: '',
        dob: '',
        sex: '',
        'confirm-password': '',
        response: {
            code: 0,
            message: ''
        },
        passwordType: false
    }
    function signInReducer(prev: FormComponents,next: {name :string,value: string | {code:number,message:string} | boolean}) {
        return {
            ...prev,
            [next.name]: next.value
        }
    }
    const [state,dispatch] = useReducer(signInReducer,formVals)
    function handleOnChange(e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLSelectElement>){
        if (e.target instanceof HTMLSelectElement) {
            dispatch({name: e.target.name,value: e.target.value})
           return;
        }
        const {name,value} = e.target as HTMLTextAreaElement
        dispatch({name: name ,value: value})
    }
    async function handleSignIn(e: SyntheticEvent){
        e.preventDefault();
        const status = await signIn('credentials',{
            redirect: false,
            email: state.email,
            password: state.password
        })
        console.log(status)
    }
    return (
        <>
            
            <div className={styles.form_container}>
                <form className={styles.form}>
                    <p style={{fontWeight: 'bold', fontSize: '20px'}}>Already have an Account? </p>
                    <div className={styles.form_element}>
                        <label>Email</label>
                        <input name='email' value={state.email} required type="email" onChange={handleOnChange}/>
                    </div>
                    <div className={styles.form_element}>
                        <label>Password</label>
                        <input name='password' value={state.password} required type={state.passwordType?'text':'password'} onChange={handleOnChange} />
                        <p onClick={()=>dispatch({name:'passwordType', value: !state.passwordType})}  style={{cursor:'pointer',display:'inline-block'}}>show</p>
                    </div>
                    <input onClick={handleSignIn} type="submit" value="SIGN IN" />
                    <input style={{color: 'white', background:'blue'}} required type="submit" value="SIGN IN WITH GOOGLE" />
                </form>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <p style={{fontWeight: 'bold', fontSize: '20px'}}>Create an Account Today!!</p>
                    {
                        state.response.message?(
                            <p  className={state.response.code===201? styles.success_message:styles.failure_message}>{state.response.message}</p>
                        ):''
                    }
                    <div className={styles.form_element}>
                        <label>Name</label>
                        <input name='name' value={state.name} required type="text" onChange={handleOnChange} />
                    </div>
                    <div className={styles.form_element}>
                        <label>Email</label>
                        <input name='email' value={state.email} required type="email" onChange={handleOnChange}/>
                    </div>
                    {/* input type select */}
                    <div className={styles.form_element}>
                        <select onChange={handleOnChange} name="sex" id="sex">
                            <option value='MALE'>MALE</option>
                            <option value='FEMALE'>FEMALE</option>
                        </select>
                    </div>
                    <div className={styles.form_element}>
                        <label>PhoneNumber</label>
                        <input name='phone' value={state.phone} required type="text" onChange={handleOnChange} />
                    </div>
                    <div className={styles.form_element}>
                        <label>Age</label>
                        <input name='age' value={state.age} required type="number" onChange={handleOnChange} />
                    </div>
                    <div className={styles.form_element}>
                        <label >Location</label>
                        <input name='location' value={state.location} required type="text" onChange={handleOnChange} />
                    </div>
                    <div className={styles.form_element}>
                        <label>Date of Birth</label>
                        <input name='dob' value={state.dob} required type="date" onChange={handleOnChange} />
                    </div>
                    <div className={styles.form_element}>
                        <label >Password</label>
                        <input name='password' value={state.password} required type="password" onChange={handleOnChange} />
                    </div>
                    <div className={styles.form_element}>
                        <label>Confirm Password</label>
                        <input name='confirm-password' value={state['confirm-password']} required type="password" onChange={handleOnChange} />
                    </div>
                    
                    <input required type="submit" value="SIGN UP" />
                </form>
            </div>
        </>
    );
}

export default FormComponent;
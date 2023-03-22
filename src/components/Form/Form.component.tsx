import React, { SyntheticEvent, useReducer } from 'react';
import styles from './Form.module.css'
function FormComponent() {
    const handleFormSubmit = async (e: SyntheticEvent)=>{
        e.preventDefault();
        console.log(state);
        const { password, ...others } = state;
        if (password !==others['confirm-password']) {
            dispatch({name:'response',value:{code:401,message:"Passwords don't match!!"}})
        }
        type sentResponse = Omit<FormComponents,'confirm-password'|'response'>
        
        const sendingResp: sentResponse = {
            name: state.name,
            email: state.email,
            password: state.password,
            phoneNumber: state.phoneNumber
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
        
        dispatch({name:'response',value:{code:res.status,message:data.message}})
        console.log(data);
    }
    type FormComponents={
        name: string
        email: string
        phoneNumber: string
        password: string
        'confirm-password': string,
        response: {
            code: number,
            message: string
        }
    }
    const formVals: FormComponents={
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        'confirm-password': '',
        response: {
            code: 0,
            message: ''
        }
    }
    function signInReducer(prev: FormComponents,next: {name :string,value: string|{code:number,message:string}}) {
        return {
            ...prev,
            [next.name]: next.value
        }
    }
    const [state,dispatch] = useReducer(signInReducer,formVals)
    function handleOnChange(e: React.FormEvent<HTMLInputElement>){
        const {name,value} = e.target as HTMLTextAreaElement
        dispatch({name: name ,value: value})
        
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
                        <input name='password' value={state.password} required type="password" onChange={handleOnChange} />
                    </div>
                    <input required type="submit" value="SIGN IN" />
                    <input required type="submit" value="SIGN IN WITH GOOGLE" />
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
                    <div className={styles.form_element}>
                        <label>PhoneNumber</label>
                        <input name='phoneNumber' value={state.phoneNumber} required type="text" onChange={handleOnChange} />
                    </div>
                    <div className={styles.form_element}>
                        <label>Password</label>
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
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Form, {FormInput} from '@/components/Forms';

const SignupForm: React.FC = () => {
	const router = useRouter();
	const handleSubmit = async (formData: { [key: string]: string }) => {
		console.log(formData);
		const res = await fetch('/api/auth/sign-up',{
			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify({...formData})
		})
  		const data = await res.json();
  		console.log(data.message,res.status);
		if (res.status===(200| 201)) {
			//sign in the user
			const status = await signIn('credentials', {
				redirect: false,
				email: data.email,
				password: data.password
			})
      		console.log(status);
      		//redirect to home page
      		router.push('/')
  		}
  };

  const inputs: FormInput[] = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Enter your fullnames",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confrim your password",
      required: true,
    },
  ];

  return (
    <Form onSubmit={handleSubmit} inputs={inputs} buttonText={"Sign Up"} />
  );
};

export default SignupForm;

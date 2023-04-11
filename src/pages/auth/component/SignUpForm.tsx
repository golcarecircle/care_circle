import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Form, {FormInput} from '@/components/Forms';

const SignupForm: React.FC = () => {
	const router = useRouter();
	const handleSubmit = async (formData: { [key: string]: string }) => {
		console.log(formData);
		const {fullName,email,password, confirmPassword} = formData;
		if (!fullName || !email || !password || !confirmPassword) {
			throw new Error("All fields are required");
		}
		if (password !== confirmPassword) {
			throw new Error("Passwords do not match");
		}
		type Data = Omit<typeof formData, 'confirmPassword'>;
		const dataSent: Data = {
			fullName: formData.fullName,
			email: formData.email,
			password: formData.password
		}
		//sign up logic here
		const res = await fetch('/api/auth/sign-up',{
			method: 'POST',
			headers:{
				'Content-Type':'application/json'
			},
			body: JSON.stringify({...dataSent})
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

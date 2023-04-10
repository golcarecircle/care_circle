import React from "react";
import Form, {FormInput} from '@/components/Forms';

const SignupForm: React.FC = () => {
  const handleSubmit = (formData: { [key: string]: string }) => {
    console.log(formData);
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

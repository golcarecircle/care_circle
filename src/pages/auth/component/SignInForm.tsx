import React from "react";
import Form, {FormInput} from '@/components/Forms';

const SignInForm: React.FC = () => {
  const handleSubmit = (formData: { [key: string]: string }) => {
    console.log(formData);
  };

  const inputs: FormInput[] = [
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
  ];

  return (
    <Form onSubmit={handleSubmit} inputs={inputs} buttonText={"Sign In"} >
      <p>forgot password</p>
    </Form>
  );
};

export default SignInForm;

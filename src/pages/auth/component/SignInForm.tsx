import React from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Form, { FormInput } from "@/components/Forms";

const SignInForm: React.FC = () => {
  const router = useRouter();

  const handleSubmit = async (formData: { [key: string]: string }) => {
    try {
      if (!formData.email || !formData.password) {
        throw new Error("Email and password are required");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      if (formData.password.length < 8) {
        throw new Error("Password must be at least 8 characters long");
      }

      //login logic here
      const status = await signIn("credentials", {
        redirect: false,
        email: formData.email,
        password: formData.password,
      });

      // If all checks pass, navigate to the dashboard
      await router.push("/dashboard/patient");
    } catch (error) {
      alert(error);
    }
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
    <Form onSubmit={handleSubmit} inputs={inputs} buttonText={"Sign In"}>
      <p>Forgot password?</p>
    </Form>
  );
};

export default SignInForm;

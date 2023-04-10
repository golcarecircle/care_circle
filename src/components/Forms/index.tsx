import React, { useState } from "react";
import Button from "../Btn";
import styles from './Form.module.css'

interface FormInput {
  name: string;
  label?: string;
  type: "text" | "email" | "password";
  value?: string;
  placeholder?: string;
  required: boolean
}

interface FormProps {
  children?: React.ReactNode;
  onSubmit: (data: { [key: string]: string }) => void;
  inputs: FormInput[];
  buttonText: string; // added prop for dynamic button text
}

const Form: React.FC<FormProps> = ({ onSubmit, inputs, buttonText, children }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Check if all fields are valid
    const form = e.currentTarget;
    const isValid = form.checkValidity();
    if (!isValid) {
      // Handle invalid form

      form.reportValidity();
      return;
    }
  
    onSubmit(formData);
  };
  
  
  return (
    <form className={styles.form}>
      {inputs.map((input, index) => (
        <div key={index}>
          <label>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            value={formData[input.name] || input.value}
            onChange={handleInputChange}
            placeholder={input.placeholder}
            required={input.required}
            minLength={input.type === 'password' ? 8 : undefined}
          />
        </div>
      ))}
      {children}
      <Button 
        onClick={() => handleSubmit} 
        text={buttonText} // use the buttonText prop to update the button text
        size="lg"
      />
    </form>
  );
};

export default Form;
export type { FormInput };

import React, { useState } from 'react';
import Button from '../Btn';
import styles from './Form.module.css';

interface FormInput {
  name: string;
  label?: string;
  type: 'text' | 'email' | 'password' | 'tel';
  value?: string;
  placeholder?: string;
  required: boolean;
}

interface FormProps {
  children?: React.ReactNode;
  onSubmit: (data: { [key: string]: string }) => Promise<void>; // return Promise
  inputs: FormInput[];
  buttonText: string;
}

const Form: React.FC<FormProps> = ({
  onSubmit,
  inputs,
  buttonText,
  children,
}) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    // add async and Promise<void> type
    e.preventDefault();
    const form = e.currentTarget;
    const isValid = form.checkValidity();
    if (!isValid) {
      form.reportValidity();
      return;
    }
    try {
      await onSubmit(formData); // add await
      window.location.assign('/dashboard/patient'); // redirect to dashboard on success
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
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
        onClick={async () => {
          // add async and try/catch to handle errors
          try {
            await handleSubmit;
          } catch (error) {
            console.log(error);
          }
        }}
        text={buttonText}
        size="lg"
      />
    </form>
  );
};

export default Form;
export type { FormInput };

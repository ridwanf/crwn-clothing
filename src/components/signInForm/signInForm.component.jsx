import { useState } from "react";
import {
  signInWithEmailPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";


import Button from "../button/button.component";
import FormInput from "../formInput/formInput.component";
import './signInForm.styles.scss';

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailPassword(email,password);
      resetFormFields();
    } catch (error) {
      resetFormFields();
      console.log(error);
    }
};
  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          className="form-input"
          type="email"
          required
          onChange={handleChange}
          value={email}
          name="email"
        />
        <FormInput
          label="Password"
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          value={password}
          name="password"
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;

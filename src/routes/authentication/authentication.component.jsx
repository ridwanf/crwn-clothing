import SignInForm from "../../components/signInForm/signInForm.component";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;
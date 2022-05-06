import SignInForm from "../../components/signInForm/signInForm.component";
import SignUpForm from "../../components/signUpForm/signUpForm.component";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import './authentication.styles.scss';

const Authentication = () => {
  const logGoogleUser = async () => {
    const {user}  = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
    <div className="auth-container">
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Authentication;
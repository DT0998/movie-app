import { Loginform } from '../../components/login-form/login-form';
import './login.css'
export const Loginpage = () => {
     // change title
     document.title = "Login";
  return (
    <div className='login'>
      <Loginform/>
    </div>
  );
};

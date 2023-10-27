import './styles.css';
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
// const Logo = require("../../assets/logo.svg") as string;

function SignIn() {
  return (
    <div className='container containerSignIn'>
      <div className='signIn'>
        <img src={Logo} alt="logo" />
        <form>
          <input type="text" placeholder='E-mail' />
          <input type="password" placeholder='password' />

          <span>Não tem cadastro?
            <Link to="/SignUp">Clique aqui!</Link>
          </span>

          <button className='btn-pink'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
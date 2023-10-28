import './styles.css';
import Logo from '../../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { handleGetToken, handleAddToken } = useAuth()

  useEffect(() => {
    const token = handleGetToken()

    if (token) {
      navigate('/main')
    }
  }, [])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    try {

      if (!email || !password) {
        throw new Error('Email e senha é necessario')
      }

      const response = await api.post('/login', {
        email,
        password
      })
      const { accessToken } = response.data
      handleAddToken(accessToken)
      navigate('/main')

    } catch (erro) {
      console.log(erro);
    }
  }

  return (
    <div className='container containerSignIn'>
      <div className='signIn'>
        <img src={Logo} alt="logo" />
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder='E-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

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
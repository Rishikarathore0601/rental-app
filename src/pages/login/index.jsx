// Login.jsx
import { useState } from 'react'
import styles from './styles.module.scss'

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Handle login logic here (e.g., API call)
    console.log(credentials)
    setCredentials({ email: '', password: '' }) // Reset form after submission
  }

  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <input
          type='password'
          name='password'
          placeholder='Your Password'
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type='submit'>Login</button>
      </form>
      <p className={styles.footer}>
        Don&apos;t have an account? <a href='/register'>Register here</a>
      </p>
    </div>
  )
}

export default Login

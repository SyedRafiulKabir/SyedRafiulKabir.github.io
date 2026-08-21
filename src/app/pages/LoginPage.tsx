import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { setAuthenticated } from '../../shared/state/portfolioStore'
import styles from './LoginPage.module.css'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
export function LoginPage() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password !== ADMIN_PASSWORD) {
      setError('Invalid password')
      return
    }
    setAuthenticated(true)
    navigate('/admin')
    window.location.reload()
  }

  return (
    <section className={styles.wrap}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Admin Login</h1>
        <p className={styles.text}>Use your admin password to edit portfolio content.</p>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        {error ? <div className={styles.error}>{error}</div> : null}
        <button className={styles.button} type="submit">
          Login
        </button>
      </form>
    </section>
  )
}


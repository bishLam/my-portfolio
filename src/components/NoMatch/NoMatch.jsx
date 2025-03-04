import React from 'react'
import styles from "./NoMatch.module.css"
import { useNavigate } from 'react-router-dom'

export const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
        <h1>404 Page Not Found</h1>
      <p>Sorry, but the page you were trying to view does not exist.</p>
      <button onClick={() => navigate("/")}>Go to Homepage Instead</button>
    </div>
  )
}

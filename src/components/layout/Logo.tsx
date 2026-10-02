import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.png'

export function Logo() {
  return (
    <Link className="brand" to="/" aria-label="Finance Discipline home">
      <div className="logo-icon">
        <img className="brand-logo" src={logo} alt="Finance Discipline logo" />
      </div>
      <div className="logo-text">
        <strong>FINANCE DISCIPLINE</strong>
        <span>BUILD DISCIPLINE. BUILD WEALTH.</span>
      </div>
    </Link>
  )
}

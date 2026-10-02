import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const navItems = [['Psychology', '/psychology'], ['Wealth building', '/wealth-building'], ['Money mistakes', '/money-mistakes'], ['Experiments', '/experiments']]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Logo />
        <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([label, href]) => <Link key={href} to={href} onClick={() => setOpen(false)}>{label}<ChevronDown size={13} /></Link>)}
          <Link to="/tools" onClick={() => setOpen(false)}>Tools</Link>
          <Link className="nav-newsletter" to="/newsletter" onClick={() => setOpen(false)}>Newsletter</Link>
        </nav>
        <div className="header-actions"><button className="icon-button" aria-label="Search"><Search size={19} /></button><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>
      </div>
    </header>
  )
}

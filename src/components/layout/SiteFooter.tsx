import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const youtubeChannelUrl = import.meta.env.VITE_YOUTUBE_CHANNEL_URL || 'https://www.youtube.com/@FinanceDiscipline7'
const instagramProfileUrl = import.meta.env.VITE_INSTAGRAM_PROFILE_URL || 'https://www.instagram.com/financediscipline7/'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <Logo />
          <p className="footer-note">Better decisions start with understanding<br />the mind behind the money.</p>
        </div>
        <div className="footer-links">
          <div>
            <p className="footer-label">Explore</p>
            <Link to="/psychology">Psychology</Link>
            <Link to="/wealth-building">Wealth building</Link>
            <Link to="/money-mistakes">Money mistakes</Link>
          </div>
          <div>
            <p className="footer-label">Resources</p>
            <Link to="/experiments">Experiments</Link>
            <Link to="/tools">Tools</Link>
            <Link to="/about">About</Link>
          </div>
          <div>
            <p className="footer-label">Follow Finance Discipline</p>
            <a className="social-link" href={youtubeChannelUrl} target="_blank" rel="noreferrer">
              YouTube
            </a>
            <a className="social-link" href={instagramProfileUrl} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <Link to="/newsletter" className="footer-cta">Join the newsletter <ArrowUpRight size={15} /></Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Finance Discipline</span><span>Privacy · Terms · Disclaimer</span></div>
    </footer>
  )
}

import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { tools } from '../../data/tools'

export function ToolsPage() {
  return (
    <main className="tools-page">
      {/* Dark Hero Section */}
      <section
        className="hero-section"
        style={{ gridTemplateColumns: '1fr', minHeight: '500px', paddingTop: '100px', paddingBottom: '100px' }}
      >
        <div className="hero-copy">
          <p className="kicker">Interactive Experiences</p>
          <h1>
            Tools for better
            <br />
            <em>money decisions.</em>
          </h1>
          <p className="hero-description">
            Build discipline with interactive tools designed to improve your financial behavior. Understand your biases,
            evaluate decisions, and see the power of compound growth.
          </p>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="tools-grid" style={{ maxWidth: 'var(--max-width)', margin: '0 auto' }}>
        {tools.map(({ id, title, description, icon: Icon }) => (
          <div className="tool-card" key={id}>
            <div style={{ marginBottom: '16px' }}>
              <Icon size={32} color="var(--cyan)" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link className="button button--primary" to={`/tools/${id}`}>
              Open tool <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </section>

      {/* Dark Closing CTA */}
      <section className="newsletter-band" style={{ marginTop: '80px' }}>
        <div className="site-header__inner">
          <div>
            <p className="kicker">Ready to build discipline?</p>
            <h2>
              Join our
              <em>learning community</em>
            </h2>
          </div>
          <div>
            <p>Get weekly insights on behavioral finance alongside our tools and resources.</p>
            <Link className="button button--primary" to="/newsletter">
              Join the newsletter <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

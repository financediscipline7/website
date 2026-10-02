import { ArrowRight, Heart, Lightbulb, Target } from 'lucide-react'
import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <main>
      {/* Dark Hero Section */}
      <section className="about-hero">
        <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
          <p className="kicker">Our Story</p>
          <h1>
            We believe
            <br />
            <em>better decisions</em> start with understanding.
          </h1>
          <p className="hero-description" style={{ marginTop: '30px', maxWidth: '600px' }}>
            Finance Discipline is a behavioral finance resource for people who want to understand the psychology behind
            their money decisions—and build better financial habits.
          </p>
        </div>
      </section>

      {/* Light Story Section */}
      <section className="about-story">
        <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
          <p className="kicker" style={{ color: 'var(--primary-cyan)' }}>The Mission</p>
          <h2 style={{ color: 'var(--dark-text)' }}>Understanding the mind behind the money.</h2>

          <p>
            Most money advice ignores the most important factor: you. Your psychology. Your habits. Your fears and
            desires.
          </p>

          <p>
            We built Finance Discipline to bridge the gap between academic behavioral finance and real-world money
            decisions. We share research, stories, and tools that help you understand why you make the financial choices
            you do—and how to make better ones.
          </p>

          <p>
            We don't sell products. We don't manage your money. We don't promote get-rich-quick schemes. We're here to
            help you build discipline, understand your mind, and make financial decisions you won't regret.
          </p>

          <div style={{ marginTop: '60px', marginBottom: '60px' }}>
            <h3 style={{ color: 'var(--dark-text)', fontSize: '1.5em', marginBottom: '40px' }}>What we believe</h3>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
              }}
            >
              <div>
                <Lightbulb size={32} color="var(--primary-cyan)" style={{ marginBottom: '12px' }} />
                <h4 style={{ color: 'var(--dark-text)', marginBottom: '8px' }}>Psychology Matters</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Financial decisions are psychological decisions. Understanding your mind is the foundation of financial
                  wisdom.
                </p>
              </div>
              <div>
                <Target size={32} color="var(--primary-cyan)" style={{ marginBottom: '12px' }} />
                <h4 style={{ color: 'var(--dark-text)', marginBottom: '8px' }}>Discipline Compounds</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Small consistent decisions compound into significant wealth. Discipline is more valuable than
                  intelligence.
                </p>
              </div>
              <div>
                <Heart size={32} color="var(--primary-cyan)" style={{ marginBottom: '12px' }} />
                <h4 style={{ color: 'var(--dark-text)', marginBottom: '8px' }}>Freedom is the Goal</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Money is a tool for freedom. Building financial discipline means designing the life you actually want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mission Statement */}
      <section className="newsletter-band" style={{ marginTop: '0' }}>
        <div className="site-header__inner">
          <div>
            <p className="kicker">Our commitment</p>
            <h2>
              Education over
              <em>products.</em>
            </h2>
          </div>
          <div>
            <p>Everything we create is designed to help you understand yourself better and make more intentional decisions.</p>
            <Link className="button button--primary" to="/blog">
              Explore stories <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

import { ArrowRight, Mail } from 'lucide-react'
import { useState } from 'react'

export function NewsletterPage() {
  const [email, setEmail] = useState('')
  const [signupMessage, setSignupMessage] = useState('')
  const [signupStatus, setSignupStatus] = useState<'success' | 'error' | ''>('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const endpoint = import.meta.env.VITE_NEWSLETTER_ENDPOINT
    if (!endpoint) {
      setSignupStatus('error')
      setSignupMessage('Signup is not connected yet. Add your email provider endpoint to VITE_NEWSLETTER_ENDPOINT.')
      return
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, leadMagnet: 'free-budget-template' }),
      })
      if (!response.ok) throw new Error(`Signup endpoint returned ${response.status}`)
      setSignupStatus('success')
      setSignupMessage('Thanks! Check your inbox for the free budget template.')
      setEmail('')
    } catch {
      setSignupStatus('error')
      setSignupMessage('We could not submit your request. Please try again later.')
    }
  }

  return (
    <main className="newsletter-page">
      {/* Light Intro Section */}
      <section style={{ background: 'var(--light-secondary)', padding: '80px 32px' }}>
        <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)', textAlign: 'center' }}>
          <p className="kicker" style={{ color: 'var(--primary-cyan)', marginBottom: '20px' }}>
            WEEKLY INSIGHTS
          </p>
          <h1 style={{ color: 'var(--dark-text)', marginBottom: '20px' }}>
            A better relationship
            <br />
            with <em style={{ color: 'var(--primary-cyan)' }}>money</em>
          </h1>
          <p className="hero-description" style={{ color: 'var(--text-secondary)', margin: '0 auto', maxWidth: '500px' }}>
            One thoughtful note each week on the psychology, systems, and stories behind better financial decisions.
          </p>
        </div>
      </section>

      {/* Dark Signup Section */}
      <section className="newsletter-signup">
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
          <Mail size={48} style={{ margin: '0 auto 24px', color: 'var(--primary-cyan)' }} />
          <h2 style={{ margin: '0 0 16px', color: 'var(--ink)' }}>Join the discipline.</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '32px' }}>
            Get weekly behavioral finance insights and our free budget template delivered to your inbox.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="button button--primary">
                Subscribe
              </button>
            </div>
          </form>

          {signupMessage && <p role={signupStatus === 'error' ? 'alert' : 'status'} style={{ color: signupStatus === 'error' ? '#ff9b9b' : 'var(--primary-cyan)', marginTop: '16px', fontSize: '14px' }}>{signupMessage}</p>}

          <p style={{ color: 'var(--muted)', fontSize: '12px', marginTop: '24px' }}>
            No spam. No gimmicks. Just better thinking about money.
          </p>
        </div>
      </section>

      {/* Light Benefits Section */}
      <section style={{ background: 'var(--white)', padding: '60px 32px' }}>
        <div className="site-header__inner" style={{ maxWidth: 'var(--max-width)' }}>
          <h2 style={{ color: 'var(--dark-text)', textAlign: 'center', marginBottom: '40px' }}>
            What you'll get each week
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2em',
                  marginBottom: '12px',
                  color: 'var(--primary-cyan)',
                }}
              >
                📖
              </div>
              <h3 style={{ color: 'var(--dark-text)', marginBottom: '8px' }}>Behavioral Insights</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Deep-dive stories about psychological patterns that influence your money decisions.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2em',
                  marginBottom: '12px',
                  color: 'var(--primary-cyan)',
                }}
              >
                💡
              </div>
              <h3 style={{ color: 'var(--dark-text)', marginBottom: '8px' }}>Actionable Systems</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Practical frameworks and systems you can apply to improve your financial discipline.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '2em',
                  marginBottom: '12px',
                  color: 'var(--primary-cyan)',
                }}
              >
                🎯
              </div>
              <h3 style={{ color: 'var(--dark-text)', marginBottom: '8px' }}>Real Stories</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                Stories of people who made costly mistakes and learned expensive lessons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Final CTA */}
      <section className="newsletter-band">
        <div className="site-header__inner">
          <div>
            <p className="kicker">Ready to learn?</p>
            <h2>
              Build discipline
              <br />
              <em>one decision at a time.</em>
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '12px' }}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  background: 'var(--dark-elevated)',
                  border: '1px solid var(--dark-border)',
                  color: 'var(--ink)',
                  fontFamily: 'inherit',
                }}
                required
              />
              <button type="submit" className="button button--primary">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
            {signupMessage && <p role={signupStatus === 'error' ? 'alert' : 'status'} style={{ marginTop: '12px', color: signupStatus === 'error' ? '#ff9b9b' : 'var(--primary-cyan)' }}>{signupMessage}</p>}
          </div>
        </div>
      </section>
    </main>
  )
}

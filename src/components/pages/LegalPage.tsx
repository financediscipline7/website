import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export function LegalPage({ type }: { type: 'privacy' | 'terms' | 'disclaimer' }) {
  const content: Record<string, { title: string; sections: Array<{ heading: string; content?: string; items?: string[] }> }> = {
    privacy: {
      title: 'Privacy Policy',
      sections: [
        {
          heading: 'Introduction',
          content:
            'Finance Discipline ("we" or "us" or "our") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.',
        },
        {
          heading: 'Information Collection and Use',
          content:
            'We collect several different types of information for various purposes to provide and improve our Service to you.',
        },
        {
          heading: 'Types of Data Collected',
          items: [
            'Personal Data: While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to: Email address, First and last name, Usage Data',
            'Usage Data: We may also collect information on how the Service is accessed and used ("Usage Data").',
          ],
        },
        {
          heading: 'Security of Data',
          content:
            'The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure.',
        },
      ],
    },
    terms: {
      title: 'Terms of Service',
      sections: [
        {
          heading: 'Agreement',
          content:
            'By accessing and using Finance Discipline, you accept and agree to be bound by the terms and provision of this agreement.',
        },
        {
          heading: 'Use License',
          content:
            'Permission is granted to temporarily download one copy of the materials (information or software) on Finance Discipline for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
          items: [
            'Modifying or copying the materials',
            'Using the materials for any commercial purpose or for any public display',
            'Attempting to decompile or reverse engineer any software contained on the website',
            'Removing any copyright or other proprietary notations from the materials',
            'Transferring the materials to another person or "mirroring" the materials on any other server',
          ],
        },
        {
          heading: 'Disclaimer',
          content:
            'The materials on Finance Discipline are provided on an "as is" basis. Finance Discipline makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
        },
      ],
    },
    disclaimer: {
      title: 'Disclaimer',
      sections: [
        {
          heading: 'Educational Purpose Only',
          content:
            'Finance Discipline provides educational content about behavioral finance, money management, and financial psychology. This content is for informational and educational purposes only and should not be considered as professional financial, investment, or legal advice.',
        },
        {
          heading: 'Not Financial Advice',
          content:
            'The information provided on this website is not intended to be, and should not be construed as, personal financial advice, investment advice, or a recommendation to buy or sell any particular security. Before making any financial decisions, you should consult with a qualified financial advisor or professional.',
        },
        {
          heading: 'Market Risks',
          content:
            'All investments carry risk, including the potential loss of principal. Past performance does not guarantee future results. The information provided is based on sources believed to be reliable but is not guaranteed for accuracy or completeness.',
        },
        {
          heading: 'No Liability',
          content:
            'Finance Discipline shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your use of or inability to use the materials or content, even if Finance Discipline has been advised of the possibility of such damages.',
        },
      ],
    },
  }

  const page = content[type]

  return (
    <main className="legal-page">
      <h1>{page.title}</h1>

      {page.sections.map((section, idx) => (
        <div key={idx}>
          <h2>{section.heading}</h2>
          {section.content && <p>{section.content}</p>}
          {section.items && (
            <ul>
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div style={{ marginTop: '60px', paddingTop: '30px', borderTop: '1px solid var(--light-border)' }}>
        <p>
          <strong>Last updated:</strong> {new Date().getFullYear()}
        </p>
        <p>
          <Link to="/" style={{ color: 'var(--primary-cyan)' }}>
            Return to home <ArrowRight size={14} style={{ display: 'inline', marginLeft: '4px' }} />
          </Link>
        </p>
      </div>
    </main>
  )
}

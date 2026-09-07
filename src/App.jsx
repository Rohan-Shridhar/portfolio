import { useEffect, useState } from 'react'
import Menu from './Menu.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 24
      setShowBackToTop(window.scrollY > 500)
      setIsScrolled((current) => current === nextIsScrolled ? current : nextIsScrolled)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (<>
    <header className="site-header">
      <Menu isScrolled={isScrolled} />
    </header>

    <main className="page-shell">
      <section className="panel"><Home /></section>
      <section className="panel"><About /></section>
      <section className="panel"><Skills /></section>
      <section className="panel"><Contact /></section>
      <section className="panel"><Projects /></section>
      <section className="panel"><Footer /></section>
    </main>

    {showBackToTop && (
      <button
        type="button"
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 19V5" />
          <path d="m6 11 6-6 6 6" />
        </svg>
      </button>
    )}
  </>
  );
}

export default App

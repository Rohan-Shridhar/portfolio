import { useEffect, useState } from 'react'
import Menu from './Menu.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Certificates from './Certificates.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Footer from './Footer.jsx'

function EnvironmentBackground() {
  return (
    <div className="environment-background" aria-hidden="true">
      <span className="environment-layer environment-layer-end" />
      <span className="environment-layer environment-layer-nether" />
      <span className="environment-overlay" />
    </div>
  )
}

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
    <EnvironmentBackground />

    <header className="site-header">
      <Menu isScrolled={isScrolled} />
    </header>

    <main className="page-shell">
      <section className="panel panel--center"><Home /></section>

      <div className="section-wire-rail">
        <svg
          className="section-wire"
          viewBox="0 0 100 1000"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <path
            className="section-wire-path"
            d="M 50 0 C 50 48, 18 58, 18 125 C 18 192, 82 208, 82 275 C 82 342, 18 358, 18 425 C 18 492, 82 508, 82 575 C 82 642, 18 658, 18 725 C 18 792, 82 808, 82 875 C 82 930, 50 958, 50 1000"
          />
        </svg>

        <section className="panel panel--left"><About /></section>
        <section className="panel panel--right"><Skills /></section>
        <section className="panel panel--left"><Projects /></section>
        <section className="panel panel--right"><Certificates /></section>
        <section className="panel panel--left"><Contact /></section>
        <section className="panel panel--center"><Footer /></section>
      </div>
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

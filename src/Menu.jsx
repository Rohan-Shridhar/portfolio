import { useEffect, useState } from 'react'
import { PixelBorder } from './components/ui/index.js'

const navigationItems = [
    { id: 'home', label: 'Home', href: '#home', sectionId: 'home', icon: 'fa-house' },
    { id: 'about-me', label: 'About Me', href: '#about-me', sectionId: 'about-me', icon: 'fa-book-open' },
    { id: 'skills', label: 'Skills', href: '#skills', sectionId: 'skills', icon: 'fa-gears' },
    { id: 'projects', label: 'Projects', href: '#projects', sectionId: 'projects', icon: 'fa-screwdriver-wrench' },
    { id: 'certificates', label: 'Certificates', href: '#certificates', sectionId: 'certificates', icon: 'fa-certificate' },
    { id: 'contact', label: 'Contact', href: '#contact', sectionId: 'contact', icon: 'fa-envelope' },
]

function getInitialActiveId() {
    if (typeof window === 'undefined') return 'home'

    const hash = window.location.hash.slice(1)
    return navigationItems.some((item) => item.sectionId === hash) ? hash : 'home'
}

export default function Menu({ isScrolled = false }) {
    const [activeId, setActiveId] = useState(getInitialActiveId)
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const sections = navigationItems
            .filter((item) => item.sectionId)
            .map((item) => document.getElementById(item.sectionId))
            .filter(Boolean)

        if (!sections.length) return undefined

        const visibleSections = new Map()
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSections.set(entry.target.id, entry.intersectionRatio)
                    } else {
                        visibleSections.delete(entry.target.id)
                    }
                })

                const visibleSection = [...visibleSections.entries()]
                    .sort(([, firstRatio], [, secondRatio]) => secondRatio - firstRatio)[0]

                if (visibleSection) setActiveId(visibleSection[0])
            },
            {
                rootMargin: '-24% 0px -58% 0px',
                threshold: [0, 0.15, 0.3, 0.5, 0.75, 1],
            },
        )

        sections.forEach((section) => observer.observe(section))

        const syncActiveHash = () => {
            const hash = window.location.hash.slice(1)
            if (navigationItems.some((item) => item.sectionId === hash)) setActiveId(hash)
        }

        window.addEventListener('hashchange', syncActiveHash)

        return () => {
            observer.disconnect()
            window.removeEventListener('hashchange', syncActiveHash)
        }
    }, [])

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = scrollableHeight > 0
                ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
                : 0

            setScrollProgress(progress)
        }

        updateScrollProgress()
        window.addEventListener('scroll', updateScrollProgress, { passive: true })
        window.addEventListener('resize', updateScrollProgress)

        return () => {
            window.removeEventListener('scroll', updateScrollProgress)
            window.removeEventListener('resize', updateScrollProgress)
        }
    }, [])

    const menuFrameClassName = ['menu-frame', isScrolled && 'is-scrolled']
        .filter(Boolean)
        .join(' ')
    const experienceScore = 20

    return (
        <>
            <PixelBorder
                as="nav"
                className={menuFrameClassName}
                variant="stone"
                aria-label="Primary navigation"
            >
                <ul className="menu-bar">
                    {navigationItems.map((item) => {
                        const isActive = item.sectionId === activeId

                        return (
                            <li key={item.id}>
                                <a
                                    className="menu-link"
                                    href={item.href}
                                    aria-current={isActive ? 'page' : undefined}
                                    onClick={() => setActiveId(item.sectionId)}
                                >
                                    <i className={`menu-icon fa-solid ${item.icon}`} aria-hidden="true" />
                                    <span className="menu-label">{item.label}</span>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </PixelBorder>

            <div className="player-hud" role="group" aria-label="Player status and quick navigation">
                <div className="player-hud__status">
                    <div className="player-hud__meters" role="img" aria-label="10 out of 10 hearts">
                        {Array.from({ length: 10 }, (_, index) => (
                            <img key={index} src="/wallpapers/heart.webp" alt="" />
                        ))}
                    </div>
                    <div className="player-hud__meters player-hud__meters--hunger" role="img" aria-label="10 out of 10 hunger">
                        {Array.from({ length: 10 }, (_, index) => (
                            <img key={index} src="/wallpapers/hunger.png" alt="" />
                        ))}
                    </div>
                </div>

                <div className="player-hud__experience">
                    <span className="player-hud__level">{experienceScore}</span>
                    <div
                        className="player-hud__experience-track"
                        role="progressbar"
                        aria-label="Experience"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-valuenow={Math.round(scrollProgress)}
                    >
                        {Array.from({ length: 10 }, (_, index) => (
                            <span key={index} className="player-hud__experience-segment">
                                <span
                                    className="player-hud__experience-fill"
                                    style={{ width: `${Math.min(100, Math.max(0, scrollProgress * 10 - index * 100))}%` }}
                                />
                            </span>
                        ))}
                    </div>
                </div>

                <nav className="player-hud__hotbar" aria-label="Quick navigation">
                    {navigationItems.map((item, index) => {
                        const isActive = item.sectionId === activeId

                        return (
                            <a
                                key={item.id}
                                className="player-hud__slot"
                                href={item.href}
                                aria-label={item.label}
                                aria-current={isActive ? 'page' : undefined}
                                title={item.label}
                                onClick={() => setActiveId(item.sectionId)}
                            >
                                <span className="player-hud__slot-number" aria-hidden="true">{index + 1}</span>
                                <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
                            </a>
                        )
                    })}
                    <a
                        className="player-hud__slot"
                        href="/resume.pdf"
                        download="Rohan_Mirjankar_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download resume"
                        title="Download resume"
                    >
                        <span className="player-hud__slot-number" aria-hidden="true">7</span>
                        <img src="/wallpapers/book.png" alt="" aria-hidden="true" draggable="false" />
                    </a>
                </nav>
            </div>
        </>
    )
}

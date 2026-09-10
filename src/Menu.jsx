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

    const menuFrameClassName = ['menu-frame', isScrolled && 'is-scrolled']
        .filter(Boolean)
        .join(' ')

    return (
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
                                onClick={() => {
                                    if (item.sectionId) setActiveId(item.sectionId)
                                }}
                            >
                                <i className={`menu-icon fa-solid ${item.icon}`} aria-hidden="true" />
                                <span className="menu-label">{item.label}</span>
                            </a>
                        </li>
                    )
                })}
            </ul>
        </PixelBorder>
    )
}

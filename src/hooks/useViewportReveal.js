import { useLayoutEffect, useRef, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

function shouldReduceMotion() {
    return typeof window !== 'undefined'
        && typeof window.matchMedia === 'function'
        && window.matchMedia(REDUCED_MOTION_QUERY).matches
}

export default function useViewportReveal({
    targetSelector = null,
    rootMargin = '0px 0px -12% 0px',
    threshold = 0.12,
    once = true,
    readyClass = 'reveal-ready',
    visibleClass = 'is-visible',
} = {}) {
    const ref = useRef(null)
    const [isReady, setIsReady] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useLayoutEffect(() => {
        const root = ref.current
        if (!root) return undefined

        const targets = targetSelector
            ? [...root.querySelectorAll(targetSelector)]
            : [root]

        root.classList.add(readyClass)
        setIsReady(true)

        const reveal = (elements = targets) => {
            elements.forEach((element) => element.classList.add(visibleClass))
            setIsVisible(true)
        }

        if (!targets.length || shouldReduceMotion() || !('IntersectionObserver' in window)) {
            reveal()
            return undefined
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return
                    reveal([entry.target])
                    if (once) observer.unobserve(entry.target)
                })
            },
            { rootMargin, threshold },
        )

        targets.forEach((target) => observer.observe(target))

        return () => observer.disconnect()
    }, [once, readyClass, rootMargin, targetSelector, threshold, visibleClass])

    return { ref, isReady, isVisible }
}

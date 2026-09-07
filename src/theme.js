export const ENVIRONMENTS = Object.freeze({
    END: 'end',
    NETHER: 'nether',
});

export const THEME_STORAGE_KEY = 'portfolio-theme';

let environmentTransitionTimeout;

export function isEnvironment(value) {
    return value === ENVIRONMENTS.END || value === ENVIRONMENTS.NETHER;
}

export function getInitialEnvironment() {
    if (typeof window === 'undefined') return ENVIRONMENTS.END;

    try {
        const savedEnvironment = window.localStorage.getItem(THEME_STORAGE_KEY);
        return isEnvironment(savedEnvironment) ? savedEnvironment : ENVIRONMENTS.END;
    } catch {
        return ENVIRONMENTS.END;
    }
}

export function applyEnvironment(environment) {
    const normalizedEnvironment = isEnvironment(environment)
        ? environment
        : ENVIRONMENTS.END;

    if (typeof document === 'undefined') return normalizedEnvironment;

    document.body.dataset.environment = normalizedEnvironment;
    document.body.classList.remove('light', 'space', ENVIRONMENTS.END, ENVIRONMENTS.NETHER);
    document.body.classList.add(normalizedEnvironment);

    return normalizedEnvironment;
}

export function startEnvironmentTransition(duration = 600) {
    if (typeof document === 'undefined' || typeof window === 'undefined') return;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;

    const body = document.body;
    window.clearTimeout(environmentTransitionTimeout);
    body.classList.remove('theme-switching');
    void body.offsetWidth;
    body.classList.add('theme-switching');

    environmentTransitionTimeout = window.setTimeout(() => {
        body.classList.remove('theme-switching');
        environmentTransitionTimeout = undefined;
    }, duration);
}

export function persistEnvironment(environment) {
    const normalizedEnvironment = isEnvironment(environment)
        ? environment
        : ENVIRONMENTS.END;

    if (typeof window === 'undefined') return normalizedEnvironment;

    try {
        window.localStorage.setItem(THEME_STORAGE_KEY, normalizedEnvironment);
    } catch {
        // Continue without persistence when storage is unavailable or blocked.
    }

    return normalizedEnvironment;
}

import useViewportReveal from './hooks/useViewportReveal.js';
import { Badge, BlockButton, BlockCard, PixelBorder } from './components/ui/index.js';

const socialLinks = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/rohan-mirjankar/',
        ariaLabel: 'linkedin',
        icon: 'fab fa-linkedin',
    },
    {
        label: 'GitHub',
        href: 'https://github.com/Rohan-Shridhar',
        ariaLabel: 'github',
        icon: 'fab fa-github',
    },
    {
        label: 'DEV',
        href: 'https://dev.to/rohan_mirjankar',
        ariaLabel: 'dev',
        icon: 'fa-brands fa-dev',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/rohan.mirjankar/',
        ariaLabel: 'instagram',
        icon: 'fa-brands fa-instagram',
    },
    {
        label: 'X / Twitter',
        href: 'https://x.com/Rohan_shridhar',
        ariaLabel: 'twitter',
        icon: 'fa-brands fa-x-twitter',
    },
];

export default function Contact() {
    const { ref: contactRef } = useViewportReveal({
        targetSelector: '.contact-reveal-item',
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
    });

    return (
        <section
            ref={contactRef}
            className="contact"
            id="contact"
            aria-labelledby="contact-title"
        >
            <header className="contact-heading contact-reveal-item contact-reveal-heading block-enter">
                <Badge className="contact-kicker" variant="stone">CONTACT ME</Badge>
                <h2 className="contact-title" id="contact-title">Connect with me</h2>
                <span className="contact-divider" aria-hidden="true" />
            </header>

            <div className="contact-grid">
                <BlockCard
                    as="section"
                    className="contact-social-panel contact-reveal-item block-enter"
                    variant="stone"
                    inset
                    aria-labelledby="contact-social-title"
                >
                    <div className="contact-panel-heading">
                        <Badge className="contact-panel-label" variant="wood" as="h3" id="contact-social-title">
                            SOCIAL LINKS
                        </Badge>
                        <span className="contact-panel-rule" aria-hidden="true" />
                    </div>
                    <ul className="contact-icons" aria-label="Social links">
                        {socialLinks.map((link, index) => (
                            <li
                                className="contact-slot contact-reveal-item block-enter"
                                style={{
                                    '--contact-delay': `${140 + index * 45}ms`,
                                    '--reveal-delay': `${140 + index * 45}ms`,
                                }}
                                key={link.href}
                            >
                                <BlockButton
                                    as="a"
                                    className="contact-link"
                                    variant="stone"
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.ariaLabel}
                                    icon={<i className={link.icon} aria-hidden="true" />}
                                >
                                    <span className="contact-link-label">{link.label}</span>
                                </BlockButton>
                            </li>
                        ))}
                    </ul>
                </BlockCard>

                <BlockCard
                    as="section"
                    className="contact-email-panel contact-reveal-item block-enter"
                    variant="stone"
                    inset
                    aria-labelledby="contact-email-title"
                >
                    <div className="contact-panel-heading">
                        <Badge className="contact-panel-label" variant="stone" as="h3" id="contact-email-title">
                            DIRECT CONTACT
                        </Badge>
                        <span className="contact-panel-rule" aria-hidden="true" />
                    </div>
                    <PixelBorder as="address" className="contact-email-slot" variant="stone" inset>
                        <span className="mail-txt">Or you can reach me at </span>
                        <span className="contact-line" aria-hidden="true">
                            <span className="line" />
                        </span>
                        <span className="mail">rohansm668@gmail.com</span>
                    </PixelBorder>
                </BlockCard>
            </div>
        </section>
    );
}

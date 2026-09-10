import { useState } from 'react';
import internshipCertificate from './assets/images/certfications/Internship.jpg';
import competitionCertificate from './assets/images/certfications/Competition.jpg';
import courseCertificate from './assets/images/certfications/Course.jpg';
import useViewportReveal from './hooks/useViewportReveal.js';
import { Badge, BlockCard, PixelBorder } from './components/ui/index.js';

const certificates = [
    {
        image: internshipCertificate,
        alt: 'Web Dev certificate',
        description: '',
        tag: 'Web Dev Internship',
        badgeVariant: 'diamond',
    },
    {
        image: competitionCertificate,
        alt: "ELUSoC'26 certificate",
        description: '',
        tag: "ELUSoC'26 Competition",
        badgeVariant: 'stone',
    },
    {
        image: courseCertificate,
        alt: 'Simplilearn certificate',
        description: '',
        tag: 'Simplilearn Course',
        badgeVariant: 'wood',
    },
];

function CertificateMedia({ certificate }) {
    const [hasError, setHasError] = useState(false);

    return (
        <PixelBorder className="certificate-media" variant="stone" inset>
            {hasError ? (
                <span className="certificate-media-fallback" role="status">
                    Certificate preview unavailable
                </span>
            ) : (
                <img
                    src={certificate.image}
                    alt={certificate.alt}
                    loading="lazy"
                    decoding="async"
                    onError={() => setHasError(true)}
                />
            )}
        </PixelBorder>
    );
}

function CertificateCard({ certificate, index }) {
    return (
        <li
            className="certificate-item"
            style={{ '--reveal-delay': `${index * 70}ms` }}
        >
            <BlockCard
                as="figure"
                className="certificate-card block-enter"
                variant="stone"
                inset
            >
                <CertificateMedia certificate={certificate} />
                <figcaption className="certificate-caption">
                    <Badge variant={certificate.badgeVariant}>{certificate.tag}</Badge>
                    <span className="certificate-inlay" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                    </span>
                </figcaption>
            </BlockCard>
        </li>
    );
}

export default function Certificates() {
    const { ref: certificatesRef } = useViewportReveal({
        targetSelector: '.certificate-card',
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
    });

    return (
        <section
            ref={certificatesRef}
            className="certificates-cont"
            id="certificates"
            aria-labelledby="certificates-title"
        >
            <header className="certificates-heading">
                <h2 className="certificates-title" id="certificates-title">Certificates</h2>
                <span className="certificates-divider" aria-hidden="true" />
            </header>

            <ul className="certificates-gallery" aria-label="Certificates">
                {certificates.map((certificate, index) => (
                    <CertificateCard
                        certificate={certificate}
                        index={index}
                        key={certificate.tag}
                    />
                ))}
            </ul>
        </section>
    );
}

const { useState, useEffect } = React;
const project1 = "images/grid.png";
const project2 = "images/ciphex.jpg";
const project3 = "images/envguard.png";
const Projects = () => {
    useEffect(() => {
        const cards = document.querySelectorAll('.project-card');
        
        const handleMouseEnter = (e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(-10px)';
            e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1.05)';
        };

        const handleMouseLeave = (e) => {
            e.currentTarget.style.backgroundColor = 'var(--btn-bg)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
            const img = e.currentTarget.querySelector('img');
            if (img) img.style.transform = 'scale(1)';
        };

        cards.forEach(card => {
            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        // Cleanup function to remove event listeners
        return () => {
            cards.forEach(card => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div className="projects-cont" id="projects">
            <div className="project-title">What have i built?</div>
            <div className="project-cont">
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project1} alt="Gridcraft" />
                    </div>
                    <div className="project-card-title">GridCraft</div>
                    <div className="project-card-desc">Front end application using react.js that runs directly in your browser used to create pixel arts in a 16 X 16 grid and download as an image</div>
                    <div className="project-card-btn">
                        <div />
                        <a href="https://github.com/Rohan-Shridhar/gridcraft"><i className="fab fa-github"></i></a>
                        <a href="https://rohan-shridhar.github.io/gridcraft/"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project2} alt="NotJS" />
                    </div>
                    <div className="project-card-title">Ciphex</div>
                    <div className="project-card-desc">ciphex is a lightweight Node.js package that combines Vigenère and Affine ciphers to encrypt and decrypt text across all 96 printable ASCII characters using a key.env file and a generated [b, a] key pair.</div>
                    <div className="project-card-btn">
                        <div />
                        <a href="https://github.com/Rohan-Shridhar/ciphex"><i className="fab fa-github"></i></a>
                        <a href="https://www.npmjs.com/package/ciphex"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-card-img">
                        <img src={project3} alt="To Do List" />
                    </div>
                    <div className="project-card-title">Envguard</div>
                    <div className="project-card-desc">envguard is a zero-boilerplate environment variable validator for Node.js that checks all your env vars at startup, coerces types like numbers and booleans, and throws a clear combined error if anything is missing or invalid. </div>
                    <div className="project-card-btn">
                        <div />
                        <a href="https://github.com/Rohan-Shridhar/envguard"><i className="fab fa-github"></i></a>
                        <a href="https://www.npmjs.com/package/@rohansm14/envguard"><i className="fas fa-globe"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

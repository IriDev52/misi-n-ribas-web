:root {
    --primary-blue: #002266;
    --accent-yellow: #ffc72c;
    --accent-red: #d12229;
    --background-dark: #0f172a;
    --card-background: #1a202c;
    --text-primary: #e2e8f0;
    --text-secondary: #94a3b8;
    --border-color: #2d3748;
    --shadow-color: rgba(0, 0, 0, 0.4);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--background-dark);
    color: var(--text-primary);
    line-height: 1.7;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3 {
    color: var(--text-primary);
    font-weight: 700;
    line-height: 1.2;
}

h1 { font-size: 3.5rem; }
h2 { font-size: 2.8rem; margin-bottom: 25px; }
h3 { font-size: 1.8rem; margin-bottom: 15px; }
p { font-size: 1.1rem; color: var(--text-secondary); }
a { color: var(--accent-yellow); text-decoration: none; transition: color 0.3s ease; }
a:hover { color: #ffd760; }

.preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--background-dark);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.preloader.hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.spinner {
    width: 60px;
    height: 60px;
    border: 6px solid rgba(255, 255, 255, 0.2);
    border-top-color: var(--accent-yellow);
    border-radius: 50%;
    animation: spin 1.2s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

.cookie-banner {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--primary-blue);
    color: var(--text-primary);
    padding: 20px 35px;
    border-radius: 15px;
    box-shadow: 0 10px 30px var(--shadow-color);
    display: flex;
    align-items: center;
    gap: 25px;
    z-index: 1000;
    transition: all 0.5s ease-in-out;
    opacity: 1;
}

.cookie-banner.hidden {
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) translateY(100px);
    pointer-events: none;
}

.cookie-banner p {
    margin: 0;
    font-size: 1rem;
    max-width: 800px;
    color: var(--text-primary);
}

.cookie-banner .policy-link {
    color: var(--accent-yellow);
    text-decoration: underline;
    font-weight: 600;
}

.cookie-banner .accept-btn {
    background-color: var(--accent-yellow);
    color: var(--primary-blue);
    border: none;
    padding: 12px 28px;
    border-radius: 10px;
    font-size: 1.05rem;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.cookie-banner .accept-btn:hover {
    background-color: #ffd760;
    transform: scale(1.05);
}

.background-blobs {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
}

.blob {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
    filter: blur(80px);
    animation: float 25s infinite ease-in-out;
}

.blob-1 {
    width: 450px;
    height: 450px;
    background-color: var(--primary-blue);
    top: -80px;
    left: -120px;
    animation-duration: 28s;
}

.blob-2 {
    width: 700px;
    height: 700px;
    background-color: var(--accent-red);
    bottom: -250px;
    right: -300px;
    animation-duration: 35s;
    animation-delay: 5s;
}

.blob-3 {
    width: 350px;
    height: 350px;
    background-color: var(--accent-yellow);
    top: 25%;
    right: 10%;
    animation-duration: 22s;
    animation-delay: 10s;
}

@keyframes float {
    0% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(60px, -40px) scale(1.08); }
    50% { transform: translate(0, 0) scale(0.98); }
    75% { transform: translate(-50px, 30px) scale(1.12); }
    100% { transform: translate(0, 0) scale(1); }
}

.main-header {
    width: 100%;
    background: linear-gradient(to right, var(--primary-blue), #003399);
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    box-shadow: 0 4px 20px var(--shadow-color);
}

.logo img {
    height: 65px;
    border-radius: 10px;
}

.main-nav a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 600;
    margin-left: 35px;
    padding: 8px 15px;
    border-radius: 8px;
    transition: background-color 0.3s, color 0.3s, transform 0.2s;
    position: relative;
    overflow: hidden;
}

.main-nav a::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--accent-yellow);
    transform: translateX(-100%);
    transition: transform 0.3s ease-out;
}

.main-nav a:hover::before {
    transform: translateX(0);
}

.main-nav a:hover {
    color: var(--accent-yellow);
    transform: translateY(-2px);
}

.hero-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 120px 30px 60px;
    position: relative;
    overflow: hidden;
}

.hero-content {
    max-width: 950px;
    padding: 30px;
    position: relative;
    z-index: 10;
}

.hero-title {
    font-size: 4.5rem;
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.1;
    color: var(--text-primary);
    letter-spacing: -1px;
    overflow: hidden;
}

.hero-title .line {
    display: block;
}

.hero-subtitle {
    font-size: 1.6rem;
    font-weight: 400;
    margin-top: 25px;
    color: var(--text-secondary);
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.cta-button {
    display: inline-block;
    background-color: var(--accent-yellow);
    color: var(--primary-blue);
    text-decoration: none;
    font-weight: 800;
    font-size: 1.35rem;
    padding: 18px 45px;
    border-radius: 50px;
    margin-top: 50px;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
    box-shadow: 0 8px 20px var(--shadow-color);
    border: none;
    cursor: pointer;
}

.cta-button:hover {
    transform: translateY(-7px) scale(1.03);
    background-color: #ffd760;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.5);
}

.content-section {
    padding: 100px 50px;
    position: relative;
    z-index: 1;
    background-color: var(--background-dark);
}

.content-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
}

.content-section h2 {
    position: relative;
    padding-bottom: 15px;
    margin-bottom: 40px;
}

.content-section h2::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: var(--accent-red);
    border-radius: 2px;
}

.content-container p {
    max-width: 850px;
    margin: 0 auto 50px;
    font-size: 1.1rem;
    color: var(--text-secondary);
}

.soft-card {
    background-color: var(--card-background);
    padding: 40px;
    border-radius: 18px;
    box-shadow: 0 12px 25px var(--shadow-color);
    border: 1px solid var(--border-color);
    transition: transform 0.3s, box-shadow 0.3s;
}

.soft-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.stats-section {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    background-color: var(--primary-blue);
    color: var(--text-primary);
    padding: 80px 20px;
    gap: 40px;
    position: relative;
    z-index: 10;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.3);
}

.stat-item {
    text-align: center;
    flex: 1;
    min-width: 250px;
}

.stat-item .icon {
    font-size: 3.5rem;
    color: var(--accent-yellow);
    margin-bottom: 15px;
}

.stat-number {
    font-size: 4.5rem;
    font-weight: 900;
    color: var(--accent-yellow);
    margin-bottom: 8px;
    line-height: 1;
}

.stat-label {
    font-size: 1.25rem;
    font-weight: 600;
    text-transform: uppercase;
    color: var(--text-primary);
    letter-spacing: 0.5px;
}

.mentions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.mention-item {
    padding: 35px;
    text-align: left;
}

.mention-item .icon {
    font-size: 3rem;
    color: var(--accent-red);
    margin-bottom: 20px;
    background-color: rgba(209, 34, 41, 0.1);
    padding: 15px;
    border-radius: 12px;
    display: inline-block;
}

.mention-item h3 {
    font-size: 1.7rem;
    margin-bottom: 12px;
    color: var(--text-primary);
}

.mention-item p {
    font-size: 1rem;
    color: var(--text-secondary);
    margin-bottom: 0;
}

.history-block {
    text-align: left;
    margin-bottom: 35px;
}

.history-block h3 {
    color: var(--accent-yellow);
    font-size: 1.8rem;
    border-left: 5px solid var(--accent-red);
    padding-left: 15px;
    margin-bottom: 18px;
    display: block;
}

.history-block p {
    max-width: none;
    color: var(--text-secondary);
    margin-bottom: 0;
}

.map-embed {
    overflow: hidden;
    margin-top: 40px;
}
.map-embed iframe {
    box-shadow: 0 15px 30px var(--shadow-color);
}

.accordion-container {
    max-width: 950px;
    margin: 50px auto;
}

.accordion-item {
    text-align: left;
    margin-bottom: 18px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.accordion-item:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

.accordion-header {
    background-color: var(--card-background);
    color: var(--text-primary);
    padding: 25px;
    font-size: 1.25rem;
    font-weight: 700;
    width: 100%;
    text-align: left;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 12px;
}

.accordion-header:hover, .accordion-header.active {
    background-color: var(--primary-blue);
    color: var(--text-primary);
}

.accordion-header.active .icon-toggle {
    transform: rotate(45deg);
}

.icon-toggle {
    transition: transform 0.3s ease;
    font-size: 1.5rem;
    color: var(--accent-yellow);
}

.accordion-content {
    background-color: var(--background-dark);
    color: var(--text-secondary);
    padding: 0 25px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
}

.accordion-content p {
    padding: 25px 0;
    margin: 0;
    max-width: none;
    color: var(--text-secondary);
}

.contact-form {
    max-width: 750px;
    margin: 50px auto;
    text-align: left;
    padding: 50px;
}

.form-group {
    margin-bottom: 25px;
}

.contact-form label {
    display: block;
    font-weight: 600;
    margin-bottom: 12px;
    color: var(--text-primary);
    font-size: 1.1rem;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 18px;
    border-radius: 10px;
    border: 1px solid var(--border-color);
    background-color: var(--background-dark);
    color: var(--text-primary);
    font-size: 1.05rem;
    transition: border-color 0.3s, background-color 0.3s, box-shadow 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--accent-yellow);
    background-color: #151d30;
    box-shadow: 0 0 0 3px rgba(255, 199, 44, 0.2);
}

.main-footer {
    background: linear-gradient(to right, var(--primary-blue), #003399);
    color: var(--text-primary);
    padding: 70px 60px 25px;
    text-align: left;
    box-shadow: 0 -4px 20px var(--shadow-color);
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 40px;
}

.footer-column {
    flex: 1;
    min-width: 220px;
}

.footer-column.logo-column {
    flex-basis: 320px;
}

.footer-column h3 {
    font-size: 1.6rem;
    margin-bottom: 25px;
    color: var(--accent-yellow);
}

.footer-column ul {
    list-style: none;
}

.footer-column ul li {
    margin-bottom: 12px;
}

.footer-column ul li a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s;
    font-size: 1rem;
}

.footer-column ul li a:hover {
    color: var(--accent-yellow);
}

.footer-column p {
    margin: 0;
    color: var(--text-secondary);
    font-size: 1rem;
}

.footer-column p i {
    margin-right: 10px;
    color: var(--accent-yellow);
}

.social-icons a {
    color: var(--text-primary);
    font-size: 1.6rem;
    margin-right: 20px;
    transition: color 0.3s, transform 0.2s;
}

.social-icons a:hover {
    color: var(--accent-yellow);
    transform: translateY(-3px);
}

.footer-bottom {
    text-align: center;
    margin-top: 60px;
    padding-top: 25px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
    margin: 0;
    font-size: 0.95rem;
    color: var(--text-secondary);
}

@media (max-width: 1200px) {
    .content-container {
        padding: 0 25px;
    }
}

@media (max-width: 992px) {
    .main-header {
        flex-direction: column;
        padding: 20px;
    }

    .main-nav {
        margin-top: 25px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .main-nav a {
        margin: 0;
        padding: 8px 12px;
    }

    .hero-title {
        font-size: 3.5rem;
    }

    .hero-subtitle {
        font-size: 1.4rem;
    }

    h2 {
        font-size: 2.2rem;
    }

    .mentions-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
    
    .stats-section {
        flex-direction: column;
        gap: 30px;
    }

    .testimonial-card {
        min-width: 380px;
    }
}

@media (max-width: 768px) {
    .cookie-banner {
        flex-direction: column;
        text-align: center;
        gap: 15px;
        padding: 15px;
        bottom: 10px;
    }

    .hero-title {
        font-size: 2.8rem;
    }

    .hero-subtitle {
        font-size: 1.2rem;
    }

    .cta-button {
        font-size: 1.2rem;
        padding: 15px 35px;
    }

    h2 {
        font-size: 2rem;
    }

    .content-section {
        padding: 80px 20px;
    }

    .testimonial-card {
        min-width: 300px;
        padding: 40px 20px;
    }

    .vencedor-img {
        width: 100px;
        height: 100px;
    }

    .footer-container {
        flex-direction: column;
        text-align: center;
    }

    .footer-column {
        min-width: 100%;
        margin-bottom: 20px;
    }

    .footer-column ul {
        padding: 0;
    }
    
    .logo-column {
        margin-bottom: 30px;
    }
    .footer-column h3 {
        text-align: center;
    }
    .footer-column ul, .footer-column p {
        text-align: center;
    }
    .social-icons {
        justify-content: center;
        display: flex;
    }
}

@media (max-width: 480px) {
    .main-header {
        padding: 15px;
    }
    
    .hero-title {
        font-size: 2.2rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }
    
    .soft-card {
        padding: 30px;
    }
    
    .cta-button {
        padding: 12px 28px;
        font-size: 1.05rem;
    }
    
    .accordion-header {
        font-size: 1.05rem;
        padding: 20px;
    }
    
    .spinner {
        width: 40px;
        height: 40px;
        border-width: 4px;
    }

    .cookie-banner {
        padding: 15px;
        gap: 10px;
    }
    .cookie-banner .accept-btn {
        padding: 10px 20px;
        font-size: 0.9rem;
    }
}
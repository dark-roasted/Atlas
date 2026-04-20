document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Intro ---
    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 }});
    tl.to(".hero-title", { opacity: 1, y: 0, delay: 0.3 })
      .to(".hero-desc", { opacity: 1, y: 0 }, "-=1.2")
      .to(".hero-btns", { opacity: 1, y: 0 }, "-=1.1");

    // --- Navbar Logic ---
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('backdrop-blur-xl', 'bg-atlas-dark/80', 'py-4', 'border-b', 'border-glass-border');
            nav.classList.remove('py-6');
        } else {
            nav.classList.remove('backdrop-blur-xl', 'bg-atlas-dark/80', 'py-4', 'border-b', 'border-glass-border');
            nav.classList.add('py-6');
        }
    });

    // --- Mobile Sidebar Logic ---
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('navOpen');
    const closeBtn = document.getElementById('navClose');
    const overlay = document.getElementById('sidebarOverlay');
    const links = document.querySelectorAll('.sidebar-link');

    const toggle = (state) => {
        sidebar.classList.toggle('active', state);
        document.body.style.overflow = state ? 'hidden' : '';
    };

    openBtn.onclick = () => toggle(true);
    closeBtn.onclick = () => toggle(false);
    overlay.onclick = () => toggle(false);
    links.forEach(l => l.onclick = () => toggle(false));

    // --- Features Reveal ---
    gsap.to(".feat-head", {
        scrollTrigger: { trigger: "#features", start: "top 80%" },
        opacity: 1, y: 0, duration: 1
    });

    gsap.to(".f-card", {
        scrollTrigger: { trigger: "#features", start: "top 60%" },
        opacity: 1, y: 0, duration: 1.2, stagger: 0.1, ease: "power4.out"
    });

    // --- Community Reveal (Lounge) ---
    gsap.to(".comm-content", {
        scrollTrigger: { trigger: "#community", start: "top 70%" },
        opacity: 1, x: 0, duration: 1.5, ease: "power4.out"
    });

    gsap.to(".comm-card", {
        scrollTrigger: { trigger: "#community", start: "top 70%" },
        opacity: 1, x: 0, duration: 1.5, delay: 0.2, ease: "power4.out"
    });

    // --- Atlas Server Reveal ---
    gsap.to(".atlas-content", {
        scrollTrigger: { trigger: "#atlas", start: "top 70%" },
        opacity: 1, x: 0, duration: 1.5, ease: "power4.out"
    });

    gsap.to(".atlas-card", {
        scrollTrigger: { trigger: "#atlas", start: "top 70%" },
        opacity: 1, x: 0, duration: 1.5, delay: 0.2, ease: "power4.out"
    });
});
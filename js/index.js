// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
});

function animRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(animRing);
}

animRing();

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(2)';
        ring.style.width = '60px';
        ring.style.height = '60px';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.width = '36px';
        ring.style.height = '36px';
    });
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
entries.forEach((e, i) => {
    if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
    }
    });
}, { threshold: 0.12 });

reveals.forEach(el => obs.observe(el));

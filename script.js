window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1500);
});
const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links');
const navLinkItems = document.querySelectorAll('.nav-link');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

navLinkItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        // hamburger.classList.remove('active');
        // navLinks.classList.remove('active');
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content h1", { 
    opacity: 0, 
    y: -50, 
    // y:40,
    duration: 1, 
    ease: "power3.out" 
    // ease: "power6.out" 

});

gsap.from(".hero-content .tagline", { 
    opacity: 0, 
    y: 50, 
    duration: 1, 
    delay: 0.5, 
    // delay: 0.6, 
    ease: "power3.out" 
});

gsap.from(".hero-content .subtext", { 
    opacity: 0, 
    y: 50, 
    duration: 1, 
    delay: 0.8, 
    ease: "power3.out" 
});

gsap.from(".hero-buttons", { 
    opacity: 0, 
    y: 50, 
    duration: 1, 
    // duration: 5, 

    delay: 1.1,
    // duration: 1, 

    ease: "power3.out" 
});

gsap.from(".social-links a", { 
    opacity: 0, 
    y: 50, 
    duration: 0.5, 
    stagger: 0.1, 
    delay: 1.4, 
    ease: "power3.out" 
});

gsap.from(".hero-image", { 
    opacity: 0, 
    x: 100, 
    duration: 1.5, 
    delay: 0.5, 
    ease: "power3.out" 
});

gsap.utils.toArray("section").forEach(section => {
    const heading = section.querySelector("h2");
    const underline = section.querySelector(".underline");
    
    if (heading) {
        gsap.from(heading, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            //     opacity: 0,
            // y: 50,
            // duration: 1,
            }
        });
    }
    
    if (underline) {
        gsap.from(underline, {
            scaleX: 0,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        });
    }
});

gsap.from(".model-card", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".models",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".feature-card", {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".about-content p", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".about-image", {
    opacity: 0,
    x: 100,
    duration: 1.5,
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

const statNumbers = document.querySelectorAll('.stat-number');
if (statNumbers.length > 0) {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const counter = setInterval(() => {
            current += step;
            if (current >= target) {
                clearInterval(counter);
                current = target;
            }
            stat.textContent = Math.floor(current);
        }, 16);
        
        ScrollTrigger.create({
            trigger: stat,
            start: "top 80%",
            onEnter: () => {
                clearInterval(counter);
                stat.textContent = target;
            }
        });
    });
}

const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonialCards[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function nextTestimonial() {
    let nextIndex = (currentIndex + 1) % testimonialCards.length;
    showTestimonial(nextIndex);
}

function prevTestimonial() {
    let prevIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
    showTestimonial(prevIndex);
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

setInterval(nextTestimonial, 5000);

const backToTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    
    const submitBtn = this.querySelector('button[type="submit"]');
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
    submitBtn.style.backgroundColor = '#4BB543';
    
    setTimeout(() => {
        this.reset();
        submitBtn.innerHTML = '<span>Send Message</span> <i class="fas fa-paper-plane"></i>';
        submitBtn.style.backgroundColor = '';
    }, 2000);
});

const floatingCircles = document.querySelectorAll('.floating-circle');

floatingCircles.forEach((circle, index) => {
    gsap.to(circle, {
        y: 20,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });
});
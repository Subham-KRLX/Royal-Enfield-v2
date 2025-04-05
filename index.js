gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-content", { opacity: 0, x: -50, duration: 1.5, ease: "power3.out" });
gsap.from(".hero-image", { opacity: 0, x: 50, duration: 1.5, ease: "power3.out" });

gsap.from(".model-card", {
    opacity: 0, y: 50, duration: 1, stagger: 0.3,
    scrollTrigger: { trigger: ".models", start: "top 80%" }
});

gsap.from(".about h2, .about p", {
    opacity: 0, y: 50, duration: 1, stagger: 0.3,
    scrollTrigger: { trigger: ".about", start: "top 80%" }
});

gsap.from(".contact form", {
    opacity: 0, y: 50, duration: 1,
    scrollTrigger: { trigger: ".contact", start: "top 80%" }
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank you for contacting us, Subham! We will get back to you soon.");
});
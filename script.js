const revealTargets = document.querySelectorAll(".section, .hero-metrics article, .floating-card, .week-card, .outcome-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  {
    threshold: 0.18,
  },
);

revealTargets.forEach((target) => {
  target.classList.add("reveal");
  observer.observe(target);
});

const tiltTargets = document.querySelectorAll("[data-tilt]");

tiltTargets.forEach((target) => {
  target.addEventListener("pointermove", (event) => {
    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    target.style.transform = `perspective(1400px) rotateX(${y * -10}deg) rotateY(${x * 12}deg)`;
  });

  target.addEventListener("pointerleave", () => {
    target.style.transform = "perspective(1400px) rotateX(0deg) rotateY(0deg)";
  });
});

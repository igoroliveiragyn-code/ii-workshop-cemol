document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const nav = document.querySelector(".site-nav");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const sections = [...document.querySelectorAll("main section[id]")];
const registrationUrl = document.body.dataset.registrationUrl.trim();

const alignInitialSection = () => {
  if (!window.location.hash) return;
  const target = document.querySelector(window.location.hash);
  if (!target) return;
  document.documentElement.style.scrollBehavior = "auto";
  target.scrollIntoView({ block: "start" });
  window.setTimeout(() => document.documentElement.style.removeProperty("scroll-behavior"), 50);
};

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const closeNavigation = () => {
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

navToggle.addEventListener("click", () => {
  const willOpen = !nav.classList.contains("is-open");
  nav.classList.toggle("is-open", willOpen);
  navToggle.setAttribute("aria-expanded", String(willOpen));
});

navLinks.forEach((link) => link.addEventListener("click", closeNavigation));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

if (registrationUrl) {
  document.querySelectorAll("[data-registration-cta]").forEach((link) => {
    link.href = registrationUrl;
    link.classList.remove("button--disabled");
    link.removeAttribute("aria-disabled");
    link.textContent = "Inscreva-se gratuitamente";
  });
}

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

window.setTimeout(() => {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
}, 1200);

const sectionObserver = new IntersectionObserver(
  (entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visibleSection) return;

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.hash === `#${visibleSection.target.id}`);
    });
  },
  { rootMargin: "-25% 0px -60% 0px", threshold: [0.05, 0.2, 0.5] }
);

sections.forEach((section) => sectionObserver.observe(section));
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("load", alignInitialSection);
updateHeader();

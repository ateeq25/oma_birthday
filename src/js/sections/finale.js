
import finaleImage from "../../assets/umaamah-portrait.jpg";

export default function createFinale() {
    const section = document.createElement("section");

    section.classList.add("finale", "section");
    section.id = "finale";

    section.innerHTML = `
        <div class="container finale__container">
            <div class="finale__main">
                <div class="finale__content">
                    <h2 class="finale__title">
                        Happy Birthday,
                        <span>Umaamah.</span>
                    </h2>

                    <p class="finale__message">
                        Here's to another year of becoming, creating,
                        discovering and being.
                    </p>

                    <p class="finale__signature">
                        With love, from someone who's glad to know you.
                    </p>

                    <a href="#letter" class="finale__cta">
                        READ YOUR BIRTHDAY LETTER AGAIN
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>

                <div class="finale__image">
                    <img
                        src="${finaleImage}"
                        alt="Umaamah"
                        loading="lazy"
                    >
                </div>
            </div>

            <footer class="finale__footer">

                <a href="#home" class="finale__back-to-top">
                    BACK TO THE BEGINNING
                    <span aria-hidden="true">↑</span>
                </a>
            </footer>
        </div>
    `;

    const content = section.querySelector(".finale__content");
const image = section.querySelector(".finale__image");
const footer = section.querySelector(".finale__footer");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
    content.classList.add("is-visible");
    image.classList.add("is-visible");
    footer.classList.add("is-visible");
} else {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    observer.observe(content);
    observer.observe(image);
    observer.observe(footer);
}
    return section;
}

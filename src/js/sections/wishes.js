
export default function createWishes() {
    const section = document.createElement("section");

    section.classList.add("wishes", "section");
    section.id = "wishes";

    const wishes = [
        "May life be as generous to you as you are to others.",
        "May you never run out of reasons to create.",
        "May the things you quietly wish for find their way to you.",
        "May you always find as much joy in living as you give to the people around you."
    ];

    section.innerHTML = `
        <div class="container wishes__container">
            <h2 class="wishes__title">
                For all the years yet to come<span>.</span>
            </h2>

            <div class="wishes__list">
                ${wishes.map((wish, index) => `
                    <article class="wishes__item">
                        <span class="wishes__number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>

                        <p class="wishes__text">${wish}</p>
                    </article>
                `).join("")}
            </div>
        </div>
    `;
    const title = section.querySelector(".wishes__title");
const wishItems = section.querySelectorAll(".wishes__item");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
    title.classList.add("is-visible");

    wishItems.forEach((item) => {
        item.classList.add("is-visible");
    });
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

    observer.observe(title);

    wishItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 180}ms`;
        observer.observe(item);
    });
}

    return section;
}

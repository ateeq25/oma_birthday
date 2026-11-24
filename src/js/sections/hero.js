
import umaamahPortrait from "../../assets/umaamah-portrait.jpg";

export default function createHero() {
    const hero = document.createElement("section");

    hero.classList.add("hero", "section");
    hero.id = "home";

    hero.style.setProperty(
        "--hero-background-image",
        `url("${umaamahPortrait}")`
    );

    hero.innerHTML = `
        <div class="container hero__container">

            <nav class="hero__nav" aria-label="Main navigation">
                <a href="#home" class="hero__date">24.11.2026</a>

                <div class="hero__nav-links">
                    <a href="#letter">The Letter</a>
                    <a href="#many-colours">Her Many Colors</a>
                    <a href="#wishes">Wishes</a>
                </div>
            </nav>

            <div class="hero__content">
                <div class="hero__text">
                    <h1 class="hero__title">
                        <span class="hero__title-intro">
                            To a beautiful soul named
                        </span>
                        <span class="hero__title-name">Umaamah.</span>
                    </h1>

                    <p class="hero__description">
                        A little reminder of how special you are, all the things that make you who you are, and why you're worth celebrating.
                    </p>

                    <a href="#letter" class="hero__turn-page">
                        TURN THE PAGE
                        <span aria-hidden="true">↓</span>
                    </a>
                </div>
            </div>

        </div>
    `;

    return hero;
}

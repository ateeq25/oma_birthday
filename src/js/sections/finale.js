
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
                        Read your birthday letter again
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

    return section;
}

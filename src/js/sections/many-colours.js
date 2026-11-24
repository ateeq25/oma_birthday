import artistImage from "../../assets/the-artist.jpg";
import theGemKeeper from "../../assets/the-gem-keeper.jpg";
import theHealer from "../../assets/the-healer.jpg";

export default function createManyColours() {
  const section = document.createElement("section");

  section.classList.add("many-colours", "section");
  section.id = "many-colours";

  section.innerHTML = `
        <div class="container many-colours__container">

            <div class="many-colours__heading">
                <span class="many-colours__number"></span>

                <h2 class="many-colours__title">
                    A woman of
                    <span>many beautiful things.</span>
                </h2>

                <p class="many-colours__intro">
                    There is never just one way to describe a person.
                    Sometimes, the most beautiful things about someone
                    are found in all the different sides they carry.
                </p>
            </div>

            <div class="many-colours__features">

                <!-- The Artist -->
                <article class="feature feature--artist">
                    <div class="feature__image feature__image--artist">
                        <!-- Add artist image here -->
                        <img
                            src="${artistImage}"
                            alt="Umaamah's artwork"
                            class="feature__photo"
                        >
                    </div>

                    <div class="feature__content">
                        <span class="feature__number">01</span>
                        <h3 class="feature__title">The Artist</h3>
                        <p class="feature__description">
                            A creative soul who finds ways to turn thoughts,
                            feelings, and little observations into something
                            beautiful. There's something special about the
                            way she brings ideas to life through her art.
                        </p>
                    </div>
                </article>


                <!-- The Gem Keeper -->
                <article class="feature feature--gem-keeper">
                    <div class="feature__image feature__image--gem-keeper">
                        <!-- Add Gem Shop image here -->
                        <img
                            src="${theGemKeeper}"
                            alt="The Gem Shop"
                            class="feature__photo"
                        >
                    </div>

                    <div class="feature__content">
                        <span class="feature__number">02</span>
                        <h3 class="feature__title">The Gem Keeper</h3>
                        <p class="feature__description">
                            The mind and passion behind The Gem Shop.
                            A reminder that her creativity doesn't end
                            with a paintbrush; it also shows in the
                            things she builds and shares with the world.
                        </p>
                    </div>
                </article>

                <!-- The Healer -->
                <article class="feature feature--healer">
                    <div class="feature__image feature__image--healer">
                        <!-- Add portrait image here -->
                        <img
                            src="${theHealer}"
                            alt="Umaamah"
                            class="feature__photo"
                        >
                    </div>

                    <div class="feature__content">
                        <span class="feature__number">03</span>
                        <h3 class="feature__title">The Healer</h3>
                        <p class="feature__description">
                            The patience to listen, the willingness to
                            understand, and the ability to make someone
                            feel heard. A beautiful reminder that kindness
                            is its own kind of gift.
                        </p>
                    </div>
                </article>

            </div>
        </div>
    `;

    const heading = section.querySelector(".many-colours__heading");
const features = section.querySelectorAll(".feature");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
    heading.classList.add("is-visible");

    features.forEach((feature) => {
        feature.classList.add("is-visible");
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

    observer.observe(heading);

    features.forEach((feature) => {
        observer.observe(feature);
    });
}

  return section;
}

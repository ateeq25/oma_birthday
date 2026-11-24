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
                    Is there really anything
                    <span>you can't do?</span>
                </h2>

                <p class="many-colours__intro">
                    A freaking talented artist!, a businesswoman, and so much more. 
                    I'm genuinely impressed by how many different sides you 
                    have and how much of yourself you bring to each one. 
                    You're almost like a superhero with an unusually interesting 
                    set of superpowers.
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
                            If I could paint like you, I genuinely would stop speaking
                            and just paint everything I wanted to say. Your talent is a gift, 
                            and the world is lucky to have it. 
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
                            I never really thought about it until now but one of the reasons
                            I'm a fan of The Gem Shop is because it's how I got to meet you.
                            I still remember the day you ranted about how your customers were stressing you
                            so much😂. I'm proud of how much your brand has growwn and I'll be supporting
                            you every step ofthe way.
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

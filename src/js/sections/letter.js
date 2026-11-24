import paperTexture from "../../assets/paper-texture.jpg";

export default function createLetter() {
  const letter = document.createElement("section");

  letter.classList.add("letter", "section");
  letter.id = "letter";

  letter.style.setProperty("--letter-paper-image", `url("${paperTexture}")`);

  letter.innerHTML = `
        <div class="container letter__container">

            <div class="letter__heading">
                <span class="letter__number"></span>

                <h2 class="letter__title">
                    I hope you see yourself
                    <span>as beautifully as I do.</span>
                </h2>
            </div>

            <div class="letter__body">
                <span class="letter__quote-mark" aria-hidden="true">“</span>

                <div class="letter__content">
                    <p class="letter__greeting">
                        Hi Miss Umaamah, I hope this letter finds you well.
                    </p>

                    <div class="letter__body-content">
                        <p>
                            There's something quite special about people who
                            make room for so many things in themselves. People
                            who create, listen, nurture, build, and still find
                            ways to make the world around them a little more
                            beautiful.
                        </p>

                        <p>
                            I hope you never lose the curiosity that makes you
                            explore, the creativity that makes you create, or
                            the kindness that makes people feel seen and heard.
                        </p>

                        <p>
                            Today is a reminder to celebrate the person behind
                            all those things. Not just what you do, but who you
                            are. Your many interests, your different sides, and
                            all the little things that make you uniquely you.
                        </p>

                        <p>
                            I hope this new chapter brings you beautiful
                            surprises, meaningful experiences, and countless
                            reasons to smile. May you continue to grow into
                            everything you hope to become.
                        </p>

                        <p>
                            Happy birthday, Umaamah. You deserve to be
                            celebrated, today and always.
                        </p>

                        <div class="letter__signature">
                        <span>With love, Ateeq</span>
                        <span class="letter__signature-heart" aria-hidden="true">♥</span>
                    </div>

                    </div>

                </div>
            </div>

        </div>
    `;

    const title = letter.querySelector(".letter__title");
const greeting = letter.querySelector(".letter__greeting");
const bodyContent = letter.querySelector(".letter__body-content");

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
    title.classList.add("is-visible");
    bodyContent.classList.add("is-visible");
} else {
    // Prepare the greeting for the typing effect
    const greetingText = greeting.textContent.trim().replace(/\s+/g, " ");
    greeting.textContent = "";

    const characters = Array.from(greetingText);

    const spans = characters.map((character) => {
        const span = document.createElement("span");

        span.classList.add("letter__typing-char");
        span.textContent = character === " " ? "\u00A0" : character;

        greeting.appendChild(span);

        return span;
    });

    // Start the typing effect
    function startTyping() {
        let index = 0;

        function typeNextCharacter() {
            if (index >= spans.length) {
                // Reveal the remaining letter after typing finishes
                bodyContent.classList.add("is-visible");
                return;
            }

            spans[index].classList.add("is-visible");
            index++;

            setTimeout(typeNextCharacter, 75);
        }

        typeNextCharacter();
    }

    // Observe the section
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    title.classList.add("is-visible");

                    startTyping();

                    observer.disconnect();
                }
            });
        },
        {
            threshold: 0.2,
        }
    );

    observer.observe(letter);
}

  return letter;
}

import paperTexture from "../../assets/paper-texture.jpg";

export default function createLetter() {
    const letter = document.createElement("section");

    letter.classList.add("letter", "section");
    letter.id = "letter";

    letter.style.setProperty(
        "--letter-paper-image",
        `url("${paperTexture}")`
    );

    letter.innerHTML = `
        <div class="container letter__container">

            <div class="letter__heading">
                <span class="letter__number"></span>

                <h2 class="letter__title">
                    Some people are art
                    <span>in their own right.</span>
                </h2>
            </div>

            <div class="letter__body">
                <span class="letter__quote-mark" aria-hidden="true">“</span>

                <div class="letter__content">
                    <p class="letter__greeting">
                        Dear Umaamah,
                    </p>

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
    `;

    return letter;
}

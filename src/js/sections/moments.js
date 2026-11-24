
import photo1 from "../../assets/moment-1.jpg";
import photo2 from "../../assets/moment-2.jpg";
import photo3 from "../../assets/moment-3.jpg";
import photo4 from "../../assets/moment-4.jpg";
import photo5 from "../../assets/moment-5.jpg";
import photo6 from "../../assets/moment-6.jpg";
import photo7 from "../../assets/moment-7.jpg";
import photo8 from "../../assets/moment-8.jpg";

export default function createMoments() {
    const section = document.createElement("section");

    section.classList.add("moments", "section");
    section.id = "moments";

    const photos = [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
    ];

    section.innerHTML = `
        <div class="container moments__container">
            <h2 class="moments__title">
                Moments worth remembering<span>.</span>
            </h2>

            <div class="moments__gallery">
                ${photos.map((photo, index) => `
                    <figure class="moments__photo moments__photo--${index + 1}">
                        <div class="moments__image">
                            <img
                                src="${photo}"
                                alt="A memorable moment with Umaamah"
                                loading="lazy"
                            >
                        </div>
                    </figure>
                `).join("")}
            </div>
        </div>
    `;

    return section;
}

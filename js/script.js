
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Tutup menu" : "Buka menu"
        );
        menuToggle.classList.toggle("is-open", isOpen);
    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");
            menuToggle.classList.remove("is-open");
        });
    });
}

const clientCarousel = document.querySelector(".client-carousel");
const clientCarouselToggle = document.querySelector(".client-carousel-toggle");

if (clientCarousel && clientCarouselToggle) {
    clientCarouselToggle.addEventListener("click", function () {
        const isPaused = clientCarousel.classList.toggle("is-paused");

        clientCarouselToggle.setAttribute("aria-pressed", String(isPaused));
        clientCarouselToggle.textContent = isPaused
            ? "Lanjutkan carousel"
            : "Jeda carousel";
    });
}

document.querySelectorAll(".currentYear").forEach(function (element) {
    element.textContent = new Date().getFullYear();
});

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(contactForm);
        const name = String(formData.get("name")).trim();
        const contact = String(formData.get("email")).trim();
        const message = String(formData.get("message")).trim();
        const text = [
            "Halo Sinergi Business Solution, saya ingin berdiskusi.",
            "",
            "Nama: " + name,
            "Kontak: " + contact,
            "",
            "Kebutuhan:",
            message
        ].join("\n");

        window.open(
            "https://wa.me/6281235863440?text=" + encodeURIComponent(text),
            "_blank",
            "noopener,noreferrer"
        );
    });
}

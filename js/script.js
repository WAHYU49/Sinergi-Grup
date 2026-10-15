
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
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navigation.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Buka menu");
            menuToggle.textContent = "☰";
        });
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

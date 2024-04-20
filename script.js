document.addEventListener("DOMContentLoaded", function () {
    const numStars = 100;
    const body = document.body;

    function createStar() {
        const star = document.createElement("div")
        star.className = "stars";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() + "s";
        body.appendChild(star);
    }

    for (let i = 0; i < numStars; i++) {
        createStar();
    }

    const stars = document.querySelectorAll(".stars");
    stars.forEach(function (star) {
        star.addEventListener("animationiteration", function () {
            body.removeChild(star);
            createStar();
        });
    });
});

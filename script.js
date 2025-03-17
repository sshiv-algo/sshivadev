document.addEventListener("DOMContentLoaded", function() {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.addEventListener("click", function() {
            this.style.backgroundColor = "#ffeb3b";
            setTimeout(() => {
                this.style.backgroundColor = "white";
            }, 500);
        });
    });
});

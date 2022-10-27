const content = document.getElementsByClassName("content");
const arrContent = Array.from(content);
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");

arrContent.forEach(ele => {
    ele.addEventListener("click", function(e) {
        this.classList.toggle("active");
    });
});
alert("There is an important message for you, so please follow the rules.");
alert("1. Jodi ak tao miss jay tahole continue korba na pls 🙏");
alert("Click OK if you are ready. OK!");

let cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");
    };
});
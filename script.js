const messages = [
    "Ohh don't you love me?",
    "Are you sure bbe?",
    "Think about it before u click!",
    "Please bbe I love you so much.",
];
  
const images = [
    "https://media.tenor.com/eX1d6fukpNQAAAAi/begging-cat-cat.gif",
    "https://media1.tenor.com/m/YyBvHcAQEDYAAAAd/cat.gif",
    "https://media.tenor.com/vYtjC3Nn-KgAAAAi/bunny-cute.gif",
    "https://media.tenor.com/FkhHW_OewrcAAAAi/bubu-thinking-new-bubu-sad.gif",
];
  
const colors = ["#d67b83", "#cc6677", "#bb5566", "#aa4455"];
let clickCount = 0;
  
document.getElementById("yes").addEventListener("click", function () {
    window.location.href = "yes.html";
});
  
document.getElementById("no").addEventListener("click", function () {
    moveNo();
    updateMessageAndImage();
});
  
function moveNo() {
    let btn = document.getElementById("no");
    let x = Math.random() * window.innerWidth * 0.7;
    let y = Math.random() * window.innerHeight * 0.7;
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
}
  
function updateMessageAndImage() {
    let messageElement = document.querySelector("h1");
    let imageElement = document.querySelector(".gif");
  
    if (clickCount < messages.length) {
        messageElement.textContent = messages[clickCount];
        messageElement.style.color = colors[clickCount];
        imageElement.src = images[clickCount];
        clickCount++;
    }
}
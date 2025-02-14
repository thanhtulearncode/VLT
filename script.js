/* script.js */
const messages = [
    "Ohh don't you love me?",
    "Are you sure bbe?",
    "Think about it before u click!",
    "Please bbe I love you so much."
];

const images = [
    "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
    "https://media.giphy.com/media/l0ExdMHUDKteztyfe/giphy.gif",
    "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif",
    "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
];

let clickCount = 0;

document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "yes.html";
});

document.getElementById("no").addEventListener("click", function() {
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
        imageElement.src = images[clickCount];
        clickCount++;
    }
}

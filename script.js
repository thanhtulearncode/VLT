document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "yes.html";
});

document.getElementById("no").addEventListener("mouseover", function() {
    let btn = document.getElementById("no");
    let x = Math.random() * window.innerWidth * 0.7;
    let y = Math.random() * window.innerHeight * 0.7;
    btn.style.position = "absolute";
    btn.style.left = x + "px";
    btn.style.top = y + "px";
});


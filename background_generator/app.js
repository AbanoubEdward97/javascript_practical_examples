const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
document.body.style.backgroundColor = "#f1f5f8";
document.getElementById("btn").onclick = function(){
    let random_color = Math.floor(Math.random() * colors.length)
    document.querySelector(".color").textContent = colors[random_color]
    document.body.style.backgroundColor = colors[random_color]
}
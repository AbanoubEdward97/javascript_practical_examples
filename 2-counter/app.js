let counter = 0;
document.querySelectorAll(".btn").forEach(button =>{
    button.onclick = function(){
        if (button.id == "decrease"){
            counter -=1
        }else if (button.id == "increase"){
            counter +=1
        }else{
            counter = 0
        }
        document.querySelector("#value").textContent = counter ;
        document.querySelector("#value").style.color = counter > 0 ? "green" : counter < 0 ? "red" : "#222"
    }
})
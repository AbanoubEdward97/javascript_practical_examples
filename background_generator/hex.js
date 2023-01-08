const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
document.body.style.backgroundColor= '#f1f5f8'
document.getElementById("btn").onclick = function(){
    let my_str ='';
    for ( let i=0;i < 6 ; i++){
        let random_index = Math.floor(Math.random() * hex.length)
        let random_letter = hex[random_index]
        my_str += random_letter
    }
    document.querySelector(".color").textContent = '#' + my_str
    document.body.style.backgroundColor = '#' + my_str
}   
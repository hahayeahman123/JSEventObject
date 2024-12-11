
// 1. su js sugeneruoti 16 div elementu ir juos isdelioti 4x4

function addElements(){
    for(let i=0;i<16;i++){
            const div = document.createElement("div");
            div.textContent="hi";
            const content = document.querySelector(".container");
            div.style.flex="1 0 20%";
            content.appendChild(div);
        }
}
addElements();

function randomBG(){ // generates a random rgb value each time the function is called
    let r=Math.floor(Math.random()*254);
    let g=Math.floor(Math.random()*254);
    let b=Math.floor(Math.random()*254);
    return `rgb(${r}, ${g}, ${b})`
}

for(const key of document.querySelectorAll(".container div")){ // with several div's, we need a loop for each individual div
    key.addEventListener("click",(e)=>{ // if a div is clicked
        e.target.style.backgroundColor = randomBG(); // we change its bg to a random value using the function
    })
}
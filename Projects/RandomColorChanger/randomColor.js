
const btn1 = document.querySelector('#btn');
const header = document.querySelector('h1');

function makeColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    console.log(r);
    const color = `rgb(${r},${g},${b})`
    return color;
}

function changeColor(){
    let newColor = makeColor();
    document.body.style.backgroundColor = newColor;
    header.innerText = newColor;
}
btn1.addEventListener('click', changeColor);

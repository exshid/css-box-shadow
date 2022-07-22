let result = document.querySelector('.result')
let opacity = document.querySelector('#opacity')
let blur = document.querySelector('#blur')
let numbers = document.querySelector('.numbers')
let inset = document.querySelector('.inset')
let code = document.querySelector('.code')
let color = document.querySelector('.color')

let red = '0';
let green = '0';
let blue = '0';

numbers.addEventListener('change', function (e) {
    code.style.boxShadow = `${inset.checked ? 'inset' : ''} ${xoffset.value}px ${yoffset.value}px ${blur.value}px ${spread.value}px rgba(${red},${green},${blue},${opacity.value / 100})`;
})
function hexToRGB() {
    red = parseInt("0x" + color.value.slice(1, 3));
    green = parseInt("0x" + color.value.slice(3, 5));
    blue = parseInt("0x" + color.value.slice(5, 7));

}

color.addEventListener('change', hexToRGB)

numbers.addEventListener('change', function (e) {
    result.innerHTML = `box-shadow: ${inset.checked ? 'inset' : ''} ${xoffset.value}px ${yoffset.value}px ${blur.value}px ${spread.value}px rgba(${red},${green},${blue},${opacity.value / 100});<br>
    -webkit-box-shadow: ${inset.checked ? 'inset' : ''} ${xoffset.value}px ${yoffset.value}px ${blur.value}px ${spread.value}px rgba(${red},${green},${blue},${opacity.value / 100});<br>
    -moz-box-shadow: ${inset.checked ? 'inset' : ''} ${xoffset.value}px ${yoffset.value}px ${blur.value}px ${spread.value}px rgba(${red},${green},${blue},${opacity.value / 100});`
})
const activeLayer = document.querySelector('.gradient-layer.active');
const nextLayer = document.querySelector('.gradient-layer.next');
const btn = document.querySelector('.btn');
let hasFirstClicked = false;

btn.addEventListener('click', changeColor);

function changeColor() {
    if (!hasFirstClicked) {
        btn.textContent = 'change';
        hasFirstClicked = true;
    }
    nextLayer.style.backgroundImage = getGradient();
    nextLayer.style.opacity = 1;
    activeLayer.style.opacity = 0;

    // swap layers
    setTimeout(() => {
        activeLayer.style.opacity = 1;
        nextLayer.style.opacity = 0;
        activeLayer.style.backgroundImage = nextLayer.style.backgroundImage;
    }, 400);
}

function getGradient() {
    const baseDegree = Math.random() * 360;
    const color1 = `hsl(${baseDegree}, 75%, 60%)`;
    const color2 = `hsl(${baseDegree + 40}, 75%, 60%)`;
    const color3 = `hsl(${baseDegree + 120}, 75%, 60%)`;
    return `linear-gradient(${Math.random() * 360}deg, ${color1}, ${color2}, ${color3})`;
}
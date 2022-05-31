const mario = document.querySelector('img.mario');
const pipe = document.querySelector('img.pipe');
function marioPula() {
    mario.classList.add('pula');

    setTimeout(() => {
        mario.classList.remove('pula');
    }, 500)
};
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace('px', ''));
    if(pipePosition >= 20 && pipePosition <= 97 && marioPosition <= 89) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './img/game-over.png';
        mario.style.width = '64px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
}, 10)
document.addEventListener('keydown', (e) => {
    if(e.keyCode === 32) {
        marioPula();
    }
});
document.addEventListener('mousedown', () => {
    marioPula();
})
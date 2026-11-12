const images = [
    { src: 'Picture2.webp', left: '-40%', top: '-50%' },
    { src: 'Picture3.webp', left: '-30%', top: '-30%' },
    { src: 'Picture5.webp', left: '-20%', top: '-20%' },
    { src: 'Picture7.webp', left: '-10%', top: '-20%' },
    { src: 'Picture10.webp', left: '0%', top: '-20%' },
    { src: 'Picture12.webp', left: '10%', top: '-20%' },
    { src: 'Picture13.webp', left: '20%', top: '-20%' },
    { src: 'Picture15.webp', left: '30%', top: '-20%' },
    { src: 'Picture16.webp', left: '40%', top: '-20%' },
    { src: 'Picture18.webp', left: '50%', top: '-20%' },
    // { src: 'Picture19.webp', left: '5%', top: '-20%' },
    // { src: 'Picture21.webp', left: '5%', top: '-20%' },
    // { src: 'Picture22.webp', left: '5%', top: '-20%' },
    // { src: 'Picture23.webp', left: '5%', top: '-20%' },
];
let a = 1;
images.forEach((item) => {
    const loader = document.querySelector('.loader')
    const img = document.createElement('img');
    img.src = item.src;
    img.style.setProperty('--from-left', item.left);
    img.style.setProperty('--from-top', item.top);
    img.style.animation = `popin 0.2s linear ${a}s forwards`
img.addEventListener('animationend', () => {
    setTimeout(() => img.remove(), 200);  
});
    
    loader.appendChild(img)
    
    a += 0.5;
});

// let t = 800;
setTimeout(() => {
    let b = document.getElementsByTagName('img')
    b[0].remove()
}, 1000);
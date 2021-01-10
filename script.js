const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if(event.keyCode === 32) {
       console.log('funfou! funfou o espaço!!!'); 
    }
    
}

document.addEventListener('keyup', handleKeyUp);
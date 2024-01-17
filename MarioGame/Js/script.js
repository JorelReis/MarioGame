/* Vamos fazer a lógica para o Mario Pular, adicionando a class jump na imagem Mario */

/* Um EventListener em JavaScript é uma função que "escuta" ou "observa" um determinado tipo de evento em um elemento HTML específico. Ele aguarda a ocorrência desse evento e executa uma ação (ou várias ações) quando o evento acontece */

/*document.querySelector é um método em JavaScript que permite selecionar o primeiro elemento correspondente a um seletor CSS específico dentro do documento HTML*/


const mario = document.querySelector ('.mario');
const pipe = document.querySelector ('.pipe');
const clouds = document.querySelectorAll('.clouds');

const jump = () => {
   
    mario.classList.add('jump');   
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500);
  }
  
  document.addEventListener('keydown', jump);
  
  const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle (mario).bottom.replace('px', '');
    /* Transformar a string do console para number */
    
    
    console.log(marioPosition); 
    
    if (pipePosition<= 120 && pipePosition > 0 && marioPosition <110 ){

      pipe.style.animation = 'none'
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none'
      mario.style.bottom = `${marioPosition}px`;

      

      mario.src = './images/game-over.png'
      mario.style.width = '75px'
      mario.style.left = '50px' 


      clearInterval (loop);

      /* Usei o Template literals pois : característica do JavaScript que permite incorporar expressões dentro de strings. Essa notação é chamada de interpolação de string */
      /* Quando NavigationPreloadManager, precisa zerar o loop pra não ficar infinito */
    }

  }, 10);

/*   Se o deslocamento do pipe for menor ou igual a 120px ele bate no mario */
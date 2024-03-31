        // Captura a referência para o elemento da imagem que seguirá o cursor
        var follower = document.getElementById('follower');
    
        // Adiciona um evento de mousemove ao documento
        document.addEventListener('mousemove', function(e) {
            // Define a posição do elemento da imagem com base nas coordenadas do cursor
            follower.style.display = 'block';
            follower.style.left = (e.pageX - 100)+ 'px';
            follower.style.top = e.pageY  + 'px';
        });
// Captura a referência para todos os elementos com a classe 'floating-gif'
var floatingGifs1 = document.getElementById('gif1');
var floatingGifs2 = document.getElementById('gif2');
var floatingGifs3 = document.getElementById('gif3');
var floatingGifs4 = document.getElementById('gif4');

// Função para mover os GIFs aleatoriamente
function moveGif(gif) {
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    // Gera uma posição aleatória dentro da tela
    var randomX = Math.floor(Math.random() * (screenWidth - 200)); // Subtrai 200 para evitar que o GIF ultrapasse a borda direita
    var randomY = Math.floor(Math.random() * (screenHeight - 200)); // Subtrai 200 para evitar que o GIF ultrapasse a borda inferior

    // Define a posição do GIF
    gif.style.left = randomX + 'px';
    gif.style.top = randomY + 'px';
}

// Chama a função para mover os GIFs inicialmente
moveGif(floatingGifs1);
moveGif(floatingGifs2);
moveGif(floatingGifs3);
moveGif(floatingGifs4);

// Configura um intervalo para mover os GIFs periodicamente
setInterval(function() {
    moveGif(floatingGifs1);
}, 3000); // Muda a cada 3 segundos (3000 milissegundos)

setInterval(function() {
    moveGif(floatingGifs2);
}, 5000); // Muda a cada 5 segundos (5000 milissegundos)

setInterval(function() {
    moveGif(floatingGifs3);
}, 7000); // Muda a cada 7 segundos (7000 milissegundos)
setInterval(function() {
    moveGif(floatingGifs4);
}, 5000); // Muda a cada 5 segundos (5000 milissegundos)

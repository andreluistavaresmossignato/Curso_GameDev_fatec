var canvas = document.getElementById("cnv");
var ctx = canvas.getContext("2d");
var passaro = new Image();
var troncoA = new Image();
var troncoB = new Image();
var fundo = new Image();
var vao;
var passouFundo;
var pontuacao;

var posicPassaro = {
    x: 25,
    y: canvas.height / 2
};
var posicTroncoA = {
    x: canvas.width + 100,
    y: Math.floor( Math.random() * -50 + -200 ) + -50
};
var posicFundo = {
    x: 0,
    y: 0,
};
var posicTroncoB = {
    x: canvas.width + 100,
    y: Math.floor( Math.random() *  (80 + 350) ) + 80
};
function desenhar () { //início da função desenhar
    ctx.clearRect(0, 0, 288, 512);
    ctx.beginPath();
    posicPassaro.y += 10;
    posicTroncoA.x-=30;
    posicTroncoB.x -=30;
    ctx.drawImage( fundo, posicFundo.x,posicFundo.y, canvas.width + 5, canvas.height);
    ctx.drawImage( fundo, posicFundo.x + canvas.width, posicFundo.y, canvas.width, canvas.height);
    ctx.font = "20px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("Pontos: " + pontuacao, 25,10);
   

    ctx.drawImage(passaro,
    posicPassaro.x,
    posicPassaro.y, 50,50);
    ctx.drawImage(troncoA, posicTroncoA.x, posicTroncoA.y, 110, 280);
    ctx.drawImage(troncoB, posicTroncoB.x, posicTroncoB.y, 110, 280);
    ctx.closePath();
    if(posicTroncoA.x < 10) {
        posicTroncoA.x = canvas.width + 100;
        posicTroncoB.x = canvas.width + 100;
    }
    if(posicFundo.x + canvas.width <= 5) {
        posicFundo.x = 0;
    }
    posicFundo.x--;
    colisao();

} //fim da função desenhar

function start () { //início da função start

    canvas.addEventListener("mousedown", impulso);
   passaro.src = "img/passaro.png";
   troncoA.src = "img/troncoA.png";
   troncoB.src = "img/troncoB.png";
   fundo.src = "img/fundo.png";
    //a função setInterval() irá chamar a função
    //que estiver dentro dos parênteses na quantidade
    //de tempo, por milisegundos, definida:
    pontuacao = 0;
    setInterval("desenhar()", 200)
} //fim da função start

function impulso() {          
    posicPassaro.y -= 25;
}

function colisao(){
    if( posicPassaro.x > posicTroncoA.x &&
        posicPassaro.y > posicTroncoA.y + 280 )
    {
      pontuacao++;  
    }//fim do if
    else {
        //ctx.fillText("GAME OVER", 50,200);
    }
    if( posicPassaro.y <= 0 ) {
        posicPassaro.y = 0;
    }
    if( posicPassaro.y + 50 >=canvas.height ) {
        //alert("GAME OVER!");
        ctx.font = "80px Arial";
        ctx.fillstyle = "red";
        ctx.fillText("GAME OVER!", canvas.width / 2,
                                    canvas.height / 2);
    }
} //fim da função colisão()
let game = {
    
    start: function(){
        game = setInterval(drawGame,1000/600) 
        let canvas = document.getElementById("myCanvas")
        this.ctx = canvas.getContext("2d")
        this.ctx.canvas.width  = body.width - 10;
        this.ctx.canvas.height = body.height - 10;
        let platX = platStartX;
        let platY = platStartY;
    }

}

// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d")
// var body = document.getElementById("body")
// body.width = window.innerWidth
// body.height = window.innerHeight
// ctx.canvas.width  = body.width - 10;
// ctx.canvas.height = body.height - 10;

// let platStartX = ctx.canvas.width / 2 - 200
// let platStartY = ctx.canvas.height - 50
// let platX = platStartX;
// let platY = platStartY;
// document.addEventListener("keydown",direction);
// function direction(event){
//     if(event.keyCode == 37 || event.keyCode ==65)
//     platX-=10;
//     else if(event.keyCode == 39 || event.keyCode == 68)
//     platX+=10;
  
// }
// console.log(body.width  )
// function drawGame(){
//     ctx.clearRect(0,0,canvas.width, canvas.height)
//     ctx.fillStyle="#000d3c"
//     ctx.fillRect(platX, platY, 400, 20)
//     ctx.beginPath();
//     ctx.rect(platX, platY, 400, 20)
//     ctx.strokeStyle = 'white';
//     ctx.closePath();
//     ctx.stroke();

//     if (platX - 10 < 0) platX = 10;

//     if (platX + 10> ctx.canvas.width- 400) platX =  ctx.canvas.width- 410
// }

// game = setInterval(drawGame,1000/600)
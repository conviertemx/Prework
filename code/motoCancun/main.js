// -----CANVAS-------//////////

var canvas = document.getElementById('cancun')
var ctx = canvas.getContext('2d')

// -----VARIABLES-------//////////

var interval
var frames = 0
var images = {
    bg: 'https://ak3.picdn.net/shutterstock/videos/30202843/thumb/1.jpg',
    moto: "https://pngimage.net/wp-content/uploads/2018/05/bolita-png-6.png",
    logo: "https://cdn.pixabay.com/photo/2014/03/24/13/41/motorcycle-294034_960_720.png",
    arrows: "",
    pothole: "http://www.transportforbucks.net/Bucks/Design/tellus/images/components/size/pothole.png"
}
var potholes = []

//---->> Constructor Board--------------------------------------------------------------
function Board(){
  this.x = 0 
  this.y = 0 
  this.width = canvas.width 
  this.height = canvas.height
  //-------- Image constructor
  this.image = new Image()
  this.image.src = images.bg
  //this.image.onload = ()=>this.draw()
  this.draw = function(){
      this.y++
      if(this.y > this.height) this.y = 0 // This makes the background to move
/*
      this.x--
      if(this.x < -this.width) this.x = 0 // This makes the background to move
      //drawImage method draws the image into the canvas size
      */
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
      ctx.drawImage(this.image,this.x,this.y - this.height,this.width,this.height)
  }

  this.drawScore = function(){
      ctx.font = "bold 24px Avenir"
      ctx.fillText("Score: " + Math.floor(frames/60), 50,50)
  }
}
//---->> Constructor Board--------------------------------------------------------------

//---->> Constructor Moto------------------------------------------------------

function Moto(){
  Board.call(this)
  this.x = 300
  this.y = 750
  this.width = 30
  this.height = 30
  this.image.src = images.moto
  //this.image.onload = ()=>this.draw()
  this.draw = function(){
      this.boundaries()
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
  this.boundaries = function(){
      if(this.x+this.width > canvas.width-200) {
          this.x = canvas.width-this.width
      } // right boundary
      else if(this.x < 200 ) {
          this.x = 200
      } // left boundary
      
  }

  this.isTouching = function(item){
      return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
  }
} 
//---->> Constructor Moto------------------------------------------------------

//---->> Constructor Pothole------------------------------------------------------

function Pothole(width,x, position){
  this.x = x || 0 
  this.y = canvas.height + 60
  this.width = 5
  this.height = 5
  this.image = new Image()
  this.image.src = images.pothole
  this.draw = function(){
      this.y-=2 //--> the speed in which obstacles appear
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height) 
  }
}
//---->> Constructor Pothole------------------------------------------------------

// -----INSTANCES-------//////////
var bg = new Board()
var moto = new Moto()
var pothole = new Pothole()

// -----MAIN FUNCTIONS-------//////////
function start(){
    potholes = [] 
    frames = 0
    moto = new Moto()
    if(!interval) interval = setInterval(update,1000/60) //the speed in which all moves.
}
function update(){
    frames++
    ctx.clearRect(0,0,canvas.width, canvas.height) //clears the rectangle
    bg.draw()
    moto.draw()
    drawPotholes()
    bg.drawScore()
    checkMotoCollition()
}
function gameOver(){
    clearInterval(interval)
    interval = null
    ctx.fillStyle = "red"
    ctx.font = "bold 60px"
    ctx.fillText("GAME OVER", 50,200)
    ctx.fillStyle = "black"
    ctx.font = "bold 20px"
    ctx.fillText("Tu score: " + Math.floor(frames/60), 200,300)
    ctx.font = "bold 12px"
    ctx.fillText("Presiona 'Return' para reiniciar", 50,350)
}

// -----AUX FUNCTIONS-------//////////
function drawCover(){
    var img = new Image()
    img.src = images.logo
    img.onload = function(){
        bg.draw()
        ctx.drawImage(img, 50,100,300,100)
        ctx.font = "bold 13px 'Press Start 2P'"
        ctx.fillText("Presiona la tecla 'Return' para comenzar", 20,300)
    }
}

function generatePotholes(){
    if(frames%150===0) {
        //var height = Math.floor(Math.random()*200 + 50)
        potholes.push(new Pothole(height,0, "top"))
        var gap = Math.floor(Math.random()*100 + 50)
        var h = canvas.height-height-gap
        var y = canvas.height - h
        potholes.push(new Pothole(h,y))
    }
    
}

function drawPotholes(){
    generatePotholes()
    potholes.forEach(function(pothole){
        pothole.draw()
    })
}

function checkMotoCollition(){
    for(var pothole of potholes){
        if(moto.isTouching(pothole)){
            gameOver()
        }
    }
}

//listeners
addEventListener('keyup',function(e){
    switch(e.keyCode){
        case 13:
            return start()
        default:
            return
    }
} )

addEventListener('keydown',function(e){
    switch(e.keyCode){
        case 39:
            moto.x +=8
            break;
        case 37:
            moto.x -=8
            break;
            default:
            return
              }
            })


// arrow right 39
// arrow left 37
// arrow top 38
// arrow bottom 40

drawCover()

/*function draw() {
    var canvas = document.getElementById('cancun');
      var ctx = canvas.getContext('2d');
                 //(x, y, width, height)
      ctx.fillStyle = "LightGreen"
      ctx.fillRect(0, 0, 60, 800); 
      ctx.fillStyle = "gray"
      ctx.fillRect(60, 0, 20, 800); 
      ctx.fillRect(100, 0, 400, 800); 
      ctx.fillRect(520, 0, 20, 800); 
      ctx.fillStyle = "LightGreen"
      ctx.fillRect(540, 0, 60, 800); 
  
      ctx.beginPath();
      ctx.strokeStyle = "white"
      ctx.lineWidth = 8;
      ctx.setLineDash([40, 45]);
      ctx.moveTo(300, 0);
      ctx.lineTo(300, 800);
      ctx.stroke();
      ctx.closePath()
  }
  
  draw()
  */
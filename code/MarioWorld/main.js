//canvas
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
//getContext is a method used to obtain the rendering context and its drawing functions
//takes the type of context as parameter. For 2D graphics we specify “2d” to get a CanvasRenderingContext2D.

//variables
var interval
var audio
var frames = 0
var images = {
    bg: "http://www.nesmaps.com/maps/SuperMarioBrothers/images/SMB1-1BG.png",
    mario:"https://vignette.wikia.nocookie.net/mario/images/a/ab/Mario_8_bit.png/revision/latest?cb=20141027144957&path-prefix=es",
    mario2:"https://vignette.wikia.nocookie.net/amiibopedia/images/d/d1/Sprite_de_Mario_en_Super_Mario_Bros..png/revision/latest?cb=20160702044718&path-prefix=es",
    audio: "http://66.90.93.122/ost/mario-kart-64/qrpjpnaq/01%20Mario%20Kart%2064%20Theme.mp3"
}
//clases
function Board(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.image = new Image()
    this.image.src = images.bg
    this.image.onload = ()=>this.draw()

    this.draw = function(){
        this.x--
        if(this.x < -this.width) this.x = 0
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
        ctx.drawImage(this.image,this.x+this.width,this.y,this.width,this.height)
    }
}

function Character(){
    Board.call(this)
    this.x = 100
    this.y = 297
    this.width = 40
    this.height = 50
    this.image.src = images.mario
    this.image2 = new Image()
    this.image2.src = images.mario2
    this.activeImage = 1
    this.imagen = this.image

    this.changeImage = function(){
        if(this.activeImage === 1){
            this.imagen = this.image2
            this.activeImage = 2
        }else{
            this.imagen = this.image
            this.activeImage = 1
        }
    }

    this.draw = function(){
        if(frames%10===0) this.changeImage()
        ctx.drawImage(this.imagen,this.x,this.y,this.width,this.height)
    }
}

//instancias
var bg = new Board()
var mario = new Character()
//main functions
function start(){
    interval = setInterval(update, 1000/60)
}
function update(){
    frames++
    //console.log(frames)
    //borrar
    ctx.clearRect(0,0,canvas.width,canvas.height)
    //dibujar
    bg.draw()
    mario.draw()

}
function gameOver(){}
//aux function

//listeners
addEventListener('keydown', function(e){
    if(e.keyCode === 13){
        audio = new Audio()
        audio.src = images.audio
        audio.onload = ()=>audio.play()
        audio.play()
    }
})

start()
function General(a,b,c){
  this.a = a
  this.b = b
  this.c = c
  this.res = null

  this.mult1 = function(){
    return 4 * this.a * this.c
  }

  this.cuadrado = function(){
    return Math.pow(this.b,2)
  }

  this.raiz = function(){
    return Math.sqrt(this.cuadrado()-this.mult1())
  }

  this.resta = function(){
    return (-1 * this.b) - this.raiz()
  }

  this.abajo = function(){
    return 2 * this.a
  }

  this.result = function(){
    this.res = this.resta() / this.abajo()
    return this.res
  }

  this.result()

}

var solucion = new General(4,6,2)
console.log(solucion.res)



function General(a,b,c){
  this.a = a
  this.b = b
  this.c = c
  this.res = null

  this.mult1 = function(){
    return 4 * this.a * this.c
  }

  this.cuadrado = function(){
    return Math.pow(this.b,2)
  }

  this.raiz = function(){
    return Math.sqrt(this.cuadrado()-this.mult1())
  }

  this.resta = function(){
    return (-1 * this.b) - this.raiz()
  }

  this.abajo = function(){
    return 2 * this.a
  }

  this.result = function(){
    this.res = this.resta() / this.abajo()
    return this.res
  }

  this.result()

}

var solucion = new General(4,6,2)
console.log(solucion.res)




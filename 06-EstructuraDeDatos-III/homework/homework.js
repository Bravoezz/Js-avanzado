"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value =value;
  this.left= null;
  this.right=null;
}


BinarySearchTree.prototype.insert= function(value){
  if (value<this.value) {
    if (this.left) {
      this.left.insert(value)
    }else{
      this.left =new BinarySearchTree(value);
      return value;
    }
  }
  if (value>this.value) {
    if (this.right) {
      this.right.insert(value)
    }else{
      this.right = new BinarySearchTree(value);
      return value;
    }
  }
}
BinarySearchTree.prototype.contains= function(value){
  if(this.value==value)return true;
  if (this.left) {
    if(this.left.contains(value)) return true;
 }
 if(this.right){
   if(this.right.contains(value)) return true;
 }
 return false;
}
BinarySearchTree.prototype.depthFirstForEach= function(){
  
}
BinarySearchTree.prototype.breadthFirstForEach = function(){

}
BinarySearchTree.prototype.size= function(){
  var cont = 0;
  cont++
  if (this.left) {
    cont+=this.left.size()
  }
  if (this.right) {
    cont+=this.right.size()
  }
return cont;
}


















// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

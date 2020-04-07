var palabra = String.fromCharCode(80);
var x,y,z;
  
  console.log("\n\nEscribe una palabra: ");
  //console.log(" %s",palabra);
  x=String.length(palabra);
  x=x-1;
for(y=0,z=x;y<=x/2;y++,z--){
         if(palabra[y]==palabra[z]){
         console.log("Es palindromo");
         }else{
console.log("No es palindromo");
        }
}

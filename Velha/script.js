
var soma=0, jogador=1;
A = new Array(); 
B = new Array();
C = new Array();
fibo= new Array(0,1);
let i=1;

const a0  = document.getElementById("a1");
const a1 = document.getElementById("a2"); 
const a2 = document.getElementById("a3");
const b0 = document.getElementById("b1");
const b1 = document.getElementById("b2");
const b2 = document.getElementById("b3");
const c0 = document.getElementById("c1");
const c1 = document.getElementById("c2");
const c2 = document.getElementById("c3");



    function entrada(bo){
        setTimeout(3000);
        console.log("oi");
    
        if(jogador==1)  {
            bo.value="X"; 
            jogador=0;
    
    
        }
        
    
        else {
            bo.value="O"; 
            jogador=1;
    
        }  
    

}


    


  

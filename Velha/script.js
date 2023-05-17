
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
const a = document.querySelector(".resultados");
var delayInMilliseconds = 2000; //1 second

//a0.addEventListener("click" , () => {
//});



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
        
        if(a0.value=="X" && a1.value=="X"&&a2.value=="X"||b0.value=="X" && b1.value=="X"&&b2.value=="X"||c0.value=="X" && c1.value=="X"&&c2.value=="X"||a0.value=="X" 
        && b1.value=="X"&&c2.value=="X"||a2.value=="X" && b1.value=="X"&&c0.value=="X"||a0.value=="X" && b0.value=="X"&&c0.value=="X"||a1.value=="X" && b1.value=="X"&&c1.value=="X"||a2.value=="X" && b2.value=="X"&&C2.value=="X"){


             var x = document.createElement("INPUT");
             x.setAttribute("value", "X ganhou");
             a.appendChild(x);

             setTimeout(function() {
                window.location.reload(true) 
              }, delayInMilliseconds);
           
        }
        
        
        if(a0.value=="O" && a1.value=="O"&&a2.value=="O"||b0.value=="O" && b1.value=="O"&&b2.value=="O"||c0.value=="O" && c1.value=="O"&&c2.value=="O"||a0.value=="O" && b1.value=="O"&&c2.value=="O"||a2.value=="O" 
        && b1.value=="O"&&c0.value=="O"||a0.value=="O" && b0.value=="O"&&c0.value=="O"||a1.value=="O" && b1.value=="O"&&c1.value=="O"||a2.value=="O" && b2.value=="O"&&C2.value=="O") {
      
            var x = document.createElement("INPUT");
            x.setAttribute("value", "O ganhou");
            x.setAttribute("id", 1);
            a.appendChild(x);
            setTimeout(function() {
                window.location.reload(true) 
              }, delayInMilliseconds);

        }
        
        

}

function calcular(){

       
   }



    

  

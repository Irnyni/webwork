
var soma=0;
valores = new Array(); 
fibo= new Array(0,1);

const a = document.querySelector(".container");
function FIBO(num){
    for(i=2;i<num;i++){
       soma= fibo[0]+fibo[1];//0+1
        if (i % 2 === 0) fibo[0]=soma;
        else  fibo[1]=soma;     
        valores[(i-2)]=soma;
        console.log(soma);
        //document.write(soma);
        var x = document.createElement("INPUT");
        x.setAttribute("type", "text" );
        x.setAttribute("value", soma);
        x.setAttribute("disable",false);
    
        a.appendChild(x);
    }
  
}
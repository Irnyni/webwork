
var meses;
meses = ["JANEIRO","FEVEREIRO","MARÇO","ABRIL","MAIO","JUNHO","JULHO","AGOSTO","SETEMBRO","OUTUBRO","NOVEMBRO","DEZEMBRO"];



function calculaTempo(data1, data2){

    console.log("aaaaaaa");
     datas1= parseInt  (data1.substring(0,4));
     datas2= parseInt  (data2.substring(0,4));
     anos = datas2-datas1;
     meses1= parseInt  (data1.substring(6,7));
     meses2= parseInt  (data2.substring(6,7));
     meses = meses2-meses1;
     dias1= parseInt  (data1.substring(8,10));
     dias2= parseInt  (data2.substring(8,10));
     dias = dias1-dias2;
    
    //document.write(data1);
    //document.write(datas1);
    //document.write(datas2);
    //document.write(meses1);
    //document.write(meses);
    //document.write("anos:" + anos + "meses:" + meses + "dias: "+ dias1);
    //document.write(dias2);
    if(anos<1) anos = anos*(-1);
    if(meses<1) mesesm = meses*(-1);
    if(dias<1) dias = dias*(-1);
    document.getElementById("year").value= anos;
    document.getElementById("mes").value= meses;
    document.getElementById("day").value= dias;

}
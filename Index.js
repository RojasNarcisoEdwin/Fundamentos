
let matrizz =
 [[1,2,3],[4,5,6],[7,8,9]];






function Salida1(matrizz)
{
    console.log("SALIDA ARREGLO 1");
    for (let i=matrizz.length-1; i>= 0 ; i--)
    {

        renglon=" [ "
        for (let j=matrizz[0].length-1; j >=0 ; j--)
        {
            renglon += ""+matrizz[i][j]+ " ";
        }
        renglon+="]"
        console.log(renglon);
    } 
}


function Salida2(matrizz)
{
    console.log("SALIDA ARREGLO 2");
    let renglon = "";
    for (let i=0; i<matrizz.length; i++)
    {   
       
        console.log(matrizz[i][0],matrizz[i][1],matrizz[i][2]);
       
    }
    
}


function Salida3(matrizz){
console.log("SALIDA ARREGLO 3");
let renglon= ""
for (let i=matrizz[0].length-1; i>= 0; i--)
{
        renglon=" [ "
        for (let j=matrizz.length-1; j>=0 ; j--){
        renglon += ""+matrizz[j][i]+ " ";
    }
    renglon += "]"
    console.log(renglon);
}          
}

Salida1(matrizz);
Salida2(matrizz);
Salida3(matrizz);
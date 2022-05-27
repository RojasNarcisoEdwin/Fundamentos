let Matriz = [[1,2,3],
    [4,5,6],
    [7,8,9]];
/*
        Guía para realizar mi código
        conca += ""+Matriz[i][j]+ " "; //Código proporcionado por el profesor Jorge
*/



    function hacer_salto(c)
    {
        for(let s = 0; s< c;  s++)
            {
                console.log("\n");
            }
    }
    //Matriz original 
    console.log("Arreglo  original");
    for (let i=0; i< Matriz.length; i++)
    {
        console.log(Matriz[i]);
    }
    function Mandar_Consola(Matriz,t)
    {
        switch(t)
        {
            case 1:
            {
                console.log("Arreglo salida 1");
                let conte = 0;
                for (let i=Matriz.length-1; i>= 0 ; i--)
                {

                    conca="  "
                    conte++;
                    for (let j=Matriz[0].length-1; j >=0 ; j--)
                    {
                        conca += ""+Matriz[i][j]+ " ";
                    }
                    conca += "\n"
                    console.log(conca);
                } 
                hacer_salto(3);
                break;

            }
            case 2:
            {
                console.log("Arreglo salida 2");

                let conca = "";
                for (let i=0; i<Matriz.length; i++)
                {   
                
                    conca += ""+Matriz[0][i]+" "+Matriz[1][i]+" "+Matriz[2][i]+ "\n";
                
                }
                console.log(conca);
                hacer_salto(3);
                break;
                
            }
            case 3:
            {
                console.log("Arreglo Salida 3");
                let conca= ""
                for (let i=Matriz[0].length-1; i>= 0; i--)
                {
                        conca=""
                        for (let j=Matriz.length-1; j>=0 ; j--){
                        conca += ""+Matriz[j][i]+ " ";
                    }
                    conca += ""
                    console.log(conca);
                }
                break;

            }

        
        }
    }

    Mandar_Consola(Matriz,1);
    Mandar_Consola(Matriz,2);
    Mandar_Consola(Matriz,3);
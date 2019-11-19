/*
    Esta funcion se ejecuta cuando se hace click en el boton "Calcular"
*/
function calcCommonChild(){
    //Defino e inicializo variables
    var childs =[];
    var child = "";
    var result ="";

    //obtengo el string ingresado
    s = document.getElementById("stringEntrada").value;
    
    //lo separo en un array
    sEnt = s.split(" ");

    //Defino y asigno el valor de las string ya parseadas
    var s1 = clearString(sEnt[0],sEnt[1]);
    var s2 = clearString(sEnt[1],sEnt[0]);

    //Si s1 o s2 están vacías no puede haber childs entre ellas
    if ((s1.length!== 0 || s2.length!== 0)){

        //ciclo que controla todas las subcadenas de s1
        for(i=0;i < s1.length; i++) {
            var auxs2 = s2;

            //ciclo que controla las coincidencias sucecivas entre s1 y s2
            for(j=0;j < s1.length; j++) {
                var letra = s1.charAt(j);
                var poscLetra = auxs2.indexOf(letra);
                if (poscLetra !== -1){
                    child = child + letra;
                    auxs2 = auxs2.substring(poscLetra + 1);
                } else {
                    break;
                }
            }

            //cuando termina de analizar guarda el child en un vector
            childs.push(child);

            // y se reinicia para la sig busqueda
            child = "";

            // Se va reduciendo s1 y se analiza la sig substring
            s1 = s1.substring(i+1);
        }

        //al final del analisis busco el child más largo
        result = getMaxChild(childs);
    }
    
    //Muestro los resultados en pantalla
    document.querySelector("#result").setAttribute("value",result.length);
    document.querySelector("#child").setAttribute("value",result);
}
/*
    Esta funcion recorre el vertor que tiene como argumento y devuelve el
    elemento mas largo (string).
*/
function getMaxChild(v){
    max =0;
    result = "";
    for (i=0; i<v.length;i++){
        if (max < v[i].length){
            max = v[i].length;
            result = v[i];
        }
    }
    return result;
}
/*
    Esta funcion se encarga de quitar las letras que no tienen en común las 2
    Strings, en caso de no tener ninguna devuelve un string vacío.
    Lo mas importante es que se mantiene el orden de las letras que si 
    coinciden.
*/
function clearString(s1, s2){
    var s1Vec = s1.split("");
    var s2Vec = s2.split("");
    var resultVec = [];
    var result = "";
    for (i=0;i<s1Vec.length;i++){
        var letra = s1Vec[i];
        for (j=0;j<s2Vec.length;j++){
            if (letra === s2Vec[j]){
                resultVec.push(letra);
                break;
            }
        }
    }
    if (resultVec.length !== 0){
        result = resultVec.join("");
    } 
    return result;
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcCommonChild(){
    s = document.getElementById("stringEntrada").value;
    result = 0;
    child = "";
    sEnt = s.split(" ");
    s1 = sEnt[0] ;
    s2 = sEnt[1];
    auxs2 = s2;
    for(i=0;i < s1.length; i++) {
        letra1 = s1.charAt(i);
        var poscLetra = auxs2.indexOf(letra);
        if (poscLetra !== -1){
            result++;
            child = child + letra;
            auxs2 = auxs2.substring(i);
        }
    }
    document.querySelector("#result").setAttribute("value",result);
    alert(child);
}
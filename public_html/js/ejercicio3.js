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
    s1 = clearString(sEnt[0],sEnt[1]) ;
    s2 = clearString(sEnt[1],sEnt[0]);
    auxs2 = s2;
    for(i=0;i < s1.length; i++) {
        letra = s1.charAt(i);
        var poscLetra = auxs2.indexOf(letra);
        if (poscLetra !== -1){
            result++;
            child = child + letra;
            auxs2 = auxs2.substring(i);
        } else {
            
        }
    }
    document.querySelector("#result").setAttribute("value",result);
    alert(child);
}
/*function clearString(s){
    sEnt = s.split(" ");
    s1 = sEnt[0] ;
    s2 = sEnt[1];
    s1Vec = s1.split("");
    s2Vec = s2.split("");
    for (i=0;i<s1Vec.length();i++){
        letra = s1Vec[i];
    }
*/
function clearString(s1, s2){
    s1Vec = s1.split("");
    s2Vec = s2.split("");
    var result = [];
    for (i=0;i<s1Vec.length();i++){
        letra = s1Vec[i];
        for (i=0;i<s2Vec.length();i++){
            if (letra === s2Vec[i]){
                result.push(letra);
            }
        }
    }
    return result;
}
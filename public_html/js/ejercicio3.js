/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcCommonChild(){
    s = document.getElementById("stringEntrada").value;
    var childs =[];
    var child = "";
    sEnt = s.split(" ");
    var s1 = clearString(sEnt[0],sEnt[1]);
    var s2 = clearString(sEnt[1],sEnt[0]);
    var result ="";
    if ((s1.length!== 0 || s2.length!== 0)){
        for(i=0;i < s1.length; i++) {
            var auxs2 = s2;
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
            childs.push(child);
            child = "";
            s1 = s1.substring(i+1);
        }
        result = getMaxChild(childs);
    }
    document.querySelector("#result").setAttribute("value",result.length);
    document.querySelector("#child").setAttribute("value",result);
}
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
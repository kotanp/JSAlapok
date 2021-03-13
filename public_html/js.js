/*segédfv*/
function ID(nev){
    return document.getElementById(nev);
}
var osszeg=0;

function beker(){
    var szamolGomb=ID("szamol");
    var valtozoA=document.getElementById("a").value;
    var valtozoB=document.getElementById("b").value;
    osszeg=Number(valtozoA)+Number(valtozoB);
    if(isNaN(osszeg) || document.getElementById("a").value==="" || document.getElementById("b").value===""){
        ID("szamol").style.color="lightgray";
        ID("szamol").disabled=true;
        ID("szamol").title="Számokat adj meg";
    }
    else{
        ID("szamol").disabled=false;
        ID("szamol").style.color="black";
        szamolGomb.addEventListener("click",szamol,false);
    }
    ID("a").addEventListener("input",beker,false);
    ID("b").addEventListener("input",beker,false);
}

function szamol(){
    document.getElementById("szoveg").innerHTML="Összeg: <span style='color:red'>"+osszeg+"</span>";
}

//function szamol(){
//var valtozoA=document.getElementById("a").value;
//var valtozoB=document.getElementById("b").value;
//var osszeg=Number(valtozoA)+Number(valtozoB);
//if(isNaN(osszeg)){
//    ID("szamol").style.color="lightray";
//    ID("szamol").title="Számokat adj meg";
//}
//else{
//    document.getElementById("szoveg").innerHTML="Összeg: <span style='color:red'>"+osszeg+"</span>";
//}
//}

function szamolFormaz(){
    document.getElementById("szamol").style.color="red";
    //document.getElementById("szamol").style.border="1px solid black";
}

function szamolLevesz(){
    document.getElementById("szamol").style.color="black";
    //document.getElementById("szamol").style.border="none";
}

function inputFormazas(){
    ID("a").classList.add("bevitelimezo");
}

function init(){
//    var szamolGomb=ID("szamol");
//ID("uzenet").innerHTML="ASdf";
//szamolGomb.addEventListener("click",szamol,false);
//szamolGomb.addEventListener("mouseover",szamolFormaz,false);
//szamolGomb.addEventListener("mouseout",szamolLevesz,false);
//ID("a").addEventListener("click",inputFormazas,false);
beker();

}

window.addEventListener("load",init,false);
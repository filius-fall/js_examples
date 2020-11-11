function getprev(){
    return document.getElementById("prev").innerText;
}

function changeprev(a){
    document.getElementById("prev").innerHTML=a;
}

function getnxt(){
    return document.getElementById("nxt").innerText;
}

function changenxt(a){
    document.getElementById("nxt").innerHTML=a;
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            changeprev("");
            changenxt("");
        }
        output=getnxt();
        preput=getprev();
        if(this.id=="del"){
            output = output.substr(0,output.length-1)
            changenxt(output);
        }
        if(this.id=="="){
            changeprev(output)
            output=eval(output);
            changenxt(output)
        }
    })
}
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=getnxt()
        if(output!=NaN){
            output += this.id;
            changenxt(output);
        }
    })
}

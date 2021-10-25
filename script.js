function cleardisplay(){
    document.getElementById("display").value=""
}
function buttonclick(val){
    document.getElementById("display").value=document.getElementById("display").value+val
}
function equalclick(){
    var text=document.getElementById("display").value
    var result=eval(text)
    document.getElementById("display").value=result
}
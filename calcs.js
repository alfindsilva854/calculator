function displayData(n){
    result.value+=n
}
function evalEx(){
    result.value=eval(result.value) 
}
function alClear(){
    result.value=""
}
function clearCB(){
    result.value=result.value.slice(0,-1)
}
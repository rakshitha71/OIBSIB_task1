function solve(val){
    var v = document.getElementById('view');
    v.value += val;
 }
function back() {
    var ev = document.getElementById('view');
    ev.value = ev.value.slice(0,-1);
 }
function equal(){
    var n1 = document.getElementById('view').value;
    var n2 = eval(n1);
    document.getElementById('view').value = n2;
}
function pi(){
    var s = document.getElementById('view');
    s.value += Math.PI;
}
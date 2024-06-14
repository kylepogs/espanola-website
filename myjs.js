function add1() {
    let x = document.getElementById("num1").value;
    const y = document.getElementById("num2").value;
    var z = Number(x)+Number(y);
    document.getElementById('add').value = z;
}
function add2() {
    let x = document.getElementById("num3").value;
    const y = document.getElementById("num4").value;
    var z = Number(x)/Number(y);
    document.getElementById('divide').value = z;
}
function add3() {
    let x = document.getElementById("num5").value;
    const y = document.getElementById("num6").value;
    var z = Number(x)* Number(y);
    document.getElementById('multiply').value = z;
}
function add4() {
    let x = document.getElementById("num7").value;
    const y = document.getElementById("num8").value;
    var z = Number(x)- Number(y);
    document.getElementById('minus').value = z;
}
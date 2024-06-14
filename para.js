function addNumbers(no1, no2){
    var no1 = parseFloat(document.getElementById('no1').value);
    var no2 = parseFloat(document.getElementById('no2').value);
    var sum = no1 + no2;
    document.getElementById('add').value =sum;
}
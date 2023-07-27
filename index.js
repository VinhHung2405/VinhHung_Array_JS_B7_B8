// Ham domId
function domId(id) {
  return document.getElementById(id)
};
//hàm getNum
var numbers = [];
function getNum() {
    var number = Number(domId('inputNum').value);
    numbers.push(number);
    domId('arrayNum').innerHTML = numbers;
}

// bài 1: tính tổng số dương
function calcSum() {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            total += numbers[i];
        }
    }
    domId('sum').innerHTML = total;
}


//Bài 2 đếm số dương
function countSum() {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            count++;
        }
    }
    domId('count').innerHTML = count;
}

// Tìm số nhỏ nhất
function findMin(){
    var min = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        if (min > numbers[i]){
            min = numbers[i];
        }
    }
    domId('min').innerHTML = min;
}

//Bài 4: tìm số dương nhỏ nhất
function findMinPos(){
    var positive = [];
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            positive.push(numbers[i]);
        }
    }
    if(positive.length > 0){
        var minPos = positive[0];
        for(var i =0; i < positive.length; i++){
            if(minPos>positive[i]){
                minPos=positive[i];
            }
            domId('minPos').innerHTML = minPos;
        }
    }else
    domId('minPos').innerHTML = "không tìm thấy số dương";
}

//Bài 5:tìm số chẵn cuối cùng
function findLastEven(){
    var lastEven = 0;
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 == 0){
            lastEven = numbers[i];
        }
    }
    domId("lastEven").innerHTML = lastEven;
}

//Bài 6: đổi chỗ 2 giá trị trong mảng
function changePos() {
    index1 = domId('inputIndex1').value;
    index2 = domId('inputIndex2').value;

    function change(a, b) {
        var c = numbers[a];
        numbers[a] = numbers[b];
        numbers[b] = c;
    }
    change(index1, index2);
    domId('ChangePosition').innerHTML = "Sau khi đổi " + numbers;
}

//Bài 7: sắp xếp mảng theo thứ tự tăng dần
function sortIn() {
    var result = numbers.sort(function (a, b) {
        return a - b;
    });
    domId('inCrease').innerHTML = result;
}

//Bài 8: Tìm số nguyên đầu tiên trong mảng
function checkPrime(number) {
    if (number < 2){
        return false;
    }
    for (var i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
            return false;
        } 
    }
    return true;
}
function findFirstPrime() {
    for (var i = 0; i < numbers.length; i++) {
        var firstPrime = 0;
        if (checkPrime(numbers[i])) {
            firstPrime = numbers[i];
            break
        } 
    }
    firstPrime === 0? domId("prime").innerHTML = "Không có số nguyên tố trong mảng" : domId("prime").innerHTML = firstPrime;
}

//Bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var newNums = [];
function getNewNum (){
    var newNum = Number(domId('inputNewNum').value);  
    newNums.push(newNum);
    domId('newNum').innerHTML = newNums;
}
function countInt(){
    var count = 0;
    for (var  i = 0; i < newNums.length; i++)
    if (Number.isInteger(newNums[i])){
        count++;
    } 
    domId('countInt').innerHTML = "Số nguyên " + count;
}

//Bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.
function compareNum(){
    for (var pos = 0, neg = 0, i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            pos++;
        } else {numbers[i] < 0 && neg++ }
    }
    if (pos < neg){
        domId('compare').innerHTML = "Số dương < Số âm ";
    } else if (pos > neg){
        domId('compare').innerHTML = "Số dương > Số âm ";
    } else {
        domId('compare').innerHTML = "Số dương = Số âm ";
    }
}


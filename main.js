console.log("德瑪西亞");

let name = "嘉文";

//變數宣告
// let //變數
// const //常數 //Java 的 final

// JavaScript 基礎型別
// 所有東西都是物件
// number
// string
// boolean
// null // 工程師手寫打上去的
// undefined // 系統給你的空值
// object // 物件

// let arr = [1 ,2 ,3 ,4 ,5 ,6]
// for(let i = 0 ; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// // callback 回呼
// arr.forEach(function(i) {
//         console.log(i*10);
// })

// function aa() {
//     console.log("這是aa")
// };

// aa();

// Filter
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90]
// const filterArr = arr.filter(function(i){
//    return i % 20 == 0 
// });

// console.log(filterArr);

// const mapArr = arr.map(function(i){
//     return i+1;
// });

// console.log(mapArr);

// let arr = [];
// for(let i = 0 ; i < 1000 ; i++) {
//     arr[i] = i+1;
//     // arr.push(i)
// }

// const filterArr = arr.filter(function(i) {
//     return i % 2 == 0
// });

// const tot = filterArr.reduce(function(acc,cur) {
//     return acc + cur
// },0);

// console.log(tot);

// 操作DOM

// 1.抓出要的HTML元素(DOM節點)
const title = document.getElementById("title");
const button = document.querySelector("#btn");
const input = document.querySelector("#input");

console.log(button);

// let amount = 0;
// button.addEventListener("click",function() {
    // amount += 1;
    // title.innerText = "您已按了"+ amount + "次";
    // const num = input.value;
    // title.innerText = num;
    // input.value = null;
// });

let target = Math.floor(Math.random()*100 +1);
let min=1;
let max=100;    
button.addEventListener("click",function(){
    let answer = +input.value;
    input.value = null;
    if(answer > max || answer < min) {
        // alert() 彈出訊息視窗
        alert("超出猜測範圍");
        title.innerText = "超出猜測範圍 請猜範圍內的數字 : " + min + "~" + max;
        return;
    }
    if(answer == target) {
        // numArea.innerHTML
        alert("BINGO!!!");
        title.innerText = "答對了!";
    } else if(answer > target) {
        max = answer;
        title.innerText = "數字過大 範圍 : " + min + "~" + max;
    } else if(answer < target) {
        min = answer;
        title.innerText = "數字過小 範圍 : " + min + "~" + max;
    }
});
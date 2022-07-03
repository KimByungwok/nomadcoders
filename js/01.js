// 1단계

const a = 10;  //const는 상수 (변하지 않는 수)
let b = 2; // let은 값이 변할 수 있는 변수
var myName = "qudwok";  // 오류가 나도 안알려줌 옛날 선언부

console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log("hello "+ myName);

myName = 'qudwok98';

console.log("your new name is "+myName);

//

const amIFat = true; //false(이건 없다는 값이 있는 것), null(변수에 아무것도 없다는 뜻)
let something; // undefined 는 변수는 있지만 값이 없는 것
something = false;  //null은 자연적으로 발생하지 않음 사람이 지정하는 것
console.log(something,amIFat);

// 2단계

const sun = "sund";
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";

const daysOfWeek=["sun","mon", "tue","wed","thu","fri"];
const nonsense = [1,2,"hello",false,true,undefined,"nico"];
// Get Item from Array
console.log(daysOfWeek);


daysOfWeek.push("sat");

console.log(daysOfWeek);

const toBuy = ["apple","tomato","pizza"];
toBuy.push("kimbab");
console.log(toBuy[0]);


const playerName = "qudwok";
const playerPoints = 121212;
const playerHandsom = true;
const playerFat = "little bit";


// player[0] == name
// player[1] == points
// player[2] == handsom
// const player = ["qudwok",121212,false,"little bit"];



const player = {
    name:"qudwok",
    points:100,
    fat:true,
};
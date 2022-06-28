/*
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

//

// const sun = "sund";
// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";

const daysOfWeek=["sun","mon", "tue","wed","thu","fri"];
const nonsense = [1,2,"hello",false,true,undefined,"nico"];
// Get Item from Array
console.log(daysOfWeek);

*/

// Add one more day to the array

/*

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

// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// console.log(player.fat); // 여기서 const는 obj임 그래서 업데이트 할 때 아무 문제 없이 되는 것
//player.fat = false;
console.log(player);
player.lastName = "potato"; // obj는 존재하지 않아도 추가할 수 있고 값을 변경할 수 있다.
player.points = player.points + 15;
// console.log(player.fat);
console.log(player);


*/

/*
// 아규먼트 (인수) 를 보내야 함
function sayHello(nameOfPerson, age){
    console.log("Hello my name is",nameOfPerson,"and I'm",age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);



function plus(a,b){ // 인수는 funtion 블럭 밖에선 존재하지 않음
    console.log(a+b);
}
function divide(firstNum,seconNum){
    console.log(firstNum / seconNum);
}

plus(8,60);
divide(98,20);

*/

/*
const player = {
    name:"qudwok",
    sayHello: function(otherName){
        console.log("Hello "+ otherName);
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

*/

/*정리
변수 생성 방법 2가지 
const 는 값을 변경할 수 없음
let 은 값을 변경할 수 있음

var 변수는 절대 사용 금지

항상 const 로 생성하되 가끔은 상황에 따라 let으로도 생성 가능

null 은 변수 안에 아무것도 없다는 것을 확실히 해두는 것 "여기는 비어있다를 뜻함"
undifined 는 값이 없다는 것 null과는 다름
null과 undefined는 비어있다와 값이 없다임

변수 안에 많은 데이터를 저장하고 싶을 때 Array를 사용함
ex) const days = [1,2,false,undefined,"text", me];
const me = "sexy";

원하는 값을 뽑고 싶을 땐 첫번 째는 0번째 부터 시작해서 가져올 수 있음
ex) console.log(days[2]); 하면 결과는 false가 나옴
days[2] = true; 로 바꾸면 그 다음 출력에서는 true로 변경해서 나옴
days.push("블라블라"); 하면 맨 마지막에 추가되서 나옴

obj property 만드는 거
const player{
    name:"Nico",
    age: 98,
};

obj는 추가할 수 있고, const지만 obj라 변경할 수 있다

function plus (a,b){
    console.log(a+b);
}

plus(1(a),2(b));

function의 (변수값은 맘대로 이름 지어도 된다.)
()를 추가하지 않으면 아무것도 실행되지 않음
function이름 (값, 값); 은 function의 a,b에 해당하는 값으로 들어감
단 function 블럭 밖에서는 존재하지 않음 
많은 인수값을 보내도 지정된 변수 갯수 까지만 들어감

계산기 함수 완성해보기
1+1 1-1 a+b a/b a**b

*/

/*

const cal = {
    add:function(a,b){
        return a + b;
    },
    minus:function(a,b){
        return a + b;
    },
    powerof:function(a,b){
        return a * b;
    },divide:function(a,b){
        return a / b;    
    }
};

cal.add(1,2);
cal.minus(1,2);
cal.powerof(1,2);
cal.divide(1,2);

const age = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner+2; // function에서 return 하면 누가 func을 실행할 때 그 값을 넘겨주는 것
    return "hello";
}

const krAge = calculateKrAge(age);
console.log(krAge);

// function은 return 하는 순간 값을 넘겨주고 끝나버림 return 이후에 나오는 코드는 읽지 않음

*/

/*

const age = parseInt(prompt("몇 살이야? ")) // 스캐너 같은 기능 (넘어가기 전까지 javascript 기능이 멈춤)

//parseInt는 문자 처리 불가
console.log(isNaN(age)); //prompt는 엄청 오래된 것 css 적용 불가

if (isNaN(age)){
    console.log("숫자를 입력해오");
}else if (age < 0){
    console.log("음수를 입력했군요 아직 세상에 나오지 않았나요?");
}else if (18 > age){
    console.log("음주 아직 안돼~");
}else if(age >= 18 && age <=50){
    console.log("음주 적정 가능 나이^^");
}else if(age >= 51 && age <=80){
    console.log("운동해야해요");
}else if (age === 100){
    console.log("현명해");      //적는 순서도 중요함 51세 80세 비교문 아래에 0세 비교문이 있으면 0세 비교문은 적용되지 않음
}else{
    console.log("음주 하기엔 너무 늙었온");
}


const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.className);

const title = document.getElementsByTagName("h1");

console.log(title);

*/

const title = document.querySelector("div.hello:first-child h1"); // #hello:first-child

function hangleTitleClick() {
    console.log("title was clicked");
    title.style.color="blue";
}

title.addEventListener("click", hangleTitleClick);








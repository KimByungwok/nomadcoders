
// Add one more day to the array
// 2단계

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

const player = {
    name:"qudwok",
    sayHello: function(otherName){
        console.log("Hello "+ otherName);
    },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");


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

const age1 = 96;
function calculateKrAge(ageOfForeigner){
    ageOfForeigner+2; // function에서 return 하면 누가 func을 실행할 때 그 값을 넘겨주는 것
    return "hello";
}

const krAge = calculateKrAge(age1);
console.log(krAge);

// function은 return 하는 순간 값을 넘겨주고 끝나버림 return 이후에 나오는 코드는 읽지 않음



const age2 = parseInt(prompt("몇 살이야? ")) // 스캐너 같은 기능 (넘어가기 전까지 javascript 기능이 멈춤)

//parseInt는 문자 처리 불가
console.log(isNaN(age2)); //prompt는 엄청 오래된 것 css 적용 불가

if (isNaN(age2)){
    console.log("숫자를 입력해오");
}else if (age2 < 0){
    console.log("음수를 입력했군요 아직 세상에 나오지 않았나요?");
}else if (18 > age2){
    console.log("음주 아직 안돼~");
}else if(age2 >= 18 && age <=50){
    console.log("음주 적정 가능 나이^^");
}else if(age2 >= 51 && age <=80){
    console.log("운동해야해요");
}else if (age2 === 100){
    console.log("현명해");      //적는 순서도 중요함 51세 80세 비교문 아래에 0세 비교문이 있으면 0세 비교문은 적용되지 않음
}else{
    console.log("음주 하기엔 너무 늙었온");
}



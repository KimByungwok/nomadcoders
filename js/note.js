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
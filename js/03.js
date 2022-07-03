// 3단계

/*
const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.className);

const title = document.getElementsByTagName("h1");

console.log(title);
*/


// const h1 = document.querySelector("div.hello:first-child h1"); // #hello:first-child

// console.dir(h1);

// function hangleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }
//     h1.addEventListener("click", hangleTitleClick); // title.onClick = hangleTitleClick ;

// function handleMouseEnter() {
//     h1.innerText = "mouse is here";
// }

// function handleMouseLeave() {
//     h1.innerText = "mouse is gone";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowoffline() {
//     alert("SOS no WIFI!");
// }

// function handleWindowonline() {
//     aler("ALL GOOOOOD");
// }

//이벤트 리스너 만들기

// h1.addEventListener("mouseenter",handleMouseEnter); // title.onMouseEnter = handleMouseEnter;
// h1.addEventListener("mouseleave",handleMouseLeave);

// //.removeEventListener("click", hangleTitleClick); // title.onClick = hangleTitleClick;

// window.addEventListener("resize",handleWindowResize); // 창 크기 조절시 함수 실행
// window.addEventListener("copy", handleWindowCopy); //copy 시 함수 실행
// window.addEventListener("offline", handleWindowoffline); //offline  
// window.addEventListener("online", handleWindowonline); //online

// 이벤트 리스너 다 지워보기


const h1 = document.querySelector("div.hello:first-child h1"); // #hello:first-child
function hangleTitleClick() {
    // const clickedClass = "clicked";

    h1.classList.toggle("clicked"); // 밑에 5줄을 토글 한줄로 끝낼 수 있음

    // if(h1.classList.contains(clickedClass)) { // 클래스 이름을 날리지 않고 변경하는 것
    //     h1.classList.remove(clickedClass);
    // }else {
    //     h1.classList.add(clickedClass);
    // }

}
h1.addEventListener("click", hangleTitleClick);
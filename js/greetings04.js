//const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
// const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); // 브라우저 기본 동작을 막는 것
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username;  // 이거나 밑에거 사용하면 되는데 밑에거가 깔끔함
    //greeting.innerText = `Hello ${username}`;  // ' , " 아니고 백틱 ` 물결임 이거하면 바로 출력가능
    //greeting.classList.remove(HIDDEN_CLASS);
    painGreeting(username);
}
    loginForm.addEventListener('submit', onLoginSubmit);

    const savedUsername = localStorage.getItem(USERNAME_KEY);

    
    if(savedUsername === null){
        // show the form
        loginForm.classList.remove(HIDDEN_CLASS);
        loginForm.addEventListener("submit",onLoginSubmit);
    }else{
        //show the greeting
        //greeting.innerText = `Hello ${savedUsername}`;
        //greeting.classList.remove(HIDDEN_CLASS);
        painGreeting(savedUsername);
    }


    // console.log(username);

    // const username = loginInput.value;
    // if(username === ""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("your name is toooooo long");
    // }

    // console.log("hello", loginInput.value);
    // console.log("click");

function painGreeting(username){
    greeting.innerText = `Hello ${savedUsername}`;
    greeting.classList.remove(HIDDEN_CLASS);
}

function handleLinkClick(event) {
    event.preventDefault(); // 브라우저 기본 동작을 막는 것
    const username = loginInput.value;
    
    loginForm.classList.add("hidden");
    console.log(username);
    // console.log(loginInput.value);

    // alert("click"); // JS 가 동작을 멈춤
}

loginForm.addEventListener("submit", onLoginSubmit);
//link.addEventListener("click", handleLinkClick);



// loginButton.addEventListener("click",onLoginBtnClick);

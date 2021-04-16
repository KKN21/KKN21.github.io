var firebaseConfig = {
    apiKey: "AIzaSyCj25W2LbKcIP3XsmwxOCtAfZPuHmJ0WG4",
    authDomain: "todo-aest.firebaseapp.com",
    projectId: "todo-aest",
    storageBucket: "todo-aest.appspot.com",
    messagingSenderId: "979637829752",
    appId: "1:979637829752:web:cbab6de7db85b7809ead8d",
    measurementId: "G-02LCK35KP5"
  };

var inputEmail = document.getElementById("input-email");
var inputPassword = document.getElementById("input-password");
var sidebarHTML = document.getElementById("sidebar");
var channelsHTML = document.getElementById("channels");
var chatHeader = document.getElementById("chat-header");
var chatTitle = document.getElementById("chat-header-title");
var screenAuthentication = document.getElementById("screen-authentication");
var buttonLogin = document.getElementById("button-login");
var buttonSignup = document.getElementById("button-signup");
var buttonShowSignup = document.getElementById("button-show-signup");
var buttonShowLogin = document.getElementById("button-show-login");
var buttonLogout = document.getElementById("button-logout");
var chatHTML = document.getElementById("screen-chat");
var messagesHTML = document.getElementById("chat-messages");
var messageInput = document.getElementById("message-input");
var feedbackHTML = document.getElementById("feedback");
var checkboxes = document.getElementsByName("checker");


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database = firebase.firestore();
var currentChannelId = "ApbX3evKi1bRq65KMiMH";
var currentChannelMessagesData = [];
var checkboxArray = [];



function logout() {
  firebase.auth().signOut()
    .then(function () {
      feedbackHTML.innerHTML = "Logged out succesfully!";
      buttonLogout.style.display = "none";
      inputEmail.value = "";
      inputPassword.value = "";
    })
    .catch(function (error) {
      feedbackHTML.innerHTML = error.message;
    });
}

function resetFeedback() {
  feedbackHTML.classList.remove("feedback-error");
  feedbackHTML.innerHTML = "";
}

function closeAuth() {
  screenAuthentication.style.display = "none";
  slider.style.display = "block";
  main.style.display = "block";
}

function showAuth() {
  screenAuthentication.style.display = "block";
  slider.style.display = "none";
  main.style.display = "none";
}

function showSignup() {
  buttonLogin.style.display = "none";
  buttonShowSignup.style.display = "none";
  buttonSignup.style.display = "inline";
  buttonShowLogin.style.display = "inline";
 
}

function showLogin() {
  buttonSignup.style.display = "none";
  buttonShowLogin.style.display = "none";
  buttonLogin.style.display = "inline";
  buttonShowSignup.style.display = "inline";
  
}

function makeLoginLogout() {
  bIn.style.display = "none";
  bOut.style.display = "inline";
}

function makeLogoutLogin() {
  bIn.style.display = "inline";
  bOut.style.display = "none";
 
}











function signup() {
  resetFeedback();
  var email = inputEmail.value;
  var password = inputPassword.value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      closeAuth();
      makeLoginLogout();
      logsuccess();
    })
    .catch((error) => {
      feedbackHTML.innerHTML = error.message;
      feedbackHTML.classList.add("feedback-error");
    });
}

function login() {
  resetFeedback();
  var email = inputEmail.value;
  var password = inputPassword.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      closeAuth();
      makeLoginLogout();
      logsuccess();
    })
    .catch((error) => {
      feedbackHTML.innerHTML = error.message;
      feedbackHTML.classList.add("feedback-error");
    });
}






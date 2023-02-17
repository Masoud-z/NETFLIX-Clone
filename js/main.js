//---------------Change language button---------------

const body = document.getElementById("body");
const langBtn = document.getElementById("langBtn");
const langBtnTitle = document.getElementById("langBtnTitle");
const langList = document.getElementById("langList");
const eng = document.getElementById("eng");
const esp = document.getElementById("esp");

body.addEventListener("wheel", function () {
  langList.classList.add("hide-list");
});

body.addEventListener("click", function () {
    langList.classList.add("hide-list");
});

langBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  langList.classList.toggle("hide-list");
});

eng.addEventListener("click", function (e) {
  e.stopPropagation();
  langBtnTitle.innerHTML = "English";
  langList.classList.add("hide-list");
});

esp.addEventListener("click", function (e) {
  e.stopPropagation();
  langBtnTitle.innerHTML = "Español";
  langList.classList.add("hide-list");
});

//---------------++++---------------

//---------------Change input text position on focus---------------

const inputText = document.getElementById("inputText");
const emailInput = document.getElementById("emailInput");

emailInput.addEventListener("focus", function () {
  inputText.classList.add("move-text");
});

emailInput.addEventListener("blur", function () {
  inputText.classList.remove("move-text");
});

//---------------++++---------------

//---------------Change FadnQ input text position on focus---------------

const FQinputText = document.getElementById("FQinputText");
const FQemailInput = document.getElementById("FQemailInput");

FQemailInput.addEventListener("focus", function () {
  FQinputText.classList.add("move-text");
});

FQemailInput.addEventListener("blur", function () {
  FQinputText.classList.remove("move-text");
});

//---------------++++---------------


//---------------Questions---------------

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", function (e) {
    console.log("click");
    console.log(question.parentElement.classList);
    e.stopPropagation();
    questions.forEach((question) => {
      if (question.id != e.currentTarget.id) {
        question.parentElement.classList.remove("showAnswer");
      }
    });
    const targetQuestion = e.currentTarget.parentElement;
    targetQuestion.classList.toggle("showAnswer");
  });
});

//---------------++++---------------



//---------------Change footer language button---------------

const flangBtn = document.getElementById("flangBtn");
const flangBtnTitle = document.getElementById("flangBtnTitle");
const flangList = document.getElementById("flangList");
const feng = document.getElementById("feng");
const fesp = document.getElementById("fesp");

body.addEventListener("wheel", function () {
  flangList.classList.add("hide-list");
});

body.addEventListener("click", function () {
    flangList.classList.add("hide-list");
});

flangBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  e.preventDefault();
  flangList.classList.toggle("hide-list");
});

feng.addEventListener("click", function (e) {
  e.stopPropagation();
  flangBtnTitle.innerHTML = "English";
  flangList.classList.add("hide-list");
});

fesp.addEventListener("click", function (e) {
  e.stopPropagation();
  flangBtnTitle.innerHTML = "Español";
  flangList.classList.add("hide-list");
});

//---------------++++---------------

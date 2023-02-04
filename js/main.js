const body = document.getElementById("body");
const langBtn = document.getElementById("langBtn");
const langBtnTitle = document.getElementById("langBtnTitle");
const langList = document.getElementById("langList");
const eng = document.getElementById("eng");
const esp = document.getElementById("esp");
const inputText = document.getElementById("inputText");
const emailInput = document.getElementById("emailInput");

body.addEventListener("wheel", function (e) {
  langList.classList.add("hide-list");
});

body.addEventListener("click", function (e) {
  if (
    e.target.id != "langBtn" &&
    e.target.id != "langBtnTitle" &&
    e.target.id != "langList" &&
    e.target.id != "eng" &&
    e.target.id != "esp"
  ) {
    langList.classList.add("hide-list");
  }
});

langBtn.addEventListener("click", function () {
  langList.classList.toggle("hide-list");
});

eng.addEventListener("click", function () {
  langBtnTitle.innerHTML = "English";
  langList.classList.add("hide-list");
});

esp.addEventListener("click", function () {
  langBtnTitle.innerHTML = "Español";
  langList.classList.add("hide-list");
});

emailInput.addEventListener("focus", function(){
  inputText.classList.add("move-text")
})

emailInput.addEventListener("blur", function(){
  inputText.classList.remove("move-text")
})
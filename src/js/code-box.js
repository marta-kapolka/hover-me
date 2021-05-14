const codeBox = document.querySelector(".code-box--js");
const codeBoxName = document.querySelector(".code-header--name");
const codeBoxHtml = document.querySelector(".code-html--js");
const codeBoxScss = document.querySelector(".code-scss--js");
const codeBoxClose = document.querySelector(".code-box-close-button--js");

const openCodeBox = (e) => {
  codeBox.classList.remove("hidden");
  codeBoxName.innerHTML = e.target.getAttribute("data-name");
  codeBoxHtml.innerHTML = e.target.getAttribute("data-html-code");
  codeBoxScss.innerHTML = e.target.getAttribute("data-scss-code");
  codeBoxClose.addEventListener("click", closeCodeBox);
};

const closeCodeBox = () => {
  codeBox.classList.add("hidden");
  codeBoxClose.removeEventListener("click", closeCodeBox);
};

document
  .querySelectorAll(".button--code")
  .forEach((button) => button.addEventListener("click", openCodeBox));

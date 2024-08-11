const searchBtnElem = document.querySelector("button");
const searchInputElem = document.querySelector("input");
const paragraphElem = document.querySelector("#paragraph");

const search = () => {
  let searchInputValue = searchInputElem.value;
  let searhRegex = new RegExp(`${searchInputValue}`, "gi");

  paragraphElem.innerHTML = paragraphElem.textContent.replace(
    searhRegex,
    (item) => `<mark>${item}</mark>`
  );
};

searchBtnElem.addEventListener("click", search);

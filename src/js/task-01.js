
const navEl = document.querySelectorAll(".item")
console.log(`В списке ${navEl.length} категории.`);
const a = navEl.forEach(element => {
    console.log("Категория: ",element.firstElementChild.textContent);
    console.log("Количество елементов:",element.lastElementChild.children.length);
})


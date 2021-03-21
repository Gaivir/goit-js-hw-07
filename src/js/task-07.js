// Test1 



// const elements = document.querySelectorAll(".item")
// console.log(`В списке ${elements.length} категории.`);
// const a = elements.forEach(element => {
//     console.log("Категория: ",element.firstElementChild.textContent);
//     console.log("Количество елементов:",element.lastElementChild.children.length);
// })



// Test 2

// const ingredients = [
//   'Картошка',
//   'Грибы',
//   'Чеснок',
//   'Помидоры',
//   'Зелень',
//   'Приправы',
// ];




// const allElements = ingredients.map(ingredient => {

//     const newElement = document.createElement("li");
//     newElement.textContent = ingredient;
//     return newElement;
    
// })


// const ingredientsRef = document.querySelector("#ingredients")

//    ingredientsRef.append(...allElements);


// // Test 3

// const images = [
//   {
//     url:
//       'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url:
//       'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];





// const funcGallery = images.map(({ url, alt }) => {
    
//     const newElementImg = document.createElement("img");
//     newElementImg.src = url;
//     newElementImg.alt = alt;
//     newElementImg.classList.add("img");
    

//     const newElementLi = document.createElement("li");
//     newElementLi.classList.add("img-block");
//     // newElementLi.insertAdjacentHTML('afterbegin', newElementImg)
//     newElementLi.appendChild(newElementImg);
//     return newElementLi;

// })

// const imgRef = document.querySelector("#gallery");


// imgRef.append(...funcGallery);



// Test 4

// const counterValue = document.querySelector("#value");

// const incrementBtn = document.querySelector("[data-action='increment']");
// const decrementBtn = document.querySelector("[data-action='decrement']");



// incrementBtn.addEventListener('click', increment);

// function increment(event) {
// counterValue.textContent ++;
// }

// decrementBtn.addEventListener('click', decrement);

// function decrement(event) {
//     counterValue.textContent --;
// }



// Test 5
// const ref = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// }


// ref.input.addEventListener('input', onInputChange);

// function onInputChange(event) { 
//     return ref.output.textContent = event.currentTarget.value;
// }




// const ref = {
//     input: document.querySelector('#name-input'),
//     output: document.querySelector('#name-output'),
// }


// ref.input.addEventListener('input', onInputChange);

// function onInputChange(event) { 
//     if (event.currentTarget.value === "")
//     { 
//         ref.output.textContent = "Незнакомец";
//     }
//     return ref.output.textContent = event.currentTarget.value;
// }



// Test 6 

// const a = document.querySelector('#validation-input');
// a.classList.add('#validation-input');

// const c = (Number(a.dataset.length));


// a.addEventListener('blur', onInputChange);


// function onInputChange(event) {
//     const b = event.currentTarget.value.length;
//     console.log(b);

//     b === c ? 
//     a.classList.add('.valid') : a.classList.add('.invalid');
    
// }



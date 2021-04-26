const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
 const inputLength = Number(inputEl.dataset.length);


function onInputBlur(event) {
    const inputBlurLength = event.currentTarget.value.length;
    console.log(inputBlurLength);
    
    if (inputBlurLength > inputLength) {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid')
    }
    
}


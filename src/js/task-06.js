const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
 const inputLength = Number(inputEl.dataset.length);


function onInputBlur(event) {
    const inputBlurLength = event.currentTarget.value.length;
    console.log(inputBlurLength);
    
    if (inputBlurLength === 0) {
        inputEl.classList.remove('invalid', 'valid');
    }
    else if (inputBlurLength === inputLength) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else  {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid')
    }
    
}


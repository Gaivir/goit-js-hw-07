const ref = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}


ref.input.addEventListener('input', onInputChange);


function onInputChange(event) { 
    if (event.currentTarget.value === "")
    { 
        ref.output.textContent = "Незнакомец";
    }
    else {
      ref.output.textContent = event.currentTarget.value;
    }
    
}

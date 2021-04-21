const ref = {
inputEl: document.querySelector('#font-size-control'),
spanEl: document.querySelector('#text'),
}

ref.inputEl.addEventListener('click', onChangSliderLocation);

function onChangSliderLocation() {
 ref.spanEl.style.fontSize=ref.inputEl.value+'px';
      
}

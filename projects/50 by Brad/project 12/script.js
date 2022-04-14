let switcher = document.querySelectorAll('.switch');

switcher.forEach(switchbtn => {
    switchbtn.addEventListener('click',()=>{
      switchbtn.textContent == 'open' ? (switchbtn.textContent = 'close'):(switchbtn.textContent = 'open')
      switchbtn.parentElement.parentElement.classList.toggle('active')
    })
});

let split1 = document.querySelector('.split1')
let split2 = document.querySelector('.split2')
split1.addEventListener('mouseover',()=>{
   split1.classList.add('mouseover')
   split2.classList.remove('mouseover')
})
split2.addEventListener('mouseover',()=>{
    split2.classList.add('mouseover')
    split1.classList.remove('mouseover')
 })
const emptys = document.querySelectorAll('.empty')
const fill = document.querySelector('.fill')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

emptys.forEach(empty=>{
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('drop',dragDrop)
})
 
function dragStart(){
   this.classList.add('hold')
   setTimeout(()=>{
       this.className = 'invisible'
   },0)
}
function dragEnd(){
    fill.classList.remove('hold')
    this.className = 'fill'

}
function dragOver(e){
    e.preventDefault()
    this.classList.add('hoveraround')
}
function dragEnter(e){
    e.preventDefault()
    console.log('drag enter')
}
function dragLeave(){
    this.classList.remove('hoveraround')
}
function dragDrop(){
    this.className = 'empty'
    this.append(fill)
}
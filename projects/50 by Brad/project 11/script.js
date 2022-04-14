let container = document.querySelector('.container')
window.addEventListener('keypress', (e) => {
    container.innerHTML = `<div class="key">
    <small>Event Key</small>
    ${e.key ? e.key : 'space'}
</div>
<div class="key">
    <small>Event KeyCode</small>
    ${e.key ? e.keyCode : 'space'}

</div>
<div class="key">
    <small>Event Code</small>
    ${e.key ? e.code : 'space'}

</div>`
})


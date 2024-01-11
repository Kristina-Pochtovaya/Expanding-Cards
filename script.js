const panels = document.querySelectorAll('.panel');

const removeActiveClass = () => panels.forEach(item => item.classList.remove('active'));

panels.forEach(item => {
    item.addEventListener('click', () => {
        removeActiveClass();
        item.classList.add('active');
    })
})


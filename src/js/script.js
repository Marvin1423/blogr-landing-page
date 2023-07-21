const dropMenuButtons = document.querySelectorAll('.menu__item-btn')
const hamburguerMenuButton = document.getElementById('menu-mobile')
const hamburguerMenu = document.getElementById('menu-hamburguer-content')

hamburguerMenuButton.addEventListener('click', () =>{
    hamburguerMenu.classList.toggle('menu-mobile-on')
})

dropMenuButtons.forEach((dropButton) => {
    const menuItems = dropButton.parentNode.querySelector('.menu__sub-items')

    dropButton.addEventListener('click', () => {
        if(!menuItems.classList.contains('active')){
            removeButtonEffect()
            closeAllMenus()
            menuItems.classList.add('active')
            dropButton.classList.add('clicked')
        }else{
            menuItems.classList.remove('active')
            dropButton.classList.remove('clicked')
        }
    })
})

function removeButtonEffect(){
    dropMenuButtons.forEach((button) => {
        button.classList.remove('clicked')
    })
}

function closeAllMenus() {
    const menuItems = document.querySelectorAll('.menu__sub-items')

    menuItems.forEach((menu) => {
        menu.classList.remove('active')
    })
}
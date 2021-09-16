export const Menu = () => {
  const showMenu = () => {
    document.querySelector('.drop-menu_content').classList.toggle('drop-menu_show')
  }

window.onClick = function (event) {

    console.log(event)
    if (!event.target.matches('.drop-menu_btn')) {

      const menuContent = document.querySelector('.drop-menu_content')

      if (menuContent.classList.contains('drop-menu_show')) menuContent.classList.remove('drop-menu_show')
    }
  }

const BUTTON = document.querySelector('.drop-menu_btn')

BUTTON.addEventListener('click', showMenu)
}
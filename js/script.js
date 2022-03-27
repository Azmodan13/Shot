// не забудьте подключить скрипт в html перед закрытием body 
//         <script src="js/script.js"></script>
window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'), // меняем на ваше название класса
    menuItem = document.querySelectorAll('.menu_item'),
    burger = document.querySelector('.burger'); 

    burger.addEventListener('click', () => { //указываем при нажатии на что будет происходить событие
        burger.classList.toggle('burger_active'); // посли нажития происходит анимация бургера (в крестик)
        menu.classList.toggle('menu_active'); // добавляеться клас актив к меню
    });
})
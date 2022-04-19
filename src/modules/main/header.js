const headerBlock = document.querySelector('.header');

function checkHeight() {
    if (window.scrollY > 0) {
        headerBlock.classList.add('header--scroll')
    } else {
        headerBlock.classList.remove('header--scroll');
    }
}

checkHeight();
window.addEventListener('scroll', checkHeight); 

// burger menu

const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.menu');
const locationBlock = document.querySelector('.header--mobile .header__location');
const linksBlock = document.querySelector('.header--mobile .header__links');
const bodyBlock = document.querySelector('body');

burger.addEventListener('click', function() {
    burger.classList.toggle('header__burger--active');
    burgerMenu.classList.toggle('menu--active');
    locationBlock.classList.toggle('header__location--hidden');
    linksBlock.classList.toggle('header__links--hidden');
    bodyBlock.classList.toggle('body--lock');
})

// menu list

const menuList = document.querySelectorAll('.header__navigation-list');

if (menuList !== null) {
    menuList.forEach(item => {
        item.addEventListener('mouseenter', function() {
            resetAllMenuLists();
            showMenuList(item);
        })

        item.addEventListener('mouseleave', resetAllMenuLists);
    })

    function showMenuList(block) {
        let list = block.querySelector('.header__sublist');
        let icon = block.querySelector('.header__toggle-block');
        list.classList.add('header__sublist--active');
        icon.classList.add('header__toggle-block--active');
    }

    function resetAllMenuLists() {
        menuList.forEach(item => {
            let list = item.querySelector('.header__sublist');
            let icon = item.querySelector('.header__toggle-block');
            list.classList.remove('header__sublist--active');
            icon.classList.remove('header__toggle-block--active');
        })
    }
}

// change theme when no certian block

const themeBlock = document.querySelector('.main__line');

if (themeBlock !== null) {
    headerBlock.classList.add('header--dark');
    document.querySelector('.header__logo').classList.add('header__logo--hidden');
    document.querySelector('.header__logo--alt').classList.add('header__logo--show');
    document.querySelectorAll('.select__toggle').forEach(element => {
        element.classList.add('select__toggle--dark');
    })
}
// customSelect('#mySelect');
const select1 = new CustomSelect('#select-1');
const select2 = new CustomSelect('#select-2');


const activeSelects = document.querySelectorAll('.header .header__location-active , .header--mobile .header__location-active');
const menuCity = document.querySelector('.menu .header__location-active');

// activeSelects.forEach(element => {
//     element.addEventListener('DOMSubtreeModified', function() {
//         const activeCity = select2.value;
//         menuCity.innerHTML = activeCity;
//     })
// })

document.querySelector('#select-2').addEventListener('select.change', (e) => {
    const selected = e.target.querySelector('.select__option_selected');
    const text = selected ? selected.textContent : '';
    menuCity.innerHTML = text;
    console.log(`Выбранный текст опции: ${text}`);
});

const contactsSelect = document.querySelector('#select-3');

if (contactsSelect !== null) {
    const select3 = new CustomSelect('#select-3');
    contactsSelect.addEventListener('select.change', (e) => {
        const btn = e.target.querySelector('.select__toggle');
        const selectedValue = btn.value;
        select1.value = selectedValue;
        select2.value = selectedValue;
    })
}

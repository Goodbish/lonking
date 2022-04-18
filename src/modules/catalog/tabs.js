const catalogTabs = document.querySelectorAll('.preview-catalog__tab');

if (catalogTabs !== null) {
    catalogTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            clearTabs();
            tab.classList.add('preview-catalog__tab--active');
            let tabId = tab.getAttribute('data-tab');
            let activeSlider = document.querySelector(`.preview-catalog__swiper#tab${tabId}`);
            activeSlider.classList.add('preview-catalog__swiper--active');
        })
    })
    
    function clearTabs() {
        catalogTabs.forEach(element => {
            element.classList.remove('preview-catalog__tab--active');
        })
    
        // tabSliders in src\modules\catalog\slider.js
        tabSliders.forEach(slider => {
            slider.classList.remove('preview-catalog__swiper--active');
        })
    }
}

const productTabs = document.querySelectorAll('.product__tab');
const productsInfoLists = document.querySelectorAll('.product__info-list');

if (productTabs !== null) {
    productTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            clearTabs();
            tab.classList.add('product__tab--active');
            let tabId = tab.getAttribute('data-tab');
            let activeTab = document.querySelector(`.product__info-list#tab${tabId}`);
            activeTab.classList.add('product__info-list--active');
        })
    })
    
    function clearTabs() {
        productTabs.forEach(element => {
            element.classList.remove('product__tab--active');
        })

        productsInfoLists.forEach(element => {
            element.classList.remove('product__info-list--active');
        })
    }
}
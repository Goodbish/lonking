(function () {
    const url = '/local/ajax/get-pictures.php';
    const gallerySelectors = {
        container: '.videos-container',
        items: '.videos-item',
        button: '.videos-button',
        itemWrapper: 'videos-item',
        itemLink: 'videos-img',
        itemHover: 'img-hover',
    };
    const gallery = {
        container: document.querySelector(gallerySelectors.container),
        items: document.querySelectorAll(gallerySelectors.items),
        button: document.querySelector(gallerySelectors.button),
    };
    const count = 5;
    let valueDivision;
    let dataPage = 1;

    if (!gallery.container || !gallery.items.length) return;

    const addClassItems = function (valueDivision, classElement) {
        for (let i = 0; i < valueDivision; i++) {
            let element = gallery.container.children[gallery.container.children.length - (i + 1)];

            element.classList.add(classElement);

            if (valueDivision === 2 && i === 1) {
                element.classList.add(classElement + '--big');
            }

            if (window.screen.width > 992) {
                if (valueDivision === 3 && i === 1) {
                    element.classList.add(classElement + '--big');
                }
            } else {
                if (valueDivision === 3 && i === 0) {
                    element.classList.add(classElement + '--big--two');
                } else if (valueDivision === 3 && i === 2) {
                    element.classList.add(classElement + '--big--one');
                }
            }

            if (valueDivision === 4 && (i === 0 || i === 3)) {
                element.classList.add(classElement + '--big');
            }
        }
    };

    const changeGridGallery = function (valueDivision) {
        if (window.screen.width > 992) {
            valueDivision = gallery.container.children.length % count;
        } else if (window.screen.width > 768) {
            valueDivision = gallery.container.children.length % 4;
        } else if (window.screen.width > 576) {
            valueDivision = gallery.container.children.length % 2;
        } else {
            valueDivision = gallery.container.children.length % 1;
        }

        for(let i = 0; i < gallery.container.children.length; i++) {
            gallery.container.children[i].className = '';
            gallery.container.children[i].classList.add(gallerySelectors.items.replace('.', ''));
        }

        switch (valueDivision) {
            case 1:
                addClassItems(valueDivision, 'one-item');
                break;
            case 2:
                addClassItems(valueDivision, 'two-item');
                break;
            case 3:
                addClassItems(valueDivision, 'three-item');
                break;
            case 4:
                addClassItems(valueDivision, 'four-item');
                break;
        }
    };

    const createElement = function (el, classes = '', attributes) {
        const element = document.createElement(el);

        if (classes && classes.length) {
            element.classList.add(...classes);
        }

        if (attributes) {
            for (let key in attributes) {
                element.setAttribute(key, attributes[`${key}`]);
            }
        }

        return element;
    };

    const createImageItem = function (src, alt, title) {
        const wrapper = createElement('div', [gallerySelectors.itemWrapper]);
        const a = createElement('a', [gallerySelectors.itemLink], {
            'data-fancybox': 'gallery',
            href: src,
        });
        const img = createElement('img', '', {
            src: src,
            alt: alt,
            title: title,
        });
        const div = createElement('div', [gallerySelectors.itemHover]);
        const svg = `
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            width="25px" height="25px" viewBox="0 0 30.239 30.239" >
                <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735
                c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0
                c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z
                M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0
                C21.517,9.026,21.517,14.63,18.073,18.074z" fill="#ffffff"/>
            </svg>
        `;

        div.insertAdjacentHTML('afterbegin', svg);
        a.append(img);
        a.append(div);
        wrapper.append(a);

        return wrapper;
    };

    const ajaxLoadGallery = function () {
        const data = new FormData();

        data.append('SECTION_CODE', this.parentElement.id);
        data.append('PAGE', dataPage);

        $.ajax({
            method: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            async: false,
            url: url,
            data: data,
            success: function (res) {
                console.log(res);

                if (res.success) {
                    res.DATA.forEach(function (el) {
                        const item = createImageItem(el.SRC, el.ALT, el.TITLE);

                        gallery.container.append(item);
                    });

                    changeGridGallery(valueDivision);
                }

                if (!res.SHOW_BUTTON) gallery.button.style.display = 'none';

                dataPage++;
            },
            error: function (error) {
                console.log(error);
            },
        });
    };

    if (gallery.items.length < count) {
        switch (gallery.items.length) {
            case 1:
                gallery.container.classList.remove('five-items');
                break;
            case 2:
                gallery.container.classList.remove('five-items');
                gallery.container.classList.add('two-items');
                break;
            case 3:
                gallery.container.classList.remove('five-items');
                gallery.container.classList.add('three-items');
                break;
            case 4:
                gallery.container.classList.remove('five-items');
                gallery.container.classList.add('four-items');
                break;
        }
    } else {
        changeGridGallery(valueDivision);

        gallery.button.style.display = 'flex';
    }

    window.addEventListener('resize', changeGridGallery);
    gallery.button.addEventListener('click', ajaxLoadGallery);
})();

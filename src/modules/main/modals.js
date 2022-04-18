const elementsToShift = [
document.querySelector('.main'),
document.querySelector('.header'),
document.querySelector('.footer'),
document.querySelector('.modal')];

function modal() {
    // loop through all modal togglers
    document.querySelectorAll('.modal_show').forEach((elem) => {
        // add event handler for click
        elem.addEventListener('click', () => {
            // show the modal
            const modalBlock = document.querySelector(`#${elem.getAttribute('data-target')}`);
            // modalBlock.css('display', 'flex');
            modalBlock.style.display = 'flex'

            setTimeout(function () {
                modalBlock.classList.add('show');
                smoothPopupShow();
            }, 20);
        });
    });

    // attach various close handlers
    document.querySelectorAll('*[data-go-back]').forEach(attachCloseHandler);

    function removeModalClasses() {
        const activeModal = document.querySelector('.modal.show');
        elementsToShift.forEach(element => {
            // element.css('padding-right', `0px`);
            element.style.paddingRight = `0px`;
        });

        // if statement on case when mobile menu is open
        // if (!document.querySelector('.modal').hasClass('show')) {
        //     document.querySelector('body').classList.remove('hidden');
        // }

        
        activeModal.classList.remove('show');
        setTimeout(() => {
            // activeModal.css('display', 'none');
            activeModal.style.display = 'none';
        }, 400);

        document.querySelector('body').classList.remove('body--lock');

    }

    // modal hide handler
    function attachCloseHandler(e) {
        e.addEventListener('click', removeModalClasses);
    }

    // That hides modal when clicked outside of modal block
    document.addEventListener('click', checkOutside);

    function checkOutside() {
        document.querySelector('.modal').addEventListener('click', function (e) {
            if (e.target == this) {
                removeModalClasses();
            }
        });
    }
}

function smoothPopupShow() {
    const scrollWidth = getScrollWidth();
    elementsToShift.forEach(element => {
        // element.css('padding-right', `${scrollWidth}px`);
        element.style.paddingRight = `${scrollWidth}px`;
    }); 

    document.querySelector('body').classList.add('body--lock');
}

function getScrollWidth() {
    const inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '200px';

    const outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '200px';
    outer.style.height = '150px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);
    let w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    let w2 = inner.offsetWidth;

    if (w1 == w2) {
        w2 = outer.clientWidth;
    }

    document.body.removeChild(outer);

    return w1 - w2;
}

modal();
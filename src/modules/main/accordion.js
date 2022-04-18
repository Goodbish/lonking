const accordions = document.querySelectorAll('.toggle');

if (accordions !== null) {
    accordions.forEach(block => {
        const header = block.querySelector('.toggle__header');
        const content = block.querySelector('.toggle__content');
        const headerIcon = header.querySelector('.toggle__header-icon');

        header.addEventListener('click', function() {
            content.classList.toggle('toggle__content--active');
            header.classList.toggle('toggle__header--active');

            if (headerIcon !== null) {
                headerIcon.classList.toggle('toggle__header-icon--active');
            }
        })
    });
}
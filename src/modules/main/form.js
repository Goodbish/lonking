const checkboxBlocks = document.querySelectorAll('.contacts__checkbox-block');

if (checkboxBlocks !== null) {
    checkboxBlocks.forEach(block => {
        const checkboxInput = block.querySelector('input[type="checkbox"]');
        block.addEventListener('click', function(event) {
            event.preventDefault();
            block.classList.toggle('contacts__checkbox-block--active');
            checkboxInput.checked = !checkboxInput.checked; 
        })
    })
}
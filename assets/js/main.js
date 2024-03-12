
const spans = document.querySelectorAll('#logo span');
const changeTextButton = document.querySelector('#changeTextButton');

changeTextButton.addEventListener('click', function() {
    const newTexts = ['O', 'd', 'd', 'i', 't', 'y'];

    spans.forEach((span, index) => {
        span.textContent = newTexts[index];
    });
});
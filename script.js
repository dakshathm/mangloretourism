document.addEventListener('DOMContentLoaded', () => {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    const readLessButtons = document.querySelectorAll('.read-less-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const templeSection = button.closest('.temple');
            templeSection.classList.add('expanded');
        });
    });

    readLessButtons.forEach(button => {
        button.addEventListener('click', () => {
            const templeSection = button.closest('.temple');
            templeSection.classList.remove('expanded');
        });
    });
});

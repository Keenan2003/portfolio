document.addEventListener('DOMContentLoaded', () => {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const dropdown = button.parentElement;
            dropdown.classList.toggle('active');
        });
    });
});

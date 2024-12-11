
let toggle_bar = document.getElementById('toggle_bar');
let side_menu =  document.querySelector('.navbar__items')


toggle_bar.addEventListener('click', () =>{
    side_menu.classList.toggle('hide_menu')

    side_menu.style.width = '0px'
})

// java script for the FAQ section
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        faqItem.classList.toggle('active');
    });
});


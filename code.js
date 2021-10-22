const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
});

const $form = document.querySelector('#form');
const $button = document.querySelector('#mail');

$form.addEventListener('submit' , handleSubmit)

function handleSubmit(evet) {
    evet.preventDefault();
    const form = new FormData(this);
    $button.setAttribute('href', `mailto:rodriguezlautarogonzalo@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`);
    $button.click();
}

export function formVisible() {
    const formButton = document.querySelectorAll('.form__button');
    const formItem = document.querySelector('.form');
    const formShadow = document.querySelector('.form__shadow');
    const bodyClass = document.querySelector('.body');
    const burgerItem = document.querySelector('.burger');
    formButton.forEach(btn => {
        btn.addEventListener('click', () => {
            formItem.style.zIndex = '17';
            formItem.classList.add('form__active');
            formItem.style.pointerEvents = 'auto';
            bodyClass.style.overflow = 'hidden'
            formShadow.style.display = 'block';
            burgerItem.style.pointerEvents = 'none';
        })
    }
    )

}
export function formAnvisible(){
    const formButton = document.querySelector('.form__cancel');
    const formItem = document.querySelector('.form');
    const formShadow = document.querySelector('.form__shadow');
    const bodyClass = document.querySelector('.body');
    const burgerItem = document.querySelector('.burger');
        formButton.addEventListener('click', () => {
            bodyClass.style.overflow = 'auto'
            formItem.style.zIndex = '-1';
            formItem.classList.remove('form__active');
            formItem.style.pointerEvents = 'none';
            formShadow.style.display = 'none';
            burgerItem.style.pointerEvents = 'auto';
        })
}
export function closeForm(){
    const formSubmit = document.querySelector(".form__submit");
    const formName = document.querySelector("form__name");
    const formPhone = document.querySelector("form__tel");
    const formMessage = document.querySelector("form__text");
    formSubmit.addEventListener('submit',()=>{
        console.log
        formAnvisible();
        formName.textContent == "";
        formPhone.textContent = "";
        formMessage.textContent = "";
    })
}

export function sendingForm(){
    (function(){
        emailjs.init("BJiCliBmgnFHOXcXq");  // Replace with your EmailJS user ID
    })();

    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        emailjs.sendForm('service_3i86326', 'template_c1i0j2b', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email: ' + JSON.stringify(error));
            });

    });
}

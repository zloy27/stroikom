export function formVisible() {
    const formButton = document.querySelectorAll('.form__button');
    const formItem = document.querySelector('.form');
    const formShadow = document.querySelector('.form__shadow');
    const bodyClass = document.querySelector('.body');
    const burgerItem = document.querySelector('.burger');
    formButton.forEach(btn => {
        btn.addEventListener('click', () => {
            formItem.style.zIndex = '17';
            formItem.style.left = '35vw';
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
            formItem.style.left = '-150vw';
            formItem.style.pointerEvents = 'none';
            formShadow.style.display = 'none';
            burgerItem.style.pointerEvents = 'auto';
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
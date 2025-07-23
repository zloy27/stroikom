export function formVisible() {
    const formButton = document.querySelectorAll('.form__button')
    const formItem = document.querySelector('.form');
    const burgerShadow = document.querySelector('.burger_shadow')
    const bodyClass = document.querySelector('.body')

    formButton.forEach(btn => {
        btn.addEventListener('click', () => {
            formItem.style.zIndex = '13';
            formItem.style.left = '35vw';
            formItem.style.pointerEvents = 'auto';
            bodyClass.style.overflow = 'hidden'
            burgerShadow.style.display = 'block';
            burgerShadow.style.zIndex = '12';
            burgerClass.style.pointerEvents = 'all';
        })
    }
    )

}
export function formAnvisible(){
    const formButton = document.querySelector('.form__cancel')
    const formItem = document.querySelector('.form');
    const burgerShadow = document.querySelector('.burger_shadow')
    const bodyClass = document.querySelector('.body')
        formButton.addEventListener('click', () => {
            bodyClass.style.overflow = 'auto'
            formItem.style.zIndex = '-1';
            formItem.style.left = '-150vw';
            formItem.style.pointerEvents = 'none';
            burgerShadow.style.display = 'none';
            burgerClass.style.pointerEvents = 'auto';
            burgerShadow.style.zIndex = '10';
        })

}
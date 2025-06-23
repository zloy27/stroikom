
// появления/удаление хедера
export const headerActiveded = () => {
    var mainPageHeight = document.querySelector('.main-page');
    var header = document.querySelector('.header-main');
    var windowHeight = window.pageYOffset

    window.addEventListener('scroll', function () {
        if (pageYOffset > mainPageHeight.clientHeight) {
            header.style.animation = 'headerVisible 0.5s forwards';
            header.style.display = 'flex';
        }
        else if (pageYOffset < mainPageHeight.clientHeight) {
            header.style.animation = 'headerDontVisible 0.5s forwards';
            header.style.position = 'fixed'
        }
    }
    )
};

//открытие бургера
export const burgerOpened = () => {
    var burgerButton = document.querySelector('.header-main_burger')
    var burgerClass = document.querySelector('.burger')
    var burgerShadow = document.querySelector('.burger_shadow')
    var bodyClass = document.querySelector('.body')


    burgerButton.addEventListener('click', function burgerVisible() {
        burgerClass.style.right = '0px'
        burgerClass.style.display = 'flex'
        burgerClass.style.animation = 'burgerVisible 0.5s forwards'
        burgerShadow.style.display = 'block'
        bodyClass.style.pointerEvents = 'none'
        burgerClass.style.pointerEvents = 'all'

    })
};
//закрытие бургера 
export const burgerCancel = () => {
    var burgerCancelButton = document.querySelector('.burger_cancel')
    var burgerClass = document.querySelector('.burger')
    var burgerShadow = document.querySelector('.burger_shadow')
    var bodyClass = document.querySelector('.body')

    burgerCancelButton.addEventListener('click', function burgerDontVisible() {
        burgerClass.style.right = '-300px'
        burgerClass.style.animation = 'burgerDontVisible 0.5s forwards'
        burgerShadow.style.display = 'none'
        bodyClass.style.pointerEvents = 'all'
        burgerClass.style.pointerEvents = 'none'
    })
};

// переход на страницу 
export const burgerTransition = () =>{
    var burgerLi = document.querySelector('.burger_li')
    var burgerClass = document.querySelector('.burger')
    var burgerShadow = document.querySelector('.burger_shadow')
    var bodyClass = document.querySelector('.body')
    burgerLi.addEventListener('click', function burgerClick(){
        console.log('click')
        burgerClass.style.right = '-300px'
        burgerClass.style.animation = 'burgerDontVisible 0.5s forwards'
        burgerShadow.style.display = 'none'
        bodyClass.style.pointerEvents = 'all'
        burgerClass.style.pointerEvents = 'none'
    })

};
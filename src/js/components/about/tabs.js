export function tabsAbout (){
const tabsButtons = document.querySelectorAll('.tabsInfo__tab');
// console.log(tabsButtons)
tabsButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const prevActiveButton = document.querySelector('.tabsInfo__tab.active__button');
        const prevActiveItem = document.querySelector('.tabsInfo__item.active__item');
        if(prevActiveButton){
            prevActiveButton.classList.remove('active__button')
        }
        if(prevActiveItem){
            prevActiveItem.classList.remove('active__item')
        }
        const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
        const nextActiveItem = document.querySelector(nextActiveItemId);
        btn.classList.add('active__button')
        nextActiveItem.classList.add('active__item')
        console.log(nextActiveItem)
    });
})};
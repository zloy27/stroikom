export function tabs (){
const tabsButtons = document.querySelectorAll('.layot_tab');
tabsButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
        const prevActiveButton = document.querySelector('.layot_tab.active_button');
        const prevActiveItem = document.querySelector('.layot_item.active_item');
        if(prevActiveButton){
            prevActiveButton.classList.remove('active_button')
        }
        if(prevActiveItem){
            prevActiveItem.classList.remove('active_item')
        }
        const nextActiveItemId = `#${btn.getAttribute('data-tab')}`;
        const nextActiveItem = document.querySelector(nextActiveItemId);
        btn.classList.add('active_button')
        nextActiveItem.classList.add('active_item')
    });
})};
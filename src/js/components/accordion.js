export const accordionShow =()=>{
    const accrodionButton = document.querySelectorAll('.accordion_button');
    accrodionButton.forEach(btn=>{
        btn.addEventListener('click',()=>{
            const buttonId = btn.id
            const accordionInfo = document.querySelector('[data-accrodion="'+`${buttonId}`+'"]')
            console.log(accordionInfo.textContent)
            accordionInfo.classList.toggle('active_info')
        })
    })
}
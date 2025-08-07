import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const tabsInfoSwiper = () => {
    var quantitySLide
    if (window.innerWidth > 996){
        quantitySLide = '2'
    }else{
        quantitySLide = 'auto'
    }
    new Swiper('.swiper__firstTab--swiper', {
        modules: [Navigation],
        slidesPerView: '1',
        spaceBetween: 22,
        loop: true,
        navigation: {
            prevEl: '.swiper__firstTab--button-prev',
            nextEl: '.swiper__firstTab--button-next',
        },
    });
};
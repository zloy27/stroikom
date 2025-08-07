import '/scss/about.scss';

// components

import { burgerCancel, burgerTransition,burgerOpened } from './components/header.js';
import {tabsAbout} from './components/about/tabs';
import { tabsInfoSwiper} from './components/about/swiper';
import {formVisible, formAnvisible, sendingForm,closeForm} from './components/form.js';
burgerCancel();
burgerTransition();
burgerOpened();
tabsInfoSwiper()
tabsAbout();
formVisible();
formAnvisible();
sendingForm();
closeForm();
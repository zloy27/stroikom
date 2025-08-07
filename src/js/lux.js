import '/scss/lux.scss';

// components

import { burgerCancel, burgerTransition,burgerOpened } from './components/header.js';
import { swiper } from './components/swiper.js';
import { tabs } from './components/tabs.js';
import {accordionShow} from './components/accordion.js';
import {formVisible, formAnvisible, sendingForm,closeForm} from './components/form.js';
swiper();
accordionShow();
tabs();
burgerOpened();
burgerCancel();
burgerTransition();
formVisible();
formAnvisible();
sendingForm();
closeForm();
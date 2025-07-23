import '/scss/main.scss';

// components

import { burgerCancel, headerMinActiveded, burgerTransition,burgerMainOpened,burgerTabletOpened } from './components/header.js';
import {formVisible, formAnvisible} from './components/form.js';
burgerTabletOpened();
headerMinActiveded();
burgerMainOpened();
burgerCancel();
burgerTransition();
formVisible();
formAnvisible();


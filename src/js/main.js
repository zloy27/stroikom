import '/scss/main.scss';

// components
// import { useTheme } from './components/theme.js';
// import { useBurger } from './components/burger.js';
import { burgerCancel, headerActiveded, burgerTransition } from './components/header.js';
import { burgerOpened } from './components/header.js';

// useTheme();
// useBurger();
headerActiveded();
burgerOpened();
burgerCancel();
burgerTransition();

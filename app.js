// Keyboard Trap on mobile
const nav = document.querySelector('.nav');
let keyboardTrap = null;
const setKeyboardTrap = () => {
  let isMobile = !window.matchMedia('(min-width: 992px)').matches;
  if (isMobile && keyboardTrap === null) {
    keyboardTrap = new KeyboardTrap(nav);
  } else if (!isMobile) {
    nav.removeAttribute('tabindex');
  }
};
window.addEventListener('resize', setKeyboardTrap);
window.addEventListener('load', setKeyboardTrap);

// Switch
const switchCheked = () => theme.setMode(Theme.MODE_DARK);
const switchUncheked = () => theme.setMode(Theme.MODE_LIGHT);
const options = { oncheck: switchCheked, onuncheck: switchUncheked };

const switchContainer = document.querySelector('.switch-container');
const switchComponent = new Switch(switchContainer, options);


const mode = theme.getPreference();
if (mode === Theme.MODE_DARK) {
  switchComponent.check();
} else {
  switchComponent.uncheck();
}
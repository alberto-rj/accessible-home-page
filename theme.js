class Theme {
  static MODE_LIGHT = 0;
  static MODE_DARK = 1;
  constructor () {
    this.html = document.querySelector('html');
  }
  
  setMode (mode) {
    if (mode === Theme.MODE_DARK) {
      this.html.classList.add('dark-mode');
    } else {
      this.html.classList.remove('dark-mode');
    }
    this.setPreference(mode);
  }

  setPreference (mode) {
    localStorage.setItem('theme', mode.toString());
  }

  getPreference () {
    let mode = Number.parseInt(localStorage.getItem('theme'));
    if (mode) {
      return mode;
    }
    mode = window.matchMedia('(prefers-color-theme: dark)').matches ? Theme.MODE_DARK : Theme.MODE_LIGHT;
    return mode;
  }
}

const theme = new Theme();
theme.setMode(theme.getPreference());
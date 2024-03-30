'use strict';
class Switch {
  static KEY_SPACE = 32;
  static KEY_ENTER = 13;
  constructor (container, options = {oncheck: () => {}, onuncheck: () => {} }) {
    this.container = container;
    this.options = options;
    this.container.addEventListener(
      'click', () => this.toggleStatus()
    );
    this.container.addEventListener(
      'keydown', (e) => this.handleKeydown(e)
    );
  }
  
  handleKeydown (e) {
    switch (e.keyCode) {
      case Switch.KEY_SPACE:
      case Switch.KEY_ENTER:
        e.preventDefault();
        this.toggleStatus();
        break;
    }
  }

  toggleStatus () {
    if (this.isChecked()) {
      this.uncheck();
      this.options.onuncheck();
    } else {
      this.check();
      this.options.oncheck();
    }
  }

  isChecked () {
    return this.container.getAttribute('aria-checked') === 'true';
  }

  check () {
    const label = this.container.getAttribute('data-checked');
    this.container.setAttribute('aria-label', label);
    this.container.setAttribute('aria-checked', 'true');
  }

  uncheck () {
    const label = this.container.getAttribute('data-unchecked');
    this.container.setAttribute('aria-label', label);
    this.container.setAttribute('aria-checked', 'false');
  }
}
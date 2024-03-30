class KeyboardTrap {

  constructor (node) {
    const focusableNodeSelectors = 'input, textarea, select, button, [href], [tabindex]:not([tabindex="-1"])';
    let focusableNodes = node.querySelectorAll(focusableNodeSelectors);
    this.focusableNodes = Array.from(focusableNodes);
    this.currentIndex = -1;
    node.addEventListener('keydown', (event) => this.handleKeydown(event));
    node.addEventListener('click', (event) => this.handleClick(event));
    this.node = node;
  }

  handleKeydown (event) {
    if (event.key === 'Tab' && event.shiftKey) {
      event.preventDefault();
      this.focusPreviousNode();
    } else if (event.key === 'Tab') {
      event.preventDefault();
      this.focusNextNode();
    }
  }

  handleClick (event) {
    let noFocubleNode = this.focusableNodes.every(node => node !== event.target);
    if (noFocubleNode) {
      this.currentIndex = -1;
    }
  }

  focusPreviousNode() {
    let firstIndex = 0;
    let lastIndex = this.focusableNodes.length - 1;
    let previousIndex = this.currentIndex - 1;
    let newIndex = this.currentIndex <= firstIndex ? lastIndex : previousIndex;
    this.focusNode(newIndex);
  }

  focusNextNode() {
    let firstIndex = 0;
    let lastIndex = this.focusableNodes.length - 1;
    let nextIndex = this.currentIndex + 1;
    let newIndex = this.currentIndex === lastIndex ? firstIndex : nextIndex;
    this.focusNode(newIndex);
  }

  focusNode (index) {
    this.focusableNodes[index].focus();
    this.currentIndex = index;
  }
}
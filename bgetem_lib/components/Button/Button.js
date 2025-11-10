export class Button {
  constructor(options = {}) {
    this.text = options.text || 'Click me';
    this.alertMessage = options.alertMessage || 'Button clicked!';
    this.cssPrefix = options.cssPrefix || 'button';
    this.containerSelector = options.containerSelector || null;
  }

  render() {
    const button = document.createElement('button');
    button.className = `${this.cssPrefix}-element`;
    button.textContent = this.text;
    button.addEventListener('click', () => alert(this.alertMessage));

    if (this.containerSelector) {
      document.querySelector(this.containerSelector)?.appendChild(button);
    }

    return button;
  }
}

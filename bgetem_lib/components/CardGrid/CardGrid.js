/**
 * CardGrid Component
 * A flexible grid component for displaying cards with header
 */
export class CardGrid {
  constructor(options = {}) {
    this.title = options.title || 'Aktuelle Meldungen';
    this.cards = options.cards || [];
    this.containerSelector = options.containerSelector || 'body';
    this.cssPrefix = options.cssPrefix || 'serviceportal-aktuelle-meldung';
    this.onCardClick = options.onCardClick || null;
  }

  render() {
    const container = document.querySelector(this.containerSelector);
    if (!container) {
      console.error(`Container ${this.containerSelector} not found`);
      return;
    }

    const wrapper = document.createElement('div');
    wrapper.className = `${this.cssPrefix}-container`;
    wrapper.innerHTML = `
      <div class="${this.cssPrefix}-header">
        ${this.title}
      </div>
      <div class="${this.cssPrefix}-cards-wrapper">
        <div class="${this.cssPrefix}-cards" id="${this.cssPrefix}-card-container"></div>
      </div>
    `;

    container.appendChild(wrapper);
    this.renderCards();
  }

  renderCards() {
    const cardsContainer = document.getElementById(`${this.cssPrefix}-card-container`);
    if (!cardsContainer) return;

    cardsContainer.innerHTML = '';

    this.cards.forEach((cardData, index) => {
      const card = new Card({
        ...cardData,
        cssPrefix: this.cssPrefix,
        onClick: () => {
          if (this.onCardClick) {
            this.onCardClick(cardData, index);
          }
        }
      });

      cardsContainer.appendChild(card.render());
    });
  }

  updateCards(newCards) {
    this.cards = newCards;
    this.renderCards();
  }

  addCard(cardData) {
    this.cards.push(cardData);
    this.renderCards();
  }

  removeCard(index) {
    this.cards.splice(index, 1);
    this.renderCards();
  }
}

/**
 * Card Component
 * Individual card with image, title, and description
 */
class Card {
  constructor(options = {}) {
    this.title = options.title || '';
    this.text = options.text || '';
    this.img = options.img || 'https://via.placeholder.com/300x140';
    this.cssPrefix = options.cssPrefix || 'serviceportal-aktuelle-meldung';
    this.onClick = options.onClick || null;
  }

  render() {
    const cardElement = document.createElement('div');
    cardElement.className = `${this.cssPrefix}-card`;

    if (this.onClick) {
      cardElement.style.cursor = 'pointer';
      cardElement.addEventListener('click', this.onClick);
    }

    cardElement.innerHTML = `
      <img src="${this.img}" alt="${this.title}" />
      <div class="${this.cssPrefix}-card-content">
        <h3>${this.title}</h3>
        <p>${this.text}</p>
      </div>
    `;

    return cardElement;
  }
}

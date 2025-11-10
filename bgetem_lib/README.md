# CardGrid Component Library

A flexible, reusable card grid component library for displaying content in a responsive grid layout.

## Features

- Responsive card grid layout
- Customizable styling with CSS prefix
- Click handlers for cards
- Dynamic card management (add, remove, update)
- Smooth hover animations
- Mobile-friendly with touch scrolling

## Quick Start

### HTML

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <link rel="stylesheet" href="components/CardGrid/CardGrid.css"/>
</head>
<body>
<div id="app"></div>
<script type="module" src="your-app.js"></script>
</body>
</html>
```

### JavaScript

```javascript
import {CardGrid} from './CardGrid.js';

const cards = [
    {
        title: 'Card Title',
        text: 'Card description text',
        img: 'https://example.com/image.jpg'
    }
];

const cardGrid = new CardGrid({
    title: 'My Cards',
    cards: cards,
    containerSelector: '#app',
    onCardClick: (card, index) => {
        console.log('Card clicked:', card);
    }
});

cardGrid.render();
```

## API Reference

### CardGrid Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | `'Aktuelle Meldungen'` | Header title |
| `cards` | array | `[]` | Array of card data objects |
| `containerSelector` | string | `'body'` | CSS selector for container |
| `cssPrefix` | string | `'serviceportal-aktuelle-meldung'` | CSS class prefix |
| `onCardClick` | function | `null` | Click handler for cards |

### Card Data Object

```javascript
{
  title: string,    // Card title
  text: string,     // Card description
  img: string       // Image URL
}
```

### Methods

#### `render()`
Renders the component to the DOM.

#### `updateCards(newCards)`
Replaces all cards with new data.

```javascript
cardGrid.updateCards([
  { title: 'New Card', text: 'Description', img: 'url' }
]);
```

#### `addCard(cardData)`
Adds a single card to the end.

```javascript
cardGrid.addCard({
  title: 'New Card',
  text: 'Description',
  img: 'url'
});
```

#### `removeCard(index)`
Removes a card by index.

```javascript
cardGrid.removeCard(0); // Removes first card
```

## Examples

### Basic Usage

```javascript
import {CardGrid} from './CardGrid.js';

const grid = new CardGrid({
    title: 'News',
    cards: [
        {title: 'Item 1', text: 'Text 1', img: 'img1.jpg'},
        {title: 'Item 2', text: 'Text 2', img: 'img2.jpg'}
    ],
    containerSelector: '#app'
});

grid.render();
```

### With Click Handler

```javascript
const grid = new CardGrid({
  cards: myCards,
  onCardClick: (card, index) => {
    window.location.href = `/details/${index}`;
  }
});
```

### Dynamic Updates

```javascript
const grid = new CardGrid({ cards: initialCards });
grid.render();

// Later...
grid.addCard({ title: 'New', text: 'Content', img: 'new.jpg' });
grid.removeCard(0);
grid.updateCards(entirelyNewCardSet);
```

## Customization

### Custom CSS Prefix

Use a custom CSS prefix to avoid conflicts:

```javascript
const grid = new CardGrid({
  cssPrefix: 'my-custom-prefix'
});
```

This will use classes like `my-custom-prefix-container`, `my-custom-prefix-card`, etc.

### Styling

Override default styles by targeting the CSS classes:

```css
.serviceportal-aktuelle-meldung-header {
  background: #ff0000;
}

.serviceportal-aktuelle-meldung-card {
  border-radius: 8px;
}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ modules support required
- CSS Grid and Flexbox support required

## Files

- `components/CardGrid.js` - Main component code
- `components/CardGrid.css` - Component styles
- `components/index.js` - Export entry point
- `demo.html` - Demo implementation

## License

MIT

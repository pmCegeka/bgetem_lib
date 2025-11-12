export class LinkList {
    constructor(links = []) {
        this.links = Array.isArray(links) ? links : [links];
        this.cssPrefix = 'bgetem-link';
    }

    render() {
        const container = document.createElement("div");
        container.className = this.cssPrefix + '_wrapper';

        container.innerHTML = this.links.map(link => {
            const {
                label = "Linklist medium",
                href = "#",
                ariaLabel,
                size = "medium",
                target = "_self",
                showIcon = true, // 👈 default to true
            } = link;

            const finalAriaLabel = ariaLabel || `Open ${label}`;

            // Conditionally include the SVG icon
            const iconHTML = showIcon
                ? `
          <svg class="link-icon" width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        `
                : "";

            return `
        <a class="link-list link-list--${size}" href="${href}" aria-label="${finalAriaLabel}" target="${target}">
          ${iconHTML}
          <span class="link-label">${label}</span>
        </a>
      `;
        }).join('');

        return container;
    }
}

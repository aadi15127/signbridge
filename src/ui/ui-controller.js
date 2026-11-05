// UI Controller
export class UIController {
  constructor() {
    this.historyEl = document.getElementById('translation-history');
  }
  // Add a new entry to the translation history
  addToHistory(text, emotion) {
    const entry = document.createElement('div');
    entry.textContent = `${text} ${emotion ? `(${emotion})` : ''}`;
    this.historyEl.appendChild(entry);
  }
}

export class View {
    constructor() {}
  
    updateSection(id, strings, className) {
      const container = document.getElementById(id);
      container.innerHTML = '';
      strings.forEach((str) => {
        const p = document.createElement('p');
        p.textContent = str.value;
        p.className = className;
        container.appendChild(p);
      });
    }
  }
  
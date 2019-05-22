import '../styles/NavMenu.scss';

export class NavMenu {
   constructor(rootElenent, options) {
      this.rootElenent = rootElenent;
      this.options = options;
      this.items;
      this.item;
      this.li;
      this.render();
   }

   render() {
      this.items = document.createElement('ul');
      this.items.classList.add('nav__items');

      this.rootElenent.appendChild(this.items);

      for(let i = 0; i < this.options.length; i++) {
         const { title, link } = this.options[i];
         const option = `<li class="nav__item">
         <a class="nav__link" href=${link}>${title}</a></li>`;
         this.items.innerHTML += option;
       }
   }
}
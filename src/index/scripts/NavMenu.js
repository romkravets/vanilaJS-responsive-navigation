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
          this.li = document.createElement('li');
          this.option = document.createElement('a');
   
          this.li.classList.add('nav__item');
          this.option.classList.add('nav__link');
          this.option.setAttribute("href", "#");
            this.option.textContent = this.options[i];
   
         this.items.appendChild(this.li);
         this.li.appendChild(this.option);
       }
   }
}
import '../styles/NavMenu.scss';

export class NavMenu {
   constructor(rootElenent, options) {
      this.rootElenent = rootElenent;
      this.options = options;
      this.toggler = this.toggler.bind(this);
      this.items;
      this.item;
      this.toggleBtnBox;
      this.burger;
      this.render();
   }

   toggler() {
      this.rootElenent.classList.toggle('nav_opened');
      this.rootElenent.classList.toggle('nav_change');
   }

   render() {
      this.items = document.createElement('ul');
      this.items.classList.add('nav__items');

      this.rootElenent.appendChild(this.items);

      this.options.forEach(data => {
         const option = `
             <li class="nav__item">
               <a class="nav__link" href=${data.link}>${data.title}</a>
             </li>
             `;
         this.items.innerHTML += option;
      });

       this.toggleBtnBox = `
       <div class="mobile-controls">
         <div class="burger">
            <div class="burger__row"></div>
            <div class="burger__row burger__row_two"></div>
            <div class="burger__row"></div>
         </div>
       </div>
      `
       this.rootElenent.innerHTML += this.toggleBtnBox;

      this.burger = document.querySelector('.burger');
      this.burger.addEventListener('click', () => {
         this.toggler();
      })

   }
}
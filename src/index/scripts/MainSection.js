import '../styles/MainSection.scss';

export class MainSection {
   constructor(rootSection, dataSection) {
      this.rootSection = rootSection;
      this.dataSection = dataSection;
      this.sectionTitle;
      this.render();
   }

   render() {
      this.dataSection.forEach((data) => {
         this.sectionTitle = `
         <h1 class="main-section__title">${data.titleSection}</h1>
         <p>${data.description}</p>
         <button class="btn">${data.buttonText}</button>
      `
      this.rootSection.innerHTML += this.sectionTitle;
      });
   }
}
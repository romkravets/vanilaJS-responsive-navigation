import './index.scss';
import { NavMenu } from './scripts/NavMenu';
import { MainSection } from './scripts/MainSection';

const navLinks = [
   {
      title: "HOME",
      link: "#"
   },
   {
      title: "PORTFOLIO",
      link: "https://github.com/romkravets"
   },
   {
      title: "SERVICE",
      link: "https://github.com/romkravets"
   },
   {
      title:"CONTACT US",
      link: "https://linkedin.com/in/romkravets"
   },
];

const dataSection = [
   {
      titleSection: "Responsive Navigation",
      description: "Simple and written in vanilla JavaScript.",
      buttonText: "Call me"
   }
];

new NavMenu(document.querySelector('#navigation'), navLinks);
new MainSection(document.querySelector('#firstSection'), dataSection);
new MainSection(document.querySelector('#secondSection'), dataSection);


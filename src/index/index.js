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

const firstDataSection = [
   {
      titleSection: "Responsive Navigation",
      description: "Simple vanilla JavaScript.",
      buttonText: "Call me"
   }
];

const secondDataSection = [
   {
      titleSection: "Second Section Daynemyc JS",
      description: "Vanilla JavaScript Section. Dynemic change description",
      buttonText: "Call me"
   }
];

new NavMenu(document.querySelector('#navigation'), navLinks);
new MainSection(document.querySelector('#firstSection'), firstDataSection);
new MainSection(document.querySelector('#secondSection'), secondDataSection);


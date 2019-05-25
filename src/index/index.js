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
]

new NavMenu(document.querySelector('#navigation'), navLinks);
new MainSection();


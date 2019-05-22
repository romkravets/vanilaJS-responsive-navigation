import './index.scss';
import { NavMenu } from './scripts/NavMenu';

const navLinks = [
   {
      title: "HOME",
      link: "https://google.com"
   },
   {
      title: "PORTFOLIO",
      link: "https://google.com"
   },
   {
      title: "SERVICE",
      link: "https://google.com"
   },
   {
      title:"CONTACT US",
      link: "https://google.com"
   },
]

new NavMenu(document.querySelector('#navigation'), navLinks);


import { element } from './MakeElement';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Home from './Home';

const Main = (page) => {
  const main = element('MAIN');
  if (page === 'home') main.appendChild(Home());
  else if (page === 'about') main.appendChild(About());
  else if (page === 'contact') main.appendChild(Contact());
  else main.appendChild(Menu());
  return main;
};

export default Main;

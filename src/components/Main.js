import Create from './MakeElement';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Home from './Home';

const Main = (() => {
  const main = Create.element('MAIN');

  const home = () => {
    main.innerHTML = '';
    main.appendChild(Home());
    return main;
  };

  const about = () => {
    main.innerHTML = '';
    main.appendChild(About());
    return main;
  };
  const contact = () => {
    main.innerHTML = '';
    main.appendChild(Contact());
    return main;
  };
  const menu = () => {
    main.innerHTML = '';
    main.appendChild(Menu());
    return main;
  };

  const choose = (page) => {
    if (page === 'home') {
      return home();
    } if (page === 'about') {
      return about();
    } if (page === 'contact') {
      return contact();
    }
    return menu();
  };

  return { choose };
})();

export default Main;

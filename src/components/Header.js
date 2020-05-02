import { element, text } from './MakeElement';

const Header = () => {
  const header = element('HEADER');
  const ul = element('ul');
  const h2 = element('H2');
  const h2Text = text('Burger Stop');
  const nav = element('NAV');

  header.append(h2, nav);

  h2.classList.add('logo');
  h2.appendChild(h2Text);
  nav.appendChild(ul);

  ['Menu', 'Contact', 'About'].forEach((name) => {
    const li = element('li');
    const liTxt = text(name);
    ul.appendChild(li);
    li.appendChild(liTxt);
  });

  return header;
};

export default Header;

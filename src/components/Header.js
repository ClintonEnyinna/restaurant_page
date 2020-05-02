import Create from './MakeElement';

const Header = () => {
  const header = Create.element('HEADER');
  const ul = Create.element('ul');
  const h2 = Create.element('H2');
  const h2Text = Create.text('Burger Stop');
  const nav = Create.element('NAV');

  header.appendChild(h2);
  header.appendChild(nav);

  h2.classList.add('logo');
  h2.appendChild(h2Text);
  nav.appendChild(ul);

  ['Menu', 'Contact', 'About'].forEach((name) => {
    const li = Create.element('li');
    const liTxt = Create.text(name);
    ul.appendChild(li);
    li.appendChild(liTxt);
  });

  return header;
};

export default Header;

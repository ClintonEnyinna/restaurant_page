import Create from './MakeElement';

const Menu = () => {
  const div = Create.element('DIV');
  const h2 = Create.element('H2');
  const h2Txt = Create.text('Menu');
  const p = Create.element('P');
  const pTxt = Create.text("Today's menu");

  h2.appendChild(h2Txt);
  p.appendChild(pTxt);
  div.appendChild(h2);
  div.appendChild(p);
  div.classList.add('contact');
  return div;
};

export default Menu;

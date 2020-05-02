import { element, text } from './MakeElement';

const Menu = () => {
  const div = element('DIV');
  const h2 = element('H2');
  const h2Txt = text('Menu');
  const p = element('P');
  const pTxt = text("Today's menu");

  h2.appendChild(h2Txt);
  p.appendChild(pTxt);
  div.append(h2, p);
  div.classList.add('contact');
  return div;
};

export default Menu;

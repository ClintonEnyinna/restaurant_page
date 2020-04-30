import Create from './MakeElement';

const Main = () => {
  const main = Create.element('MAIN');
  const h1 = Create.element('H1');
  const h1Text = Create.text("The Best Burges You'll Ever Taste");
  const leftDiv = Create.element('DIV');
  const rightDiv = Create.element('DIV');
  const btnTxt = Create.text('Make an order');
  const btn = Create.element('BUTTON');
  const p = Create.element('P');
  const pText = Create.text(
    'Our meats are the result of our commitment to the welfare of the animals we raise, the sustainability of our planet, and the health of our families. Taste the difference that goodness creates. All of our meat are hormone and preservative free.'
  );

  main.appendChild(leftDiv);
  main.appendChild(rightDiv);
  h1.appendChild(h1Text);
  leftDiv.appendChild(h1);
  p.appendChild(pText);
  leftDiv.appendChild(p);
  btn.appendChild(btnTxt);
  leftDiv.appendChild(btn);

  return main;
};

export default Main;

import Create from './MakeElement';

const Home = () => {
  const h1 = Create.element('H1');
  const h1Text = Create.text("The Best Burger You'll Ever Taste.");
  const div = Create.element('DIV');
  const btnTxt = Create.text('Make an order');
  const btn = Create.element('BUTTON');
  const p = Create.element('P');
  const pText = Create.text(
    'Taste the difference that goodness creates. All of our meat are hormone and preservative free.',
  );

  h1.appendChild(h1Text);
  div.classList.add('hero');
  div.appendChild(h1);
  p.appendChild(pText);
  div.appendChild(p);
  btn.appendChild(btnTxt);
  div.appendChild(btn);
  return div;
};

export default Home;

import { element, text } from './MakeElement';

const Home = () => {
  const h1 = element('H1');
  const h1Text = text("The Best Burger You'll Ever Taste.");
  const div = element('DIV');
  const btnTxt = text('Make an order');
  const btn = element('BUTTON');
  const p = element('P');
  const pText = text(
    'Taste the difference that goodness creates. All of our meat are hormone and preservative free.'
  );

  h1.appendChild(h1Text);
  p.appendChild(pText);
  btn.appendChild(btnTxt);
  div.classList.add('hero');
  div.append(h1, p, btn);
  return div;
};

export default Home;

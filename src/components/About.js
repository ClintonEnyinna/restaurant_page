import { element, text } from './MakeElement';

const About = () => {
  const div = element('DIV');
  const h2 = element('h2');
  const h2Txt = text('About Us');
  const p = element('P');
  const pTxt = text(
    'Taste the difference that goodness creates. All of our meat are hormone and preservative free.'
  );

  h2.appendChild(h2Txt);
  p.appendChild(pTxt);
  div.append(h2, p);
  div.classList.add('contact');
  return div;
};

export default About;

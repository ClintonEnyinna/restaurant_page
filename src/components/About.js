import Create from './MakeElement';

const About = () => {
  const div = Create.element('DIV');
  const h2 = Create.element('h2');
  const h2Txt = Create.text('About Us');
  const p = Create.element('P');
  const pTxt = Create.text(
    'Taste the difference that goodness creates. All of our meat are hormone and preservative free.',
  );

  h2.appendChild(h2Txt);
  p.appendChild(pTxt);
  div.appendChild(h2);
  div.appendChild(p);
  div.classList.add('contact');
  return div;
};

export default About;

import Create from './MakeElement';

const Contact = () => {
  const div = Create.element('DIV');
  const h2 = Create.element('h2');
  const h2Txt = Create.text('Contact Us');
  const p = Create.element('P');
  const pTxt = Create.text('call us at 42 425 899');

  h2.appendChild(h2Txt);
  p.appendChild(pTxt);
  div.appendChild(h2);
  div.appendChild(p);
  div.classList.add('contact');
  return div;
};

export default Contact;

import { element, text } from './MakeElement';

const Contact = () => {
  const div = element('DIV');
  const h2 = element('h2');
  const h2Txt = text('Contact Us');
  const p = element('P');
  const pTxt = text('call us at 42 425 899');

  h2.appendChild(h2Txt);
  p.appendChild(pTxt);
  div.append(h2, p);
  div.classList.add('contact');
  return div;
};

export default Contact;

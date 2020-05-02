import { element, text } from './MakeElement';

const Footer = () => {
  const footer = element('FOOTER');

  ['facebook', 'twitter', 'instagram'].forEach((name) => {
    const i = element('I');
    const iTxt = text(name);

    i.appendChild(iTxt);
    footer.appendChild(i);
  });

  return footer;
};

export default Footer;

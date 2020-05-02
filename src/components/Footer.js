import Create from './MakeElement';

const Footer = () => {
  const footer = Create.element('FOOTER');

  ['facebook', 'twitter', 'instagram'].forEach((name) => {
    const i = Create.element('I');
    const iTxt = Create.text(name);

    i.appendChild(iTxt);
    footer.appendChild(i);
  });

  return footer;
};

export default Footer;

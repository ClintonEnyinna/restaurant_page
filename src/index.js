import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const page = document.querySelector('#content');
const pageFragment = document.createDocumentFragment();

pageFragment.appendChild(Header());
pageFragment.appendChild(Main());
pageFragment.appendChild(Footer());

page.appendChild(pageFragment);

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './style.css';

const page = document.querySelector('#content');

const render = (currentPage) => {
  page.append(Header(), Main(currentPage), Footer());
};

render('home');

const navEventLister = () => {
  const nav = document.querySelectorAll('li');
  const homeLink = document.querySelector('.logo');

  [...nav].forEach((li) => {
    li.addEventListener('click', (e) => {
      const navBtn = e.target.innerText.toLowerCase();
      page.innerHTML = '';
      render(navBtn);
      navEventLister();
    });
  });

  homeLink.addEventListener('click', () => {
    page.innerHTML = '';
    render('home');
    navEventLister();
  });
};

navEventLister();

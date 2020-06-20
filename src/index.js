import Flickity from 'flickity';
import './flickity.css';
import './style.css';

const $carousel = document.querySelector('.main-carousel');

const flickity = new Flickity($carousel, {
  contain: true,
  freeScroll: true,
  pageDots: true,
  wrapAround: true,
  // groupCells: true
});

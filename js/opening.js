'use strict';

{
  const Opening = document.getElementById('opening');
  const SliceUp = document.getElementById('slice-up-icon');
  const SliceDown = document.getElementById('slice-down-icon');
  const NoneSlice = document.getElementById('none-slice-icon');
  const Home = document.getElementById('home');

  setTimeout( () => {
    SliceUp.classList.add('hide');
    SliceDown.classList.add('hide');
    NoneSlice.classList.remove('hide');
  }, 4000)

  setTimeout( () => {
    Opening.classList.add('hide');
    Home.classList.remove('hide');
  }, 7700)
}
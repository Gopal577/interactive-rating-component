let ratingCard = document.querySelector('.rating-card');
let thankYouCard = document.querySelector('.Thank-you-card');
let submit = document.querySelector('.Submit-btn');
let rating = document.querySelectorAll('.btn');
let rate = document.querySelector('#rate');
submit.addEventListener('click', () => {
  thankYouCard.classList.remove('hidden');
  ratingCard.classList.add('hidden');
});
rating.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.innerHTML);
    rate.innerHTML = item.innerHTML;
  });
});

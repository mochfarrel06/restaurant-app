/* eslint-disable eol-last */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable quotes */
import CONFIG from "../../globals/config";

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 class="restaurant__title">${restaurant.name}</h2>
    <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="restaurant__info">
      <div class="food-menu">
        <h3>Menu Makanan</h3>
        <p>${restaurant.menus.foods.map((food) => `<li class="menu-item">${food.name}</li>`).join(' ')}</p>
      </div>
      <div class="drink-menu">
        <h3>Menu Minuman</h3>
        <p>${restaurant.menus.drinks.map((drink) => `<li class="menu-item">${drink.name}</li>`).join(' ')}</p>
      </div>
    </div>
    <div class="restaurant__overview">
      <div class="information">
        <h3>Information</h3>
        <h4>Kota</h4>
        <p>${restaurant.city}</p>
        <h4>Alamat</h4>
        <p>${restaurant.address}</p>
      </div>
      <div class="description">
        <h3>Deskripsi</h3>
        <p class="desk">${restaurant.description}</p>
      </div>
    </div>
    <div class="restaurant-review">
      <h3>Consumer Review</h3>
      <div id="review-container">
        ${restaurant.customerReviews.map((review) => `
            <div class="review-container">
                <div class="review-photo-profile">
                    <img src="./images/default-small.jpg" alt="consumer photo profile">
                </div>
                <div class="review-body">
                    <h3 class="review-consumer-name">${review.name}</h3>
                    <small class="review-date-post">${review.date}</small>
                    <p class="review-content">${review.review}</p>
                </div>
            </div>
        `).join('')}
      </div>
      <div class="review-form-container">
        <h2>Make a Review</h2>
          <form class="review-form" id="review-form">
            <input type="hidden" name="id" value="${restaurant.id}">
            <div class="review-form-element">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" autocomplete="off">
            </div>
            <div class="review-form-element">
              <label for="review">Review</label>
              <textarea name="review" id="review"></textarea>
            </div>
            <button type="submit" id="button-review">Add Review</button>
          </form>
      </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item">
      <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name || '-'}"
          data-src="${CONFIG.BASE_IMAGE_URL}${restaurant.pictureId}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating || '-'}</span></p>
        </div>
      </div>
      <div class="restaurant-item__content">
          <h3 class="restaurant__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
          <p>${restaurant.description || '-'}</p>
      </div>
    </div>
`;

const createReviewTemplate = (reviews) => {
  const review = reviews.customerReviews[reviews.customerReviews.length - 1];

  const html = document.createElement('div');
  html.classList.add('review-container');
  html.innerHTML = `
        <div class="review-photo-profile">
            <img src="./images/default-small.jpg" alt="consumer photo profile">
        </div>
        <div class="review-body">
            <h3 class="review-consumer-name">${review.name}</h3>
            <small class="review-date-post">${review.date}</small>
            <p class="review-content">${review.review}</p>
        </div>
        
  `;

  return html;
};

const createButtonLoaderTemplate = () => `
  <div class="btn-loader">
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createRestaurantDetailTemplate, createRestaurantItemTemplate, createReviewTemplate, createButtonLoaderTemplate, createLikeButtonTemplate, createLikedButtonTemplate };
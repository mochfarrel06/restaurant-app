/* eslint-disable eol-last */
/* eslint-disable import/prefer-default-export */
/* eslint-disable indent */
/* eslint-disable quotes */
import FavoriteRestaurantIdb from "../../src/scripts/data/favorite-restaurant";
import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };
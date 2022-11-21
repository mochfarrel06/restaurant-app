/* eslint-disable eol-last */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable no-prototype-builtins */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable quotes */
/* eslint-disable indent */
import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
    getRestaurant(id) {
        if (!id) {
            return;
        }

        return favoriteRestaurants.find((restaurant) => restaurant.id == id);
    },

    getAllRestaurants() {
        return favoriteRestaurants;
    },

    putRestaurant(restaurant) {
        if (!restaurant.hasOwnProperty('id')) {
            return;
        }

        // Pastikan id ini belum ada dalam daftar favoriteRestaurants
        if (this.getRestaurant(restaurant.id)) {
            return;
        }

        favoriteRestaurants.push(restaurant);
    },

    deleteRestaurant(id) {
        // Cara boros menghapus restaurant dengan mengcopy restaurant yang ada
        // Kecuali restaurant dengan id == id
        favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id != id);
    },

    searchRestaurants(query) {
        return this.getAllRestaurants().filter((restaurant) => {
            const loweredCaseRestaurantTitle = (restaurant.name || '-').toLowerCase();
          const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '');

          const loweredCaseQuery = query.toLowerCase();
          const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

          return jammedRestaurantTitle.indexOf(jammedQuery) != -1;
        });
    },
};

describe('Favorite Movie Array Contract Test Implementation', () => {
    afterEach(() => favoriteRestaurants = []);

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
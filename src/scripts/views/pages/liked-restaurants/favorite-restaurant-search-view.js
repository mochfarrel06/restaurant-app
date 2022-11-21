/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
/* eslint-disable eol-last */
/* eslint-disable indent */

import { createRestaurantItemTemplate } from "../../templates/template-creator";

/* eslint-disable class-methods-use-this */
class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <div class="content">
            <input id="query" type="text">
            <h2 class="content__heading">Your Favorite Restaurant</h2>
                <div id="restaurants" class="restaurants">
                    
                </div>
            </div>
        `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('query').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    // eslint-disable-next-line no-unused-vars
    showFavoriteRestaurants(restaurants = []) {
        let html;

        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;

        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }

    showRestaurants(restaurants) {
        this.showFavoriteRestaurants(restaurants);
    }

    _getEmptyRestaurantTemplate() {
        return '<div class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</div>';
    }
}

export default FavoriteRestaurantSearchView;
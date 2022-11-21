/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable quotes */
import RestaurantDbSource from "../../data/restaurantdb-source";
import '../component/hero-component';
import { createRestaurantItemTemplate } from "../templates/template-creator";

const Home = {
    async render() {
        return `
            <hero-component></hero-component>
            <div class="content">
                <h2 class="content__heading">Home Restaurant</h2>
                <div id="restaurants" class="restaurants">
 
                </div>
            </div>
        `;
    },

    async afterRender() {
        const { restaurants } = await RestaurantDbSource.listRestaurant();
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;
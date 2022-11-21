/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable space-before-blocks */
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson;
  }

  static async restaurantDetailById(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async sendReview(data){
    const response = await fetch(API_ENDPOINT.REVIEW, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: data,
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantDbSource;

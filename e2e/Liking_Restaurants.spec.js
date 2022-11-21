/* eslint-disable eol-last */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable keyword-spacing */
/* eslint-disable indent */
/* eslint-disable no-undef */
Feature('Liking Restaurants');

const assert = require('assert');

Before(({ I }) => {
  I.amOnPage('#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.waitForElement('.restaurant-item__not__found', 10);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__not__found', 10);
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');
  I.waitForElement('.restaurant__title a', 5);
  const firstRestaurant = locate('.restaurant__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.waitForElement('#likeButton', 10);
  I.click('#likeButton');
  I.amOnPage('#/favorite');
  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');
  I.waitForElement('.restaurant__title', 5);
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant__title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

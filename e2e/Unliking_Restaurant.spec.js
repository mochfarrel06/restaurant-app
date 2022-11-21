/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking restaurants');

Before(async ({ I }) => {
    I.amOnPage('/');

    I.waitForElement('.restaurant__title', 30);
    I.seeElement('.restaurant__title');
    const firstRestaurant = locate('.restaurant__title').first();
    const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

    I.click(firstRestaurant);

    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');

    I.click('#likeButton');

    I.amOnPage('#/favorite');
    const favoriteRestaurantName = await I.grabTextFrom('.restaurant__title');
    assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('Showing favorite restaurant', async ({ I }) => {
    I.amOnPage('#/favorite');
    const favoriteRestaurantName = await I.grabTextFrom('.restaurant__title');

    assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('Unfavorite a restaurant', ({ I }) => {
    I.waitForElement('.restaurant__title', 30);
    I.seeElement('.restaurant__title');

    I.click(locate('.restaurant__title').first());

    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');

    I.click('#likeButton');

    I.amOnPage('#/favorite');

    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});
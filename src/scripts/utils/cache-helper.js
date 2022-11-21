/* eslint-disable no-return-await */
import CONFIG from '../globals/config';

const CacheHelper = {
  async cachingAppShell(requests) {
    // eslint-disable-next-line no-underscore-dangle
    const cache = await this._openCache();
    await cache.addAll(requests);
  },

  async deleteOldCache() {
    const cacheNames = await caches.keys();
    // eslint-disable-next-line max-len
    cacheNames.filter((name) => name !== CONFIG.CACHE_NAME).map((filteredName) => caches.delete(filteredName));
  },

  async revalidateCache(request) {
    const response = await caches.match(request);

    if (response) {
      // eslint-disable-next-line no-underscore-dangle
      this._fetchRequest(request);
      return response;
    }

    // eslint-disable-next-line no-underscore-dangle
    return this._fetchRequest(request);
  },

  // eslint-disable-next-line no-underscore-dangle
  async _openCache() {
    return caches.open(CONFIG.CACHE_NAME);
  },

  // eslint-disable-next-line no-underscore-dangle
  async _fetchRequest(request) {
    const response = await fetch(request);

    if (!response || response.status !== 200) {
      return response;
    }

    // eslint-disable-next-line no-underscore-dangle
    await this._addCache(request);
    return response;
  },

  // eslint-disable-next-line no-underscore-dangle
  async _addCache(request) {
    // eslint-disable-next-line no-underscore-dangle
    const cache = await this._openCache();
    await cache.add(request);
  },
};

export default CacheHelper;

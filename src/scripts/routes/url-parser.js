const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    // eslint-disable-next-line no-underscore-dangle
    const splitedUrl = this._urlSplitter(url);
    // eslint-disable-next-line no-underscore-dangle
    return this._urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    // eslint-disable-next-line no-underscore-dangle
    return this._urlSplitter(url);
  },

  // eslint-disable-next-line no-underscore-dangle
  _urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  // eslint-disable-next-line no-underscore-dangle
  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') + (splitedUrl.id ? '/:id' : '') + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default UrlParser;

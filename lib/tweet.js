const T = require('../config/auth');
const openlibrary = require('./openlibrary');
const book = require('./book');
const request = require('request');

async function tweetBook() {
  try {
    const bookData = await openlibrary.getRandomBook();
    const { tweet, bookCoverUrl } = book.formatBookData(bookData);

    if (bookCoverUrl) {
      const media_data = await new Promise((resolve, reject) => {
        request.get(bookCoverUrl, { encoding: null }, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(body.toString('base64'));
          }
        });
      });

      const mediaResponse = await T.post('media/upload', { media_data });

      const mediaIdStr = mediaResponse.data.media_id_string;

      await T.post('statuses/update', {
        status: tweet,
        media_ids: [mediaIdStr],
      });
    } else {
      await T.post('statuses/update', {
        status: tweet,
      });
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { tweetBook };

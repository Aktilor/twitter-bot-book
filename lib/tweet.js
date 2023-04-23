const { T } = require('../config/auth');
const openlibrary = require('./openlibrary');
const book = require('./book');
const request = require('request');

async function tweetBook() {
  try {
    const bookData = await openlibrary.getRandomBook();
    const { tweet, bookCoverUrl } = book.formatBookData(bookData);

    // Image upload commented because of "Unknown Twitter API Error" 🙃
    // if (bookCoverUrl) {
    //   const media_data = await new Promise((resolve, reject) => {
    //     request.get(bookCoverUrl, { encoding: null }, (error, response, body) => {
    //       if (error) {
    //         reject(error);
    //       } else {
    //         resolve(body.toString('base64'));
    //       }
    //     });
    //   });

    //   const mediaResponse = await new Promise((resolve, reject) => {
    //     T.post('media/upload', { media_data }, (err, data, response) => {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(data);
    //       }
    //     });
    //   });

    //   const mediaIdStr = mediaResponse.media_id_string;

    //   await new Promise((resolve, reject) => {
    //     T.post('statuses/update', { status: tweet, media_ids: [mediaIdStr] }, (err, data, response) => {
    //       if (err) {
    //         reject(err);
    //       } else {
    //         resolve(data);
    //       }
    //     });
    //   });
    // } else {
      await new Promise((resolve, reject) => {
        T.post('statuses/update', { status: tweet }, (err, data, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        });
      });
    // }
  } catch (error) {
    console.error(error);
  }
}

module.exports = { tweetBook };

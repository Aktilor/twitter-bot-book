const T = require('../config/auth');
const openlibrary = require('./openlibrary');
const book = require('./book');

async function tweetBook() {
  try {
    const bookData = await openlibrary.getRandomBook();
    const { tweet, bookCoverUrl } = book.formatBookData(bookData);

    if (bookCoverUrl) {
      const mediaResponse = await T.post('media/upload', {
        media_data: request(await request.get(bookCoverUrl), { encoding: null }).toString('base64'),
      });

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

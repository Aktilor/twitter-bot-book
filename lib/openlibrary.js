require('dotenv').config();
const request = require('request-promise-native');

async function getRandomWord() {
  const options = {
    uri: 'https://random-words5.p.rapidapi.com/getMultipleRandom?count=1',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_WORDS,
      'X-RapidAPI-Host': 'random-words5.p.rapidapi.com'
    }
  };

  const data = await request(options);
  const word = JSON.parse(data);
  console.log("wod " + word);
  return word;
}

async function getRandomBook() {
  const year = new Date().getFullYear();
  const minYear = 2005;

  // Word of the day
  const word = await getRandomWord();

  const query = {
    q: `subject:${word}`,
    limit: 100,
  };

  const options = {
    uri: 'https://openlibrary.org/search.json',
    qs: query,
    json: true,
  };

  let bookData = null;

  while (!bookData) {
    const data = await request(options);
    const books = data.docs.filter((book) => book.first_publish_year && book.first_publish_year >= minYear);

    // Choose random book in results
    const randomIndex = Math.floor(Math.random() * books.length);
    const book = books[randomIndex];

    // Minimum requirements are title and cover
    if (book.title && book.cover_i) {
      bookData = book;
    }
  }

  // Add word of the day
  bookData.word_of_the_day = word;

  return bookData;
}

module.exports = { getRandomBook };

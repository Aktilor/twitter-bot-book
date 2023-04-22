const emoji = require('node-emoji');

function formatBookData(bookData) {
  const bookTitle = bookData.title || '';
  const bookPublishedDate = bookData.first_publish_year || '';
  const bookPages = bookData.number_of_pages_median || '';
  const bookAuthors = bookData.author_name || [];
  const bookDescription = bookData.description || '';
  const wordOfTheDay = bookData.word_of_the_day || '';
  let bookCoverUrl = null;

  if (bookData.cover_i) {
    bookCoverUrl = `https://covers.openlibrary.org/b/id/${bookData.cover_i}-M.jpg`;
  }

  const authorString = bookAuthors.map(author => `${emoji.get('writing_hand')} ${author}`).join('\n');

  const tweet = `${emoji.get('book')} ${bookTitle}\n${bookPublishedDate ? `${emoji.get('date')} ${bookPublishedDate}\n` : ''}${bookPages ? `${emoji.get('page_facing_up')} ${bookPages} pages\n` : ''}${bookDescription ? `${emoji.get('memo')} ${bookDescription}\n` : ''}${authorString ? `${authorString}` : ''}\n\n#WordOfTheDay #${wordOfTheDay} #BookOfTheDay #reading`;
  
  return { tweet, bookCoverUrl };
}

module.exports = { formatBookData };

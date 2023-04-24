# 📚 Book of the Day Twitter Bot

## About
This Twitter bot recommends a random book every day based on the "word of the day." It retrieves a book recommendation from the Open Library API and posts a tweet with the book's title, author, publication date, number of pages, description, and cover image (if available). The bot uses the `twit` library to interact with the Twitter API.

## Requirements
- 📦 Node.js (version 14 or higher recommended)
- 🐦 Twitter Developer account with Elevated access (Thank you Elon 🙃) and API keys
- 💎 RapidAPI free account

## Installation
1. Clone this repository to your local machine

```
git clone https://github.com/Aktilor/twitter-bot-book.git
```

2. Go to the project directory

```
cd twitter-bot-book
```

3. Install the required dependencies by running the following command

```
npm install
```

4. Set up your Twitter API credentials and Open Library API key by creating a `.env` file in the root of the project directory with the following variables:

```
TWITTER_CONSUMER_KEY=<your Twitter consumer key>
TWITTER_CONSUMER_SECRET=<your Twitter consumer secret>
TWITTER_ACCESS_TOKEN=<your Twitter access token>
TWITTER_ACCESS_TOKEN_SECRET=<your Twitter access token secret>
RAPID_API_WORDS=<your RapidAPI token>
```

Note: You have to subscribe to a [free RapidAPI Random Word generator](https://rapidapi.com/sheharyar566/api/random-words5) to get your `RAPID_API_WORDS`.

5. To run the bot locally, use the command `npm run start` in the project directory. This will start the bot and post a tweet with a book recommendation based on the "word of the day" to the Twitter account associated with your API keys.

## Contributing
Contributions to this project are welcome! To contribute, fork the repository, make changes, and submit a pull request with a description of your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

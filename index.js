const axios = require("axios");

var Twitter = require("twitter");
var config = require("./config.js");

// https://finalspaceapi.com/api/v0/character/?limit=2
axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:2080685457&format=json&jscmd=details")
  .then((response) => {
    var data = response.data;
    // console.log(data);
    var tweet = {};
    Object.keys(data).forEach((key) => {
      var datas = data[key];
      tweet.book_title = datas.details.title;
      tweet.book_publish_date = datas.details.publish_date;
      tweet.book_pages = datas.details.number_of_pages.toString();
      tweet.book_cover = datas.thumbnail_url;
      tweet.book_author = datas.details.authors[0].name;
      tweet.book_description = datas.details.description.value;
      
    });
    console.log(tweet);
    // console.log(data);
    
    // console.log(data.publish_date)
  }).catch((e) => {
    console.error(e);
  });

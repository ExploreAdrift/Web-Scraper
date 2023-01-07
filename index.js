const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();

const url = "https://legionathletics.com/";

// AXIOS WILL GO TO THIS URL AND GET A RESPONSE TO GET INFORMATION WE ARE ASKING FOR
axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const information = [];

  $(".category-item", html).each(function () {
    const webText = $(this).text();
    const url = $(this).find("a").attr("href");
    information.push({
      webText,
      url,
    });
  });
  console.log(information);
});

app.listen(PORT, () => console.log("Server running on PORT 8000"));

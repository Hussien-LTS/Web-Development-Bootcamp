import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev/joke/";

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  try {
    const result = await axios.get(`${API_URL}/Any`);
    console.log(result.data);
    const data = {
      setup: result.data.setup,
      delivery: result.data.delivery,
    };

    res.render("index.ejs", { content: JSON.stringify(data) });
  } catch (error) {
    console.error(error);
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

app.post("/submit-config", async (req, res) => {
  let {
    category,
    custom_categories = [],
    language,
    joke_type,
    jokes_amount,
  } = req.body;

  // Build the base URL
  let apiUrl = `${API_URL}`;

  // Determine the category
  if (category === "any") {
    apiUrl += "Any";
  } else if (category === "custom" && custom_categories.length > 0) {
    apiUrl += custom_categories.join(",");
  }

  // Add language and amount to the URL
  apiUrl += `?lang=${language}&amount=${jokes_amount}`;

  // Add joke type if specified
  if (joke_type) {
    apiUrl += `&type=${joke_type}`;
  }

  console.log("Final API URL:", apiUrl);

  try {
    const result = await axios.get(apiUrl);

    console.log("Final API URL result:", result);
    let data = {};
    if (result.data.setup) {
      data = {
        setup: result.data.setup,
        delivery: result.data.delivery,
      };
    } else {
      data = {
        setup: result.data.joke,
      };
    }

    res.render("index.ejs", {
      // content: JSON.stringify(data),
      setup: data.setup,
      delivery: data.delivery,
    });
  } catch (error) {
    console.error(error);
    res.render("index.ejs", { content: JSON.stringify(error) });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

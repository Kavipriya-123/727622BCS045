const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());

const BASE_URL = "http://20.244.56.144";


app.post("/evaluation-service/auth", async (req, res) => {
  try {
    const response = await axios.post(`${BASE_URL}/evaluation-service/auth`, req.body, {
      headers: { "Content-Type": "application/json" },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/evaluation-service/users", async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/evaluation-service/users`, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



app.get("/evaluation-service/users/:postId/posts", async (req, res) => {
  const { postId } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/evaluation-service/users/${postId}/posts`, {
      headers: {
        Authorization: req.headers.authorization,
      },
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




app.get("/evaluation-service/posts/:postId/comments", async (req, res) => {
    const { postId } = req.params;
    try {
      const response = await axios.get(`${BASE_URL}/evaluation-service/posts/${postId}/comments`, {
        headers: {
          Authorization: req.headers.authorization,
        },
      });
      res.json(response.data);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });




app.listen(5000, () => {
  console.log("Proxy server running on http://localhost:5000");
});

module.exports = app;

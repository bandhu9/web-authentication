const express = require("express");

const PORT = 3000;

const app = express();

app.use(express.static("./public"));
app.use(express.json()); //as i gave to work with json response

// states
const userStore = {};

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  const id = `user_${Date.now()}`;

  const user = {
    id,
    username,
    password,
  };
  userStore[id] = user;

  console.log(`Resister successful`, userStore[id])

  return res.json({ id });
});

app.post('/register-challenge', (req, res)=> {})

app.listen(PORT, () => console.log(`server start on PORT- ${PORT}`));
